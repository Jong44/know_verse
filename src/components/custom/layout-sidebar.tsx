import React from 'react'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { AppSidebar } from '../app-sidebar'
import { useRouter } from 'next/router'

const LayoutSidebar = ({children} : {children: React.ReactNode}) => {
  const router = useRouter()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* header */}
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-white transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        {/* body */}
        <div className={`bg-black-3 min-h-screen  max-lg:p-8 max-md:p-6 ${router.pathname === '/user/dashboard' ? 'py-16 px-32' : 'p-[32px]'}`}>
            {children}  
        </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

export default LayoutSidebar