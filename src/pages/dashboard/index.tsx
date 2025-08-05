import DashboardWidget from '@/widget/ui/dashboard'
import React from 'react'
import { Outlet } from 'react-router'

export default function DashboardPage() {
  return (
    <DashboardWidget>
        <Outlet />
    </DashboardWidget>
  )
}
