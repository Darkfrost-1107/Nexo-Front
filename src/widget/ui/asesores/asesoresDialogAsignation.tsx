import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Search, Plus, MapPin } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/shared/components/ui/dialog";

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
              <Label className="text-sm font-semibold text-gray-700">Próxima visita</Label>
              <Input
                type="date"
                value={nuevoCliente.proximaVisita}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, proximaVisita: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="flex items-end">
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full"
                onClick={asignarCliente}
              >
                <Plus className="h-4 w-4 mr-2" />
                Asignar cliente
              </Button>
            </div>
          </div>

          {/* Tabla de clientes */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Cliente</th>
                    <th className="px-4 py-3 text-left font-semibold">Cultivo</th>
                    <th className="px-4 py-3 text-left font-semibold">Ubicación</th>
                    <th className="px-4 py-3 text-left font-semibold">Última visita</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {clientes.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                        No hay clientes asignados aún
                      </td>
                    </tr>
                  ) : (
                    clientes.map((c, index) => (
                      <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-800">{c.cliente}</td>
                        <td className="px-4 py-3 text-gray-600">{c.cultivo}</td>
                        <td className="px-4 py-3">
                          <Button 
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1"
                          >
                            <MapPin className="h-3 w-3 mr-1" />
                            Ver
                          </Button>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(c.proximaVisita).toLocaleDateString("es-PE", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
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