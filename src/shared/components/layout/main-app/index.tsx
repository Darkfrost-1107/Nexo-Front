import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { SidebarProvider } from '../../ui/sidebar'

interface MainAppLayoutProps {
  children?: React.ReactNode
  header?: React.ReactNode
  sidebar?: React.ReactNode
  title?: string | React.ReactNode
}

export default function MainAppLayout({ children, header, sidebar, title}: MainAppLayoutProps) {
  return (
    <SidebarProvider className="flex flex-col h-full">
      { header ? 
        <header className="h-18 w-full bg-primary flex items-center justify-between">
            {header}
        </header>
        : ""
      }
      <div className="grow flex items-center justify-center h-full">
        { sidebar ? sidebar : "" }
        <main className="grow p-2 flex h-full">
          <Card className='grow'>
            {
              title ? 
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
              : ""
            }
            <CardContent className="h-full flex flex-col">
              { children }
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  )
}
