import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
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
        <Button variant="default">Crear asesor</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-green-700 text-2xl mb-4">
            Crear asesor
          </DialogTitle>
        </DialogHeader>

        {/* Formulario */}
        <form className="grid grid-cols-2 gap-4">
          <div>
            <Label>Nombre</Label>
            <Input placeholder="Nombre" />
          </div>
          <div>
            <Label>DNI</Label>
            <Input placeholder="DNI" />
          </div>

          <div>
            <Label>Teléfono celular</Label>
            <Input placeholder="Teléfono celular" />
          </div>
          <div>
            <Label>Correo electrónico</Label>
            <Input placeholder="Correo electrónico" />
          </div>

          {/* Botones */}
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <AsignationClientDialog />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
