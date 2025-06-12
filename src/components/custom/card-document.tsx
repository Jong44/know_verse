import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import DocumentIcon from '../icons/document-icon'
import MoreIcon from '../icons/more-icon'

interface CardDocumentProps {
  id?: number
  judul?: string  
  kode_matakuliah?: string
  finishedUrl?: string
  presentationUrl?: string,
  time?: string
}

const CardDocument: React.FC<CardDocumentProps> = ({
  id,
  judul,
  kode_matakuliah,
  finishedUrl,
  presentationUrl,
  time
}) => {

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
        <CardTitle className='text-base text-ellipsis line-clamp-1'>{judul}</CardTitle>
        <CardDescription className='mt-2 text-sm'>{time}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CardDocument