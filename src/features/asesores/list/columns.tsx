import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { IconEdit, IconTrash } from "@tabler/icons-react"


const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Activo
        </Badge>
      );
    case "inactive":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Inactivo
        </Badge>
      );
    case "suspended":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          Suspendido
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getAcciones = () => {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <IconEdit /> Editar
      </Button>
      <Button variant="outline" color="destructive">
        <IconTrash /> Eliminar
      </Button>
    </div>
  );
};
  
export const columns: ColumnDef<AsesorData>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return getStatusBadge(status);
    },
  },
  {
    accessorKey: "user.names",
    header: "Asesor",
  },
  {
    accessorKey: "",
    header: "Acciones",
    cell: () => {
      return getAcciones();
    },
  }
]