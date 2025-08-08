import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/shared/components/ui/dialog";

export function CultivosDialog() {
  const [cultivos, setCultivos] = useState<
    { nombre: string; area: string; ubicacion: string }[]
  >([]);
  const [nuevo, setNuevo] = useState({ nombre: "", area: "", ubicacion: "" });

  const agregarCultivo = () => {
    if (nuevo.nombre && nuevo.area && nuevo.ubicacion) {
      setCultivos([...cultivos, nuevo]);
      setNuevo({ nombre: "", area: "", ubicacion: "" });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Agregar Cultivos</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-white bg-green-700 px-6 py-3 rounded-t text-xl">
            Crear cliente
          </DialogTitle>
        </DialogHeader>

        <h2 className="text-xl font-bold text-black mt-4 mb-2">Cultivos</h2>

        {/* Nuevo cultivo */}
        <div className="flex items-end gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Cultivo</label>
            <Input
              value={nuevo.nombre}
              onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
              className="border-b-2 border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Área (has.)
            </label>
            <Input
              value={nuevo.area}
              onChange={(e) => setNuevo({ ...nuevo, area: e.target.value })}
              className="border-b-2 border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <Input
              value={nuevo.ubicacion}
              onChange={(e) =>
                setNuevo({ ...nuevo, ubicacion: e.target.value })
              }
              className="border-b-2 border-green-500"
            />
          </div>

          <Button
            className="bg-blue-600 hover:bg-blue-700 h-10"
            onClick={agregarCultivo}
          >
            + Nuevo cultivo
          </Button>
        </div>

        {/* Tabla de cultivos */}
        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white text-left">
              <tr>
                <th className="px-4 py-2">Cultivo</th>
                <th className="px-4 py-2">Área (has.)</th>
                <th className="px-4 py-2">Ubicación</th>
                <th className="px-4 py-2">Responsable</th>
              </tr>
            </thead>
            <tbody>
              {cultivos.map((c, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{c.nombre}</td>
                  <td className="px-4 py-2">{c.area}</td>
                  <td className="px-4 py-2">
                    <Button className="bg-green-700 hover:bg-green-800 px-3 py-1 text-sm">
                      Ver
                    </Button>
                  </td>
                  <td className="px-4 py-2">Nombre<br />Celular</td>
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
