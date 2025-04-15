import LayoutSidebar from '@/components/custom/layout-sidebar'
import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, PlusCircle } from 'lucide-react'
import React from 'react'
import md from 'markdown-it'
import MoreIcon from '@/components/icons/more-icon';
import DropdownDocument from '@/components/custom/dropdown-document';


const Editor = dynamic(() => import("@/components/custom/editor"), {
  ssr: false})

const Index = () => {


  return (
    <>
      <LayoutSidebar>
        <div className='flex gap-4'>
          <div className="max-w-screen flex-1">
            <Card className=''>
              <CardHeader className='pl-20 pr-10 flex justify-between items-center gap-4 border-b'>
                <CardTitle className='text-xl'>Document Title</CardTitle>
                <div className="flex items-center gap-4">
                <CardDescription className='text-sm'>12 Menit Lalu</CardDescription>
                <div className="cursor-pointer">
                  <DropdownDocument />
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

export default Index