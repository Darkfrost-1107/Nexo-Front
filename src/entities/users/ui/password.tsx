import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

export default function UserPassword({form, ...props}: FormUIProps<UserData>) {
  return (
            < FormField
                {...props}
                control={form.control}
                name="password"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                            <Input 
                                type="password" 
                                placeholder="Contraseña" 
                            {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
            />
            // <input 
            //     value={data.password}
            //     type="password" 
            //     id="password" 
            //     name="password" 
            //     placeholder="Contraseña" 
            //     onChange={setPassword}
            // />
        )
}
