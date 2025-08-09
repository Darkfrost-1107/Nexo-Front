import AppRouter from '../router'
import { Toaster } from '@/shared/components/ui/sonner'
import "@/app/App.css"

export default function AppBuild() {
  return (
    <>
        <AppRouter/>
        <Toaster/>
    </>
  )
}
