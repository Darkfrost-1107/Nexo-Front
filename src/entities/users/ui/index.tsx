import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"
import useUser from "../model/useUser"
import { Input } from "@/shared/components/ui/input"

function useUserUI(initData?: Partial<UserData>){

    const form = useUser(initData)
    
    function UserUsername({}){
        return (
            < FormField
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

    function UserPassword({}){
        return (
            < FormField
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

    return {
        components: {
            UserPassword,
            UserUsername,
        },
        form
    }
}

export default useUserUI