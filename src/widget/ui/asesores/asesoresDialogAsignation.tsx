import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
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
        <Button variant="default">Asignar Clientes</Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle className="text-white bg-green-700 px-6 py-3 rounded-t text-xl">
            Crear asesor
          </DialogTitle>
        </DialogHeader>

        <h2 className="text-xl font-bold text-black mt-4 mb-2">Asignación de clientes</h2>

        {/* Buscar cliente */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Buscar cliente</label>
          <div className="flex gap-2">
            <Input
              placeholder="Buscar cliente..."
              className="border-green-500"
            />
            <Button className="bg-green-700">🔍</Button>
          </div>
        </div>

        {/* Información del cliente */}
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700">Cliente</label>
            <Input
              value={nuevoCliente.cliente}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, cliente: e.target.value })}
              className="border-green-500"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700">Cultivo</label>
            <Input
              value={nuevoCliente.cultivo}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, cultivo: e.target.value })}
              className="border-green-500"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700">Próxima visita</label>
            <Input
              type="date"
              value={nuevoCliente.proximaVisita}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, proximaVisita: e.target.value })}
              className="border-green-500"
            />
          </div>

          <Button
            className="bg-blue-600 hover:bg-blue-700 mt-6 h-10"
            onClick={asignarCliente}
          >
            + Asignar cliente
          </Button>
        </div>

        {/* Tabla de clientes */}
        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white text-left">
              <tr>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Cultivo</th>
                <th className="px-4 py-2">Ubicación</th>
                <th className="px-4 py-2">Última visita</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{c.cliente}</td>
                  <td className="px-4 py-2">{c.cultivo}</td>
                  <td className="px-4 py-2">
                    <Button className="bg-green-700 hover:bg-green-800 px-3 py-1 text-sm">Ver</Button>
                  </td>
                  <td className="px-4 py-2">
                    {new Date(c.proximaVisita).toLocaleDateString("es-PE", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-6">
          <DialogClose asChild>
            <Button variant="outline" className="bg-blue-600 text-white">
              Atrás
            </Button>
          </DialogClose>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Guardar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
