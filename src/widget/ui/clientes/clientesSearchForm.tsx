import { Button } from "@/shared/components/ui/button";

export default function SearchForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="w-24 font-semibold">Nombre</label>
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div className="flex items-center gap-2">
        <label className="w-24 font-semibold">RUC</label>
        <input
          type="number"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
        
        <label className="w-16 font-semibold">DNI</label>
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
        
      </div>

      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="asesor" className="w-24 font-semibold">
          Asesor
        </label>
        <input
          id="asesor"
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
          placeholder="Ingrese el nombre del asesor"
        />
        <Button
          type="submit"
          className="ml-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}
