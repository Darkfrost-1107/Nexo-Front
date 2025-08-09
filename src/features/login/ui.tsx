import useUserUI from '@/entities/users/ui'
import { Form } from '@/shared/components/ui/form'
import React from 'react'

export default function LoginFeatureUI() {
    
    const {
        components: {
            UserPassword,
            UserUsername,
        }
    } = useUserUI()

  
    return (
        <Form>
            <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <UserUsername />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <UserPassword />
            </div>
        </Form>
    )
}
