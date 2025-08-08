import {Button} from '@/shared/components/ui/button'
import  CrearClientDialog from './clientesFormCreate';
import { FileText} from 'lucide-react'

export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-3">
      <Button 
        size="default" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 shadow-sm"
      > 
        <FileText className="h-4 w-4 mr-2" />
        Generar Reporte
      </Button>
      
      <CrearClientDialog />
    </div>
  );
}
