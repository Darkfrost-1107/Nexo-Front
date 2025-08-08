import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

export default function ClientesTable() {
  return (
    <Table>
        <TableCaption>Lista de Clientes</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Cultivo</TableHead>
            <TableHead>Asesor</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium align-middle"> ✔️ </TableCell>
            <TableCell>Juan Perez</TableCell>
            <TableCell>Cultivo A</TableCell>
            <TableCell>Maria Lopez</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  );
}

