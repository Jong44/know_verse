import React, { useEffect, useState } from "react"
import {
  BookOpen,
  Frame,
  GalleryVerticalEnd,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { NavProjects } from "./nav-projects"
import { useRouter } from "next/router"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const [data, setData] = useState({
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: GalleryVerticalEnd,
      },
    ],
    projects: [
    ],
  })

  const [loading, setLoading] = useState(false)

  const checkActive = () => {
    const pathname = router.pathname
    const navMain = data.navMain.map((item) => {
      if (pathname.includes(item.url)) {
        item.isActive = true
      } else {
        item.isActive = false
      }
      return item
    }
    )
    setData({ ...data, navMain })
  }

  const checkAvailableProjects = async () => {
    setLoading(true)
    try {
      const projects = await fetch('/api/tutorial', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const projectsData = await projects.json()
      if (projectsData.status === 'success') {
        const newProjects = projectsData.data.map((project: any) => ({
          name: project.judul,
          url: `/user/document/${project.id}`,
        }))
        setData({ ...data, projects: newProjects })
      } else {
        console.error('Failed to fetch projects:', projectsData.message)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkActive()
    checkAvailableProjects()
  }, [router.pathname])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b max-h-16">
        <SidebarMenu>
          <SidebarMenuItem >
            <SidebarMenuButton
              onClick={() => router.push('/user/dashboard')}
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-3 hover:bg-white active:bg-white cursor-pointer"
            >
              <Image src={'/images/logo.png'} alt={"Logo"} width={40} height={40} />
              <h1 className="font-bold text-xl">KnowVerse</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} loading={loading} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
