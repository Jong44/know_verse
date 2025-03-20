import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import DocumentIcon from '../icons/document-icon'
import MoreIcon from '../icons/more-icon'

const CardDocument = () => {
  return (
    <Card className='cursor-pointer hover:shadow-xs'>
      <CardHeader className='flex items-center justify-between'>  
        <div className='bg-black-3 rounded-full flex items-center justify-center p-3 w-fit'>
          <DocumentIcon />
        </div>
        <div className="cursor-pointer">
        <MoreIcon />

        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-base text-ellipsis line-clamp-1'>Surat Keterangan Domisili</CardTitle>
        <CardDescription className='mt-2 text-sm'>12 Menit yang lalu</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CardDocument