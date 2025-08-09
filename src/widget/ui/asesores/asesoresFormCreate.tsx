import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/shared/components/ui/dialog";

import { AsignationClientDialog } from "./asesoresDialogAsignation";

export default function CrearAsesorDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 shadow-sm"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Crear asesor
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="bg-green-600 text-white p-6">
          <DialogTitle className="text-xl font-semibold">
            Crear asesor
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          {/* Formulario */}
          <form className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Nombre</Label>
              <Input 
                placeholder="Ingrese el nombre completo" 
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">DNI</Label>
              <Input 
                placeholder="Ingrese el DNI" 
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

            {/* Botones */}
            <div className="col-span-2 flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
              <DialogClose asChild>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                  Cancelar
                </Button>
              </DialogClose>
              <AsignationClientDialog />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}