import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';
import { Checkbox } from '@/shared/components/ui/checkbox';

const clientesData = [
  { id: 1, nombre: "Juan Perez", cultivo: "Cultivo A", asesor: "Maria Lopez" },
  { id: 2, nombre: "Ana García", cultivo: "Cultivo B", asesor: "Carlos Ruiz" },
  { id: 3, nombre: "Pedro Martínez", cultivo: "Cultivo A", asesor: "Maria Lopez" },
  { id: 4, nombre: "Lucia Fernández", cultivo: "Cultivo C", asesor: "José Torres" },
  { id: 5, nombre: "Roberto Silva", cultivo: "Cultivo B", asesor: "Carlos Ruiz" },
];

export default function ClientesTable() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-green-600 hover:bg-green-600">
            <TableHead className="w-12 text-white font-semibold">
              <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-green-600" />
            </TableHead>
            <TableHead className="text-white font-semibold">Nombre</TableHead>
            <TableHead className="text-white font-semibold">Cultivo</TableHead>
            <TableHead className="text-white font-semibold">Asesor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientesData.map((cliente) => (
            <TableRow 
              key={cliente.id} 
              className="hover:bg-gray-50 border-b border-gray-200"
            >
              <TableCell className="py-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium text-gray-800 py-3">
                {cliente.nombre}
              </TableCell>
              <TableCell className="text-gray-600 py-3">
                {cliente.cultivo}
              </TableCell>
              <TableCell className="text-gray-600 py-3">
                {cliente.asesor}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}