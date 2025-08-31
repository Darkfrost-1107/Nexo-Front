import { Button } from '@/shared/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { cn } from '@/shared/lib/utils'
import React, { useEffect } from 'react'
import AsesoresService from '../../api'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/shared/components/ui/command'

export default function SearchAsesor<T>({form, search, ...props} : FormUIProps<T>) {
  
    const asesores = new AsesoresService()
    const [values, setValues] = React.useState<AsesorData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await asesores.list()
            setValues(data.data.results)
        }
        fetchData()
    },[])

    return (
    <FormField 
        control={form.control}
        name={search as string}
        render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Asesor</FormLabel>
              <FormMessage />
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? field.value.user?.names ?? "Asesor desconocido"
                        : "Escoja a un Asesor"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Buscar Asesor..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No se encontró ningún asesor.</CommandEmpty>
                      <CommandGroup>
                        {values.map((asesor) => (
                          <CommandItem
                            value={asesor.user?.names}
                            key={asesor.id}
                            onSelect={() => {
                              form.setValue(search as string, asesor)
                            }}
                          >
                            {asesor.user?.names ?? "Asesor Desconocido"}
                            <Check
                              className={cn(
                                "ml-auto",
                                asesor.id === field.value?.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
        )}
    />
  )
}
