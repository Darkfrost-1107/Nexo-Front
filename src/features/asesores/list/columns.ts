import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AsesorData>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "user",
    header: "User",
  },
]