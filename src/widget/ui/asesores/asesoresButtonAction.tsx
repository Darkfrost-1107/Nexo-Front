import {Button} from '@/shared/components/ui/button'
import CrearAsesorDialog from './asesoresFormCreate';

export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 mt-1">
        <Button size="sm" className="text-white"> Generar Reportes </Button>
        <CrearAsesorDialog />
    </div>
  );
}
