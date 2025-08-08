import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/shared/components/ui/dialog";
import { CultivosDialog } from "./clientesCultivosDialog";

export default function CrearClienteDialog() {
  return (
    <div className="h-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 shadow-sm w-full"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Crear cliente
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="bg-green-600 text-white p-5">
          <DialogTitle className="text-xl font-semibold">
            Crear cliente
          </DialogTitle>
        </DialogHeader>

        <div className="p-4">
          {/* Tipo de cliente */}
          <div className="mb-0">
            <Label className="text-sm font-semibold text-gray-700 mb-3 block">
              Tipo de cliente
            </Label>
            <RadioGroup defaultValue="persona" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="persona" id="persona" />
                <Label htmlFor="persona" className="font-medium text-gray-700">Persona</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="razon" id="razon" />
                <Label htmlFor="razon" className="font-medium text-gray-700">Razón social</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Formulario */}
          <form className="grid grid-cols-2 gap-6 mt-1">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Nombre</Label>
              <Input 
                placeholder="Ingrese el nombre completo" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Documento de identidad - DNI</Label>
              <Input 
                placeholder="Ingrese el DNI" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Nombre del contacto</Label>
              <Input 
                placeholder="Ingrese el nombre del contacto" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Dirección</Label>
              <Input 
                placeholder="Ingrese la dirección completa" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Teléfono celular</Label>
              <Input 
                placeholder="Ingrese el teléfono celular" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Correo electrónico</Label>
              <Input 
                placeholder="Ingrese el correo electrónico" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Asesor</Label>
              <Select>
                <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Seleccionar asesor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asesor1">Maria Lopez</SelectItem>
                  <SelectItem value="asesor2">Carlos Ruiz</SelectItem>
                  <SelectItem value="asesor3">José Torres</SelectItem>
                  <SelectItem value="asesor4">Ana Mendoza</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botones */}
            <div className="col-span-2 flex justify-end gap-3 mt-2 pt-2 border-t border-gray-200">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                  Cancelar
                </Button>
              </DialogClose>
              <CultivosDialog />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}