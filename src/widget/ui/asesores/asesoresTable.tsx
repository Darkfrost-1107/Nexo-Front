import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

export default function AsesoresTable() {
  return (
    <Table>
        <TableCaption>Lista de Asesores</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Contacto</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium align-middle"> ✔️ </TableCell>
            <TableCell>Juan Perez</TableCell>
            <TableCell>+51 998745612</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  );
}

