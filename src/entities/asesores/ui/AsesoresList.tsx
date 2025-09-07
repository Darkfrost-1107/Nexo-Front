import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover"
import AsesoresService from "../api"

interface AsesorComboboxProps {
  options: { value: string; label: string }[]
}

export function AsesorCombobox({ }: AsesorComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<AsesorData | null>(null)

  const [options, setOptions] = React.useState<AsesorData[]>([])

  React.useEffect(() => {
    // Fetch options from API or other source
    const fetchOptions = async () => {
      const asesores = new AsesoresService()
      const data = await asesores.list()
      setOptions(data.data.results)
    }

    fetchOptions()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? options.find((o) => o.id === value?.id)?.user?.names ?? "Asesor no Identificado"
            : "Selecciona un asesor..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Buscar asesor..." className="h-9" />
          <CommandList>
            <CommandEmpty>No se encontró asesor.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.id}
                  value={opt.user?.names ?? "Asesor no Identificado"}
                  onSelect={(currentValue) => {
                    setValue(opt === value ? null : opt)
                    setOpen(false) 
                  }}
                >
                  {opt.user?.names ?? "Asesor no Identificado"}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === opt ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
