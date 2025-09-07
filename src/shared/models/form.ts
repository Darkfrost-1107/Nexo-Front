import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type FieldValues } from "react-hook-form"
import {z} from 'zod'

function createModelForm<T extends FieldValues>(
  generateDefault: GenerateDefaultFunction<T>,
  validators: z.ZodObject,
  data?: Partial<T>
) {

  const form = useForm<z.infer<typeof validators>>({
    resolver: zodResolver(validators),
    defaultValues: generateDefault(data),
  })

  return form
  
}

export default createModelForm