import {Button} from '@/shared/components/ui/button'
import  CrearClientDialog from './clientesFormCreate';

export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 mt-1">
        <Button size="sm" className="text-white"> Generar Reportes </Button>
        {/* <Button size="sm" className="text-white"> Crear Cliente </Button> */}
        <CrearClientDialog />
    </div>
  );
}
