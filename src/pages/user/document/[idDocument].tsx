import LayoutSidebar from '@/components/custom/layout-sidebar'
import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, PlusCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import md from 'markdown-it'
import MoreIcon from '@/components/icons/more-icon';
import DropdownDocument from '@/components/custom/dropdown-document';
import { DocumentService } from '@/services/document-service';
import Head from 'next/head';
import withAuth from '@/middleware/withAuth';


const Editor = dynamic(() => import("@/components/custom/editor"), {
  ssr: false})

const Index = () => {

  const [document, setDocument] = useState<DocType | undefined | "loading">("loading");
  
    useEffect(() => {
      const doc = DocumentService().getDocument();
      if (doc) {
        console.log("Document", doc.url_presentation);
        setDocument(doc);
      }
      else {
        setDocument(undefined);
      }
    }, []);
  
    if (document === "loading") {
      return <div>Loading...</div>
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
                <CardDescription className='text-sm'>12 Menit Lalu</CardDescription>
                <div className="cursor-pointer">
                  <DropdownDocument finishedUrl={document?.url_finished} presentationUrl={document?.url_presentation} />
                </div>
                </div>
              </CardHeader>
            <CardContent>
              <Editor />
            </CardContent>
            </Card>
          </div>
        </div>
      </LayoutSidebar>
    </>
  )
}

export default withAuth(Index)