import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/shared/components/ui/calendar";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@radix-ui/react-label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";

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
    <div className="flex flex-col gap-3">
      <Label className="px-1">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-48 justify-between font-normal"
          >
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : placeholder || "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
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
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <DatePickerField
            label="Desde"
            selectedDate={startDate}
            onChange={setStartDate}
            placeholder="dd/mm/yyyy"
        />
        <DatePickerField
            label="Hasta"
            selectedDate={endDate}
            onChange={setEndDate}
            placeholder="dd/mm/yyyy"
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
