import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Badge } from '@/shared/components/ui/badge';
import { Calendar, User, MapPin } from 'lucide-react';

const visitasData = [
  {
    id: 1,
    asesor: "Juan Perez",
    cliente: "Naiel Mamani",
    fechaRecomendacion: "15/05/2025",
    fechaVisita: "20/05/2025",
    cultivo: "Cultivo A",
    ubicacion: "Arequipa",
    status: "programada"
  },
  {
    id: 2,
    asesor: "Juan Perez",
    cliente: "Maria García",
    fechaRecomendacion: "16/05/2025",
    fechaVisita: "21/05/2025",
    cultivo: "Cultivo B",
    ubicacion: "Cusco",
    status: "completada"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completada":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">✓ Completada</Badge>;
    case "programada":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">📅 Programada</Badge>;
    case "pendiente":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">⏳ Pendiente</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

// Agrupar visitas por asesor
const visitasPorAsesor = visitasData.reduce((acc, visita) => {
  if (!acc[visita.asesor]) {
    acc[visita.asesor] = [];
  }
  acc[visita.asesor].push(visita);
  return acc;
}, {} as Record<string, typeof visitasData>);

export default function VisitasTable() {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Visitas por Asesor
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        {Object.entries(visitasPorAsesor).map(([asesor, visitas]) => (
          <div key={asesor} className="border-b border-gray-200 last:border-b-0">
            {/* Header del asesor */}
            <div className="bg-green-600 text-white p-3">
              <div className="flex items-center gap-2 font-semibold">
                <User className="h-4 w-4" />
                {asesor}
                <span className="text-green-200 text-sm ml-2">
                  ({visitas.length} visita{visitas.length !== 1 ? 's' : ''})
                </span>
              </div>
            </div>
            
            {/* Tabla de visitas del asesor */}
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="font-semibold">Estado</TableHead>
                  <TableHead className="font-semibold">Cliente</TableHead>
                  <TableHead className="font-semibold">Cultivo</TableHead>
                  <TableHead className="font-semibold">Fecha Recomendación</TableHead>
                  <TableHead className="font-semibold">Fecha Visita</TableHead>
                  <TableHead className="font-semibold">Ubicación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visitas.map((visita) => (
                  <TableRow 
                    key={visita.id} 
                    className="hover:bg-gray-50 border-b border-gray-100"
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="py-3">
                      {getStatusBadge(visita.status)}
                    </TableCell>
                    <TableCell className="font-medium text-gray-800 py-3">
                      {visita.cliente}
                    </TableCell>
                    <TableCell className="text-gray-600 py-3">
                      {visita.cultivo}
                    </TableCell>
                    <TableCell className="text-gray-600 py-3">
                      {visita.fechaRecomendacion}
                    </TableCell>
                    <TableCell className="text-gray-600 py-3">
                      {visita.fechaVisita}
                    </TableCell>
                    <TableCell className="py-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-3 w-3" />
                        {visita.ubicacion}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}