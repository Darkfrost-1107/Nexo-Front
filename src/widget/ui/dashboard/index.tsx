import MainAppLayout from '@/shared/components/layout/main-app'
import React from 'react'
import DashboardWidgetHeader from './header'
import DashboardWidgetSidebar from './sidebar'

interface DashboardWidgetProps {  
  children?: React.ReactNode
}

export default function DashboardWidget({children} : DashboardWidgetProps) {
  return (
    <MainAppLayout
        header={ <DashboardWidgetHeader /> }
        sidebar={ <DashboardWidgetSidebar /> }
    >
      {children}
    </MainAppLayout>
  )
}
