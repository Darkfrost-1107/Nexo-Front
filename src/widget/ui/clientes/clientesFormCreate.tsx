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
import { CultivosDialog } from "./clientesCultivosDialog";

export default function CrearClienteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Crear cliente</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-green-700 text-2xl mb-4">
            Crear cliente
          </DialogTitle>
        </DialogHeader>

        {/* Tipo de cliente */}
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="tipo" value="persona" defaultChecked />
            <span>Persona</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="tipo" value="razon" />
            <span>Razón social</span>
          </label>
        </div>

        {/* Formulario */}
        <form className="grid grid-cols-2 gap-4">
          <div>
            <Label>Nombre</Label>
            <Input placeholder="Nombre" />
          </div>
          <div>
            <Label>Documento de identidad - DNI</Label>
            <Input placeholder="DNI" />
          </div>

          <div className="col-span-2">
            <Label>Nombre del contacto</Label>
            <Input placeholder="Nombre del contacto" />
          </div>

          <div className="col-span-2">
            <Label>Dirección</Label>
            <Input placeholder="Dirección" />
          </div>

          <div>
            <Label>Teléfono celular</Label>
            <Input placeholder="Teléfono celular" />
          </div>
          <div>
            <Label>Correo electrónico</Label>
            <Input placeholder="Correo electrónico" />
          </div>

          <div>
            <Label>Asesor</Label>
            <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
              <option value="">Seleccionar</option>
              <option value="1">Asesor 1</option>
              <option value="2">Asesor 2</option>
            </select>
          </div>

          {/* Botones */}
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <CultivosDialog />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
