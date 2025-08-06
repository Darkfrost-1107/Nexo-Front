import {Button} from '@/shared/components/ui/button'
// import {IconGitBranch} from '@tabler/icons-react';
export default function ActionButtons() {
  return (
    // <div className="action-buttons">
    //   <button type="button">📄 Generar Reporte</button>
    //   <button type="button">👥 Crear asesor</button>
    // </div>
    <div className="flex flex-col gap-4 mt-1">
        <Button size="sm" className="text-white"> Generar Reportes </Button>
        <Button size="sm" className="text-white"> Crear Asesor </Button>
    </div>
  );
}
