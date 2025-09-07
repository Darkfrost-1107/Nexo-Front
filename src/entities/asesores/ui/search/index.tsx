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
import AsesoresService from "../../api"

interface AsesorComboboxProps {
  value: AsesorData | undefined
  onChange: (value: AsesorData | undefined) => void
  fieldName?: string
  // form: Zo
}

export default function SearchAsesor({ value : defaultValue, onChange, fieldName }: AsesorComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<AsesorData | undefined>(defaultValue)

  const [options, setOptions] = React.useState<AsesorData[]>([])
  const pending = React.useRef(false)
  React.useEffect(() => {
    if(pending.current) return
    // Fetch options from API or other source
    const fetchOptions = async () => {
      const asesores = new AsesoresService()
      const data = await asesores.list()
      const results = data.data.results
      setOptions(results)
      if (!results.find((o) => o.id === defaultValue?.id)) {
        setValue(undefined)
      }
    }

    fetchOptions()
  }, [defaultValue])

  React.useEffect(() => {
    onChange(value)
  }, [value] )

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
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
                        setValue(opt === value ? undefined : opt)
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
      )}
    />
   
  )
}
