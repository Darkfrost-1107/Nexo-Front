import UsersService from "@/entities/users/api";
import StatusCodes from "@/shared/constants/status-codes";
import { userStore } from "@/shared/stores/credentials";

export async function login({username, password}: UserData){
    const service = new UsersService()
    if(!username || !password){
        return {
            status: false,
            feedback: "Required Params Not Filled"
        }
    } else {
        const {status, data} = await service.login(username, password)
        
        switch(status){
            case StatusCodes.REQUEST_COMPLETED:
                userStore.setState({
                    jwt: data.access,
                    user: data.user
                })
                return {
                    status: true,
                    feedback: "User Authenticated"
                }
            default:
                return {
                    status: false,
                    feedback: status.message
                }
        }
    }
}