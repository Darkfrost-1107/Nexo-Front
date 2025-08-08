import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Plus, MapPin, Sprout } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/shared/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/shared/components/ui/table";

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
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Sprout className="h-4 w-4 mr-2" />
          Agregar Cultivos
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0 max-h-[90vh] overflow-hidden">
        <DialogHeader className="bg-green-600 text-white p-5">
          <DialogTitle className="text-xl font-semibold">
            Gestión de Cultivos
          </DialogTitle>
        </DialogHeader>

        <div className="p-5 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Agregar nuevos cultivos
          </h2>

          {/* Nuevo cultivo */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Cultivo</Label>
              <Input
                value={nuevo.nombre}
                onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Tipo de cultivo"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Área (has.)</Label>
              <Input
                value={nuevo.area}
                onChange={(e) => setNuevo({ ...nuevo, area: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Hectáreas"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Ubicación</Label>
              <Input
                value={nuevo.ubicacion}
                onChange={(e) => setNuevo({ ...nuevo, ubicacion: e.target.value })}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Ubicación del cultivo"
              />
            </div>
            <div className="flex items-end">
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full h-full"
                onClick={agregarCultivo}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo <br /> cultivo
              </Button>
            </div>
          </div>

          {/* Tabla de cultivos */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-600 hover:bg-green-600">
                  <TableHead className="text-white font-semibold">Cultivo</TableHead>
                  <TableHead className="text-white font-semibold">Área (has.)</TableHead>
                  <TableHead className="text-white font-semibold">Ubicación</TableHead>
                  <TableHead className="text-white font-semibold">Responsable</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {cultivos.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Sprout className="h-8 w-8 text-gray-400" />
                        <span>No hay cultivos agregados aún</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  cultivos.map((cultivo, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-gray-800">
                        {cultivo.nombre}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {cultivo.area}
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
                        <div className="text-sm">
                          <div className="font-medium">Nombre Responsable</div>
                          <div className="text-gray-500">+51 999 888 777</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
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
            Guardar cultivos
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
