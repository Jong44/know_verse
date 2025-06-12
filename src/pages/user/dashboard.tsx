import CardDocument from '@/components/custom/card-document'
import LayoutSidebar from '@/components/custom/layout-sidebar'
import TimeIcon from '@/components/icons/time-icon'
import withAuth from '@/middleware/withAuth'
import Head from 'next/head'
import React from 'react'

const formatedDate = (date: string) => {
  const d = new Date(date);
  const now = new Date();
  const diff = Math.abs(now.getTime() - d.getTime());
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return `${days} days ago`;
  }
}

const Index = () => {
  const [document, setDocument] = React.useState<DocType[]>([])
  const [loading, setLoading] = React.useState(false)

  const getDocument = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/tutorial`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setDocument(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getDocument()
  }, [])

  if (loading) {
    return (
      <LayoutSidebar>
        <div className='flex justify-center items-center h-screen'>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
      </LayoutSidebar>
    )
  }


  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <LayoutSidebar>
        <div className="text-center">
          <h1 className='font-bold text-3xl'>Good evening, Tanjung</h1>
        </div>
        <section className='mt-10'> 
          <div className="flex items-center gap-2 text-sm">
            <TimeIcon />
            <p className='text-base font-medium'>Baru saja dilihat</p>
          </div>
          <div className="grid grid-cols-4 mt-5 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {document?.length > 0 && document?.map((doc) => (
              <CardDocument
                key={doc.id}
                id={doc.id}
                judul={doc.judul}
                kode_matakuliah={doc.kode_matakuliah}
                finishedUrl={`/user/document/${doc.id}`}
                presentationUrl={`/user/presentation/${doc.id}`}
                time={formatedDate(doc.updated_at.toString())}
              />
            ))}
          </div>
        </section>
      </LayoutSidebar>
    </>
  )
}

export default withAuth(Index)