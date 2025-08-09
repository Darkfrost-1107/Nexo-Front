import {useEffect, useReducer} from 'react'
import CreateModelReducer from '@/shared/models/reducer'
import validators from './validators'
import generateDefault from './default'

function useUser(data?: Partial<UserData>) {
    const [state, dispatch] = useReducer(
        ...CreateModelReducer<UserData>(generateDefault, validators, data)
    );

    useEffect(() => {
        if(data){
            dispatch({
                type: "SYNC",
                data: data,
            })
        } else {
            dispatch({
                type: "RESET"
            })
        }
    }, [data])
    
    return { ...state,
        handlers: {
            setUsername: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "username",
                    value: value
                }
            }),
            setPassword: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "password",
                    value: value
                }
            }),
            setNames: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "names",
                    value: value
                }
            }),
            setEmail: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "email",
                    value: value
                }
            }),
            setPhoneNumber: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "phone_number",
                    value: value
                }
            }),
            setUserType: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "user_type",
                    value: value
                }
            }),
            setCreatedDate: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "created_date",
                    value: value
                }
            }),
            setUpdatedDate: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "updated_date",
                    value: value
                }
            }),
            setStatus: (value: unknown) => dispatch({
                type: "UPDATE",
                data: {
                    key: "status",
                    value: value
                }
            }),
            clear: () => dispatch({
                type: "RESET"
            })
        }
    };
}

export default useUser