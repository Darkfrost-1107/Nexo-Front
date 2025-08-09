import StatusCodes from "@/shared/constants/status-codes"
import { userStore } from "@/shared/stores/credentials"
import type { AxiosError } from "axios"

export function JWTInterceptor(config : ServiceRequestConfig) {   
    let jwt = userStore.getState().jwt
    if(jwt){
        config.headers["Authorization"] = `Bearer ${jwt}`
    }
    // config.headers["Access-Control-Allow-Origin'"] = "*"
    return config
}

export function JWTErrorInterceptor(error: AxiosError){
    
    if(error.response){
        let {code} = error.response.data as {code: string} 
        switch(code){
            case StatusCodes.TOKEN_NOT_VALID.code:
                userStore.setState({
                    jwt: undefined,
                    user: undefined
                })
                window.location.assign("/login")
        }
    }

    return Promise.reject(error)
}
