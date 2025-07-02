import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,

  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MoreIcon from "../icons/more-icon"
import Link from "next/link"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import DialogEditDocument from "./dialog-edit-document"
import { useState } from "react"
import { jsPDF } from "jspdf";
import { PartialBlock } from "@blocknote/core"

interface DropdownDocumentProps {
  id?: number
  judul?: string
  kode_matakuliah?: string
  finishedUrl?: string
  presentationUrl?: string
  blocks?: PartialBlock[]
}

const DropdownDocument: React.FC<DropdownDocumentProps> = ({
  id,
  judul,
  kode_matakuliah,
  finishedUrl,
  presentationUrl,
  blocks,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenChange = () => {
    setIsOpen(prev => !prev)
  }

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const loadImageAsCanvas = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
      img.src = url;
    });
  };


  const handleExportPDF = async (blocks: any[], judul = "document") => {
    console.log("Exporting to PDF", blocks);
    const doc = new jsPDF();
    let y = 10;

    for (const block of blocks) {
      switch (block.type) {
        case "heading":
          doc.setFontSize(20);
          doc.setTextColor(0);
          doc.text(block.content[0]?.text || "", 10, y);
          y += 10;
          break;

        case "numberedListItem":
          doc.setFontSize(12);
          doc.text(`- ${block.content[0]?.text || ""}`, 10, y);
          y += 7;
          break;

        case "paragraph":
          doc.setFontSize(12);
          doc.setTextColor(0);
          doc.text(block.content?.[0]?.text || "", 10, y);
          y += 7;
          break;

        case "codeBlock":
          doc.setFontSize(10);
          doc.setFont("Courier", "normal");
          doc.setFillColor(0, 0, 0);
          doc.setTextColor(255, 255, 255);

          const codeLines = block.content?.[0]?.text.split("\n") || [];
          const height = 7 * (codeLines.length + 1);
          doc.rect(5, y - 3, 200, height, "F");

          doc.text("```", 10, y);
          y += 5;

          codeLines.forEach((line, index) => {
            doc.text(line, 10, y + (index * 7));
          });
          y += codeLines.length * 7;
          break;

        case "image":
          const imgUrl = block.props?.url;
          console.log("Processing image:", imgUrl);

          if (imgUrl) {
            try {
              if (y > 250) {
                doc.addPage();
                y = 10;
              }

              let imageData: string | null = null;

              // Method 1: Load image via <img> tag and convert to canvas
              try {
                imageData = await loadImageAsCanvas(imgUrl);
              } catch (imgErr) {
                console.warn("Canvas load failed, trying proxy...", imgErr.message);

                // Method 2: Try with CORS proxy fallback
                try {
                  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(imgUrl)}`;
                  const proxyResponse = await fetch(proxyUrl);
                  if (proxyResponse.ok) {
                    const blob = await proxyResponse.blob();
                    if (blob.size > 0) {
                      imageData = await blobToBase64(blob);
                    }
                  }
                } catch (proxyError) {
                  console.warn("Proxy fetch failed:", proxyError.message);
                }
              }

              if (imageData && imageData.startsWith("data:image")) {
                const format = imageData.includes("png") ? "PNG" : "JPEG";

                const img = new Image();
                img.src = imageData;
                await new Promise((res) => (img.onload = res));

                // Resize proporsional
                let imgWidth = img.width;
                let imgHeight = img.height;
                const maxWidth = 180;
                const maxHeight = 100;

                if (imgWidth > maxWidth) {
                  imgHeight = (maxWidth / imgWidth) * imgHeight;
                  imgWidth = maxWidth;
                }
                if (imgHeight > maxHeight) {
                  imgWidth = (maxHeight / imgHeight) * imgWidth;
                  imgHeight = maxHeight;
                }

                doc.addImage(imageData, format, 10, y, imgWidth, imgHeight);
                y += imgHeight + 5;

                if (block.props?.caption) {
                  doc.setFontSize(10);
                  doc.setTextColor(50);
                  doc.text(block.props.caption, 10, y);
                  y += 7;
                }
              } else {
                throw new Error("Image conversion failed");
              }
            } catch (err: any) {
              console.error("Failed to load image:", err.message);
              doc.setFontSize(10);
              doc.setTextColor(150, 0, 0);
              doc.text(`[Image could not be loaded: ${imgUrl}]`, 10, y);
              y += 5;
              doc.text(`Error: ${err.message}`, 10, y);
              y += 10;
            }
          }
          break;

        default:
          doc.setFontSize(12);
          doc.setTextColor(0);
          doc.text(block.content?.[0]?.text || "", 10, y);
          y += 7;
          break;
      }
    }

    doc.save(`${judul || "document"}.pdf`);
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="active:bg-transparent"> <MoreIcon /> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleOpenChange}>
            Edit
          </DropdownMenuItem>
          <Link href={presentationUrl ? `/user/presentation/${presentationUrl}` : "/example"}>
            <DropdownMenuItem>
              Presentation
            </DropdownMenuItem>
          </Link>
          <Link href={finishedUrl ? `/user/finished/${finishedUrl}` : "/example"}>
            <DropdownMenuItem>
              Finished
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleExportPDF(blocks ?? [])}>
            Export PDF
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuGroup>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
      <Dialog defaultOpen={false} open={isOpen} onOpenChange={handleOpenChange}>
        <DialogEditDocument documentId={id?.toString() ?? ""} documentTitle={judul ?? ""} documentSubject={kode_matakuliah ?? ""}>
        </DialogEditDocument>
      </Dialog>
    </DropdownMenu>
  )
}

export default DropdownDocument