"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1">
        {items.map((item) => (
          <SidebarMenuItem>
          <SidebarMenuButton tooltip={item.title} className={`h-9 ${item.isActive ? "bg-primary active:bg-primary hover:bg-primary" : ""}`}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
