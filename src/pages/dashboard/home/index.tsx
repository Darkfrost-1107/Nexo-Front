import { Avatar, AvatarImage } from '@/shared/components/ui/avatar'
import PresentationWidget from '@/widget/ui/presentation'
import React from 'react'

export default function HomeDashboardPage() {
  return (
    <PresentationWidget 
      src="https://avatars.githubusercontent.com/u/123456789?v=4"
      alt="User Avatar"
      title="Bienvenido Usuario"
    />
  )
}
