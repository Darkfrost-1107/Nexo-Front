import * as React from "react";
import { CalendarIcon, Search } from "lucide-react";
import { Calendar } from "@/shared/components/ui/calendar";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

function DatePickerField({
  label,
  selectedDate,
  onChange,
  placeholder,
}: {
  label: string;
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-gray-700">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal border-gray-300 focus:border-green-500 focus:ring-green-500",
              !selectedDate ? "text-gray-500" : undefined
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? (
              selectedDate.toLocaleDateString('es-PE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })
            ) : (
              <span>{placeholder || "Seleccionar fecha"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function SearchForm() {
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="space-y-6">
      {/* Filtros de fecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePickerField
          label="Fecha desde"
          selectedDate={startDate}
          onChange={setStartDate}
          placeholder="dd/mm/yyyy"
        />
        <DatePickerField
          label="Fecha hasta"
          selectedDate={endDate}
          onChange={setEndDate}
          placeholder="dd/mm/yyyy"
        />
      </div>

      {/* Filtro por asesor */}
      <div className="flex items-center gap-4">
        <Label className="w-20 text-sm font-semibold text-gray-700">
          Asesor
        </Label>
        <Input
          type="text"
          placeholder="Buscar por asesor..."
          className="flex-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
        />
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white px-6"
        >
          <Search className="h-4 w-4 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}