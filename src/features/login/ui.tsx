import UsersService from '@/entities/users/api'
import useUserUI from '@/entities/users/ui'
import { Button } from '@/shared/components/ui/button'
import { Form } from '@/shared/components/ui/form'
import { userStore } from '@/shared/stores/credentials'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router'

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

    function HandleSubmit({username, password}: UserData){
        if(pending.current) return;

        pending.current = true
        
        const service = new UsersService()
        async function fetch(){
            const {access, user} = await service.login(username, password)
            userStore.setState({
                jwt: access
            })
            console.log(user)
            navigate("/dashboard")
            pending.current = false
        }
        fetch().catch(() => {
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
