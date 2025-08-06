import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from '@/shared/components/ui/sidebar'
import { Button } from '@/shared/components/ui/button'

export default function DashboardWidgetSidebar() {

  return (
    <div className="h-full">
      <Sidebar variant="floating" className="relative h-full">
        <SidebarHeader/>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <div className='flex flex-col gap-4 mt-1'>
                <Button>Asesores</Button>
                <Button>Visitas</Button>
                <Button>Clientes</Button>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  )
}
