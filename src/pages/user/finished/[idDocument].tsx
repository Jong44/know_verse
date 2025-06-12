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
import { useRouter } from 'next/router';
import { PartialBlock } from '@blocknote/core';
import { formatedDate } from '@/utils/formatDate';

const View = dynamic(() => import("@/components/custom/view-block"), {
  ssr: false
})

const Index = () => {
  const router = useRouter();

  const { idDocument } = router.query;

  const [document, setDocument] = useState<DocType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(`/api/tutorial/finished/${idDocument}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        );
        const data = await response.json();
        if (data.status === 'success') {
          setDocument(data.data);
        } else {
          console.error('Error fetching document:', data.message);
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    }
    if (idDocument) {
      fetchDocument();
    }
  }, [idDocument]);
  

  if(loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5 0a5.5 5.5 0 1 0 11 0A5.5 5.5 0 0 0 6.5 12z"></path>
        </svg>
      </div>
    )
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
            <CardDescription className='text-sm'>{formatedDate(document?.updated_at.toString())}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <View initialContent={document?.detail_document as PartialBlock[]} />
        </CardContent>
      </Card>
    </main>
    </>
  )
}

export default Index