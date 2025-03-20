import LayoutSidebar from '@/components/custom/layout-sidebar'
import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Materi</title>
        <meta name="description" content="Materi" />
      </Head>
      <LayoutSidebar>
        <div></div>
    </LayoutSidebar>
    </>
  )
}

export default Index