import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarProvider } from '@/shared/components/ui/sidebar'


export default function DashboardWidgetSidebar() {

  return (
    <div className="h-full">
      <Sidebar variant="floating" className="relative h-full">
        <SidebarHeader/>
        <SidebarContent>
          <SidebarGroup >
            <SidebarGroupLabel>
              GESTIÓN
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  )
}
