import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Search, Plus, MapPin, UserRound, ChevronDownIcon } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/shared/components/ui/dialog";
import {  Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/shared/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover"
import { Calendar } from "@/shared/components/ui/calendar"
import * as React from "react"


export function AsignationClientDialog() {
  const [clientes, setClientes] = useState<
    { cliente: string; cultivo: string; proximaVisita: string }[]
  >([]);

  const [nuevoCliente, setNuevoCliente] = useState({
    cliente: "",
    cultivo: "",
    proximaVisita: "",
  });

  const asignarCliente = () => {
    if (nuevoCliente.cliente && nuevoCliente.cultivo && nuevoCliente.proximaVisita) {
      setClientes([...clientes, nuevoCliente]);
      setNuevoCliente({ cliente: "", cultivo: "", proximaVisita: "" });
    }
  };

  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Continuar
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0 max-h-[90vh] overflow-hidden">
        <DialogHeader className="bg-green-600 text-white p-6">
          <DialogTitle className="text-xl font-semibold">
            Asignación de clientes
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 overflow-y-auto">
          {/* Buscar cliente */}
          <div className="mb-6">
            <Label className="text-sm font-semibold text-gray-700 mb-2 block">
              Buscar cliente
            </Label>
            <div className="flex gap-2">
              <Input
                placeholder="Buscar cliente..."
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 px-4">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Información del cliente */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Cliente</Label>
              <Input
                value={nuevoCliente.cliente}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, cliente: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Nombre del cliente"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Cultivo</Label>
              <Input
                value={nuevoCliente.cultivo}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, cultivo: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Tipo de cultivo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-semibold text-gray-700">
                Próxima Visita
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-full justify-between border border-gray-300 focus:border-green-500 focus:ring-green-500 text-left font-normal"
                  >
                    {date ? (
                      date.toLocaleDateString("es-PE", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    ) : (
                      <span className="text-gray-400">Fecha</span>
                    )}
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-end">
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full h-full"
                onClick={asignarCliente}
              >
                <Plus className="h-4 w-4 mr-2" />
                Asignar <br /> cliente
              </Button>
            </div>
          </div>

          {/* Tabla de clientes */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-600 hover:bg-green-600">
                    <TableHead className="text-white font-semibold">Cliente</TableHead>
                    <TableHead className="text-white font-semibold">Cultivo</TableHead>
                    <TableHead className="text-white font-semibold">Ubicación</TableHead>
                    <TableHead className="text-white font-semibold">Última visita</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {clientes.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                        <div className="flex flex-col items-center gap-2">
                        <UserRound className="h-8 w-8 text-gray-400" />
                        <span>No hay clientes asignados aún</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  ) : (
                    clientes.map((c, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-800">
                          {c.cliente}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {c.cultivo}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1"
                          >
                            <MapPin className="h-3 w-3 mr-1" />
                            Ver
                          </Button>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {new Date(c.proximaVisita).toLocaleDateString("es-PE", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          </div>

        {/* Footer */}
        <div className="flex justify-between p-6 bg-gray-50 border-t border-gray-200">
          <DialogClose asChild>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              Atrás
            </Button>
          </DialogClose>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Guardar asignaciones
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}