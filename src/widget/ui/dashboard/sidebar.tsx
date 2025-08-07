import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from '@/shared/components/ui/sidebar'
import { Button } from '@/shared/components/ui/button'
import { useNavigate } from 'react-router'

export default function DashboardWidgetSidebar() {

  let navigate = useNavigate()

  function goTo(to: string){
    return () => navigate(to)
  }

  return (
    <div className="h-full">
      <Sidebar variant="floating" className="relative h-full">
        <SidebarHeader/>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <div className='flex flex-col gap-4 mt-1'>
                <Button onClick={goTo("/dashboard/asesores")}>Asesores</Button>
                <Button onClick={goTo("/dashboard/visitas")}>Visitas</Button>
                <Button onClick={goTo("/dashboard/clientes")}>Clientes</Button>
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
