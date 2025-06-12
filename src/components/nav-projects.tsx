import {
  Book,
  BookOpen,
  CirclePlusIcon,
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import DialogAddDocument from "./custom/dialog-add-document"
import { Toaster } from "sonner"

export function NavProjects({
  projects,
  loading = false,
}: {
  projects: {
    id: number,
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { isMobile } = useSidebar()

  if(loading) {
    return (
      <p>
        loading...
      </p>
    )
  }

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <div className="flex justify-between items-center pr-2">
        <SidebarGroupLabel>Dokumen Saya</SidebarGroupLabel>
        <Dialog>
          <DialogTrigger asChild>
            <CirclePlusIcon className="w-5 h-5" ></CirclePlusIcon>
          </DialogTrigger>
          <DialogAddDocument>
          </DialogAddDocument>
        </Dialog>
      </div>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <BookOpen />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <Toaster/>
      </SidebarMenu>
    </SidebarGroup>
  )
}
