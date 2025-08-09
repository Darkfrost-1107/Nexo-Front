import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

import { Button } from '@/shared/components/ui/button'
import { Form } from '@/shared/components/ui/form'
import useUserUI from '@/entities/users/ui'

import { login } from './logic'

export default function LoginFeatureUI() {
    
    const {
        components: {
            UserPassword,
            UserUsername,
        },
        form
    } = useUserUI()

    const pending = useRef(false)
    const navigate = useNavigate()

    function HandleSubmit(user: UserData){
        if(pending.current) return;

        pending.current = true
        
        login(user).then(({status, feedback}) => {
            if(!status){
                toast(feedback)
                return;
            }
            navigate("/dashboard")

        }).finally(() => {
            pending.current = false
        })
    }
  
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(HandleSubmit)}>
                <div className="form-group">
                    {/* <label htmlFor="username">Usuario</label> */}
                    <UserUsername />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="password">Contraseña</label> */}
                    <UserPassword />
                </div>
                <Button 
                    // asChild 
                    type="submit"
                    variant="outline" 
                    className="w-full"
                >
                    {/* <Link to="/login">Login</Link> */}
                    Login
                </Button>
            </form>
        </Form>
    )
}
