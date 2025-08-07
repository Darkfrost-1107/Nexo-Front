import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

export default function VisitasTable() {
  return (
    <Table>
        <TableCaption>Lista de Visitas por Asesor</TableCaption>
        <TableHeader>
            <TableHead className="w-[100px]">Asesor</TableHead>
            <TableCell> Juan Perez </TableCell>
            <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Fecha de Recomendación</TableHead>
            <TableHead>Cliente</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium align-middle"> ✔️ </TableCell>
            <TableCell> 15/05/2025 </TableCell>
            <TableCell> Naiel Mamani </TableCell>
            </TableRow>
        </TableBody>
    </Table>
  );
}

