import { userStore } from "@/shared/stores/credentials"

function JWTInterceptor(config : ServiceRequestConfig) {   
    let jwt = userStore.getState().jwt
    if(jwt){
        config.headers["Authorization"] = `Bearer ${jwt}`
    }
    // config.headers["Access-Control-Allow-Origin'"] = "*"
    return config

}

export default JWTInterceptor