import { useUserStore } from "@/shared/stores/credentials"

function JWTInterceptor(config : ServiceRequestConfig) {   
    config.headers["Authorization"] = `Bearer ${useUserStore().jwt}`
    return config

}

export default JWTInterceptor