import CardDocument from '@/components/custom/card-document'
import LayoutSidebar from '@/components/custom/layout-sidebar'
import TimeIcon from '@/components/icons/time-icon'
import withAuth from '@/middleware/withAuth'
import Head from 'next/head'
import React from 'react'

const Index = () => {
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
          {Array.from({length: 4}).map((_, index) => (
            <CardDocument key={index} />
          ))}
          </div>
        </section>
      </LayoutSidebar>
    </>
  )
}

export default withAuth(Index)