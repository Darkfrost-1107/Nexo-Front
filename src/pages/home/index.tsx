import DashboardWidget from '@/widget/ui/dashboard'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate()
  setTimeout( () => {
    navigate("/login")

  }, 1000)
  
  return (
    <DashboardWidget />
  )
}
