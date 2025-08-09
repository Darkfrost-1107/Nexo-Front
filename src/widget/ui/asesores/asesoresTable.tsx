import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';
import { Checkbox } from '@/shared/components/ui/checkbox';


const asesoresData = [
  { id: 1, nombre: "Pepito Perez", contacto: "Cultivo A" },
  { id: 2, nombre: "Pepito Perez", contacto: "Cultivo A" },
  { id: 3, nombre: "Pepito Perez", contacto: "Cultivo A" },
  { id: 4, nombre: "Pepito Perez", contacto: "Cultivo A" },
  { id: 5, nombre: "Pepito Perez", contacto: "Cultivo A" },
];


export default function AsesoresTable() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-green-600 hover:bg-green-600">
            <TableHead className="w-12 text-white font-semibold">
            </TableHead>
            <TableHead className="text-white font-semibold"></TableHead>
            <TableHead className="text-white font-semibold">Nombre</TableHead>
            <TableHead className="text-white font-semibold">Contacto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asesoresData.map((asesor) => (
            <TableRow 
              key={asesor.id} 
              className="hover:bg-gray-50 border-b border-gray-200"
            >
              <TableCell className="py-3"></TableCell>
              <TableCell className="py-3">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium text-gray-800 py-3">
                {asesor.nombre}
              </TableCell>
              <TableCell className="text-gray-600 py-3">
                {asesor.contacto}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

