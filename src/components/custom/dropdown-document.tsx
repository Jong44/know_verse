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

    const blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const loadImageAsCanvas = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;

                    ctx.drawImage(img, 0, 0);

                    // Convert canvas to base64
                    const dataUrl = canvas.toDataURL('image/png');
                    resolve(dataUrl);
                } catch (error) {
                    reject(error);
                }
            };

            img.onerror = () => reject(new Error('Failed to load image'));

            // Add timestamp to bypass cache
            const separator = url.includes('?') ? '&' : '?';
            img.src = `${url}${separator}t=${Date.now()}`;
        });
    };


    const handleExportPDF = async (blocks) => {
        console.log("Exporting to PDF", blocks);
        const doc = new jsPDF();
        let y = 10; // posisi vertical awal

        for (const block of blocks) {
            switch (block.type) {
                case "heading":
                    doc.setFontSize(20);
                    doc.text(block.content[0]?.text || "", 10, y);
                    y += 10;
                    break;

                case "numberedListItem":
                    doc.setFontSize(12);
                    doc.text(`- ${block.content[0]?.text || ""}`, 10, y);
                    y += 7;
                    break;


                case "image":
                    const imgUrl = block.props?.url;
                    console.log("Processing image:", imgUrl);

                    if (imgUrl) {
                        try {
                            // Check if we need a new page
                            if (y > 250) {
                                doc.addPage();
                                y = 10;
                            }

                            let imageData = null;

                            // Try different methods to fetch image
                            try {
                                // Method 1: Direct fetch with no-cors mode
                                const response = await fetch(imgUrl, {
                                    method: 'GET',
                                    mode: 'no-cors',
                                    cache: 'no-cache'
                                });

                                if (response.ok || response.type === 'opaque') {
                                    const blob = await response.blob();
                                    if (blob.size > 0) {
                                        imageData = await blobToBase64(blob);
                                    }
                                }
                            } catch (corsError) {
                                console.log("CORS fetch failed, trying proxy method:", corsError.message);

                                // Method 2: Try with CORS proxy
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
                                    console.log("Proxy fetch failed:", proxyError.message);

                                    // Method 3: Try to load as img element and convert to canvas
                                    try {
                                        imageData = await loadImageAsCanvas(imgUrl);
                                    } catch (canvasError) {
                                        console.log("Canvas method failed:", canvasError.message);
                                    }
                                }
                            }

                            if (imageData) {
                                // Determine image format
                                const format = imgUrl.toLowerCase().includes('.png') ? 'PNG' : 'JPEG';

                                // Add image to PDF
                                doc.addImage(imageData, format, 10, y, 80, 60);
                                y += 65;

                                // Add caption if exists
                                if (block.props?.caption) {
                                    doc.setFontSize(10);
                                    doc.text(block.props.caption, 10, y);
                                    y += 7;
                                }
                            } else {
                                throw new Error("All image loading methods failed");
                            }

                        } catch (error) {
                            console.error("Failed to load image:", error);
                            // Add placeholder text instead of image
                            doc.setFontSize(10);
                            doc.text(`[Image could not be loaded: ${imgUrl}]`, 10, y);
                            doc.text(`Error: ${error.message}`, 10, y + 7);
                            y += 14;

                            if (block.props?.caption) {
                                doc.text(block.props.caption, 10, y);
                                y += 7;
                            }
                        }
                    }
                    break;

                case "paragraph":
                    doc.setFontSize(12);
                    doc.text(block.content?.[0]?.text || "", 10, y);
                    y += 7;
                    break;

                case "codeBlock":
                    doc.setFontSize(10);
                    doc.setFont("Courier", "normal");
                    doc.setFillColor(0, 0, 0);
                    doc.setTextColor(255, 255, 255);
                    doc.rect(5, y - 3, 200, 7 * (block.content?.[0]?.text.split("\n").length + 1), "F");
                    const codeLines = block.content?.[0]?.text.split("\n") || [];
                    doc.text("```", 10, y);
                    y += 3; // offset untuk kode
                    codeLines.forEach((line, index) => {
                        doc.text(line, 10, y + (index * 7));
                    });
                    y += codeLines.length * 7;
                    break;

                default:
                    doc.setFontSize(12);
                    doc.text(block.content?.[0]?.text || "", 10, y);
                    y += 7;
                    break;
            }


        }

        // Simpan PDF
        doc.save(`${judul || "document"}.pdf`);
    }


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
                    <DropdownMenuItem>
                        Copy Link Presentation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Copy Link Finished
                    </DropdownMenuItem>
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