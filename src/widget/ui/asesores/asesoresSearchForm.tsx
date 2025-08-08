import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <div className="space-y-4">
      {/* Nombre */}
      <div className="flex items-center gap-4">
        <Label className="w-20 text-sm font-semibold text-gray-700">
          Nombre
        </Label>
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Buscar por nombre..."
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
          <Button 
            size="sm" 
            className="absolute right-1 top-1 h-7 w-8 p-0 bg-green-600 hover:bg-green-700"
          >
            <Search className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Código y DNI */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <Label className="w-20 text-sm font-semibold text-gray-700">
            Código
          </Label>
          <Input
            type="text"
            placeholder="Código..."
            className="flex-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <div className="flex items-center gap-4 flex-1">
          <Label className="w-16 text-sm font-semibold text-gray-700">
            DNI
          </Label>
          <Input
            type="text"
            placeholder="DNI..."
            className="flex-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white px-6"
        >
          <Search className="h-3 w-3 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}