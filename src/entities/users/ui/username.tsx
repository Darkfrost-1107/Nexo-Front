import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

export default function UserUsername({form, ...props} : FormUIProps<UserData>){
    return (
        < FormField
            {...props}
            control={form.control}
            name="username"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Nombre de Usuario</FormLabel>
                    <FormControl>
                        <Input 
                            type="text" 
                            placeholder="Nombre de Usuario" 
                        {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
