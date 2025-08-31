import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"
import useUser from "../model/useUser"
import { Input } from "@/shared/components/ui/input"
import type { FieldValues, UseFormReturn } from "react-hook-form"
import UserUsername from "./username"
import UserPassword from "./password"

function useUserUI(initData?: Partial<UserData>){

    const form = useUser(initData)

    function Username() {
        return <UserUsername form={form} />
    }

    function Password(){
        return <UserPassword form={form} />
    }

    return {
        components: {
            Password,
            Username,
        },
        form
    }
}

export default useUserUI