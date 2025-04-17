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
import { set } from 'zod';
import Head from 'next/head';

const View = dynamic(() => import("@/components/custom/view-block"), {
  ssr: false
})

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
        <title>Finished - {document?.judul}</title>
        <meta name="description" content="Document Editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-32 px-40'>
      <Card className=''>
        <CardHeader className='pl-20 pr-10 flex justify-between items-center gap-4 border-b'>
          <CardTitle className='text-xl'>{document?.judul}</CardTitle>
          <div className="flex items-center gap-4">
            <CardDescription className='text-sm'>12 Menit Lalu</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <View />
        </CardContent>
      </Card>
    </main>
    </>
  )
}

export default Index