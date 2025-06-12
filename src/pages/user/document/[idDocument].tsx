import LayoutSidebar from '@/components/custom/layout-sidebar'
import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, PlusCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import md from 'markdown-it'
import MoreIcon from '@/components/icons/more-icon';
import DropdownDocument from '@/components/custom/dropdown-document';
import { DocumentService } from '@/services/document-service';
import Head from 'next/head';
import withAuth from '@/middleware/withAuth';
import { useRouter } from 'next/router';
import { PartialBlock } from '@blocknote/core';
import { debounce, set } from 'lodash';
import { useBlockMetaStore } from '@/store/hidden-block';
import { formatedDate } from '@/utils/formatDate';



const Editor = dynamic(() => import("@/components/custom/editor"), {
  ssr: false
})

const Index = () => {
  const router = useRouter();
  const id = router.query.idDocument;
  const [blocks, setBlocks] = useState<PartialBlock[]>([]);

  const [idDocument, setIdDocument] = useState<string>("");
  const [document, setDocument] = useState<DocType | undefined | "loading">("loading");

  const onChanges = (blocks: PartialBlock[]) => {
    setBlocks(blocks);
  }

  useEffect(() => {
    const getDocument = async () => {
      try {
        if (id) {
          setIdDocument(id?.toString() || "");

          const response = await fetch(`/api/tutorial/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();
          if (data.status === 'success') {
            const doc = data.data;

            setDocument(doc);

            const meta: Record<string, { status: 'visible' | 'hidden'; detailId: number }> = {};
            for (const detail of doc.tutorial_detail) {
              if (detail.content_json?.id) {
                meta[detail.content_json.id] = {
                  status: detail.status,
                  detailId: detail.id,
                };
              }
            }
            useBlockMetaStore.getState().setBulk(meta);
            setBlocks(doc.tutorial_detail.map((detail: any) => ({
              ...detail.content_json,
            })));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const interval = setInterval(() => {
      getDocument();
    }, 10000); // ✅ lebih aman, bukan 1000ms

    getDocument();

    return () => {
      clearInterval(interval);
    };
  }, [id]);

  if (document === "loading") {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }


  return (
    <>
      <Head>
        <title>{document?.judul}</title>
        <meta name="description" content="Document Editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutSidebar>
        <div className='flex gap-4'>
          <div className="max-w-screen flex-1">
            <Card className=''>
              <CardHeader className='pl-20 pr-10 flex justify-between items-center gap-4 border-b'>
                <CardTitle className='text-xl'>{document?.judul}</CardTitle>
                <div className="flex items-center gap-4">
                  <CardDescription className='text-sm'>{formatedDate(document?.updated_at.toString())}</CardDescription>
                  <div className="cursor-pointer">
                    <DropdownDocument id={document?.id} judul={document?.judul} kode_matakuliah={document?.kode_matakuliah} finishedUrl={document?.url_finished} presentationUrl={document?.url_presentation} blocks={blocks} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Editor id={idDocument} initialContent={document?.detail_document as PartialBlock[]} onChange={onChanges} />
              </CardContent>
            </Card>
          </div>
        </div>
      </LayoutSidebar>
    </>
  )
}

export default withAuth(Index)