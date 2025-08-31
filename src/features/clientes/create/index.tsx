import { Button } from '@/shared/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/shared/components/ui/dialog'

import { UserPlus } from 'lucide-react'
import React from 'react'
import FeatureDialog from './dialog'

export default function CreateClientFeature() {
  return (
    // <div className="h-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 shadow-sm w-full"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Crear cliente
          </Button>
        </DialogTrigger>

        <FeatureDialog />
      </Dialog>
    // </div>
  )
}