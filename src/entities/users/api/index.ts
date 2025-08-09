import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
import UserServiceConnector from "@/shared/api/connectors/user-connector";
import StatusCodes from "@/shared/constants/status-codes";

class UsersService extends CRUDStandardApiService<AsesorData>{

    constructor(){
        super({
            connector: UserServiceConnector,
            baseURL: "/users",
            debug: import.meta.env.VITE_DEBUG === "true"         
        })
    }

    public async login(username: string, password: string){
        const response = await super.fetch({
            method: "post",
            data: {
                username,
                password,
            },
            url: `${this.config.baseURL}/auth/login/` 
        }, "login")

        if(response.status == StatusCodes.REQUEST_COMPLETED){
            return response
        }

        if(response.status == StatusCodes.UNAUTHORIZED){
            if(response.data.response.data.error){
                return {
                    status: StatusCodes.INVALID_CREDENTIALS,
                    data: response.data
                }
            } else {
                return {
                    status: StatusCodes.TOKEN_NOT_VALID,
                    data: response.data
                }
            }
        }
        return response
    }

    public async logout(){
        // # TO DO refactorizar url building 
        return await super.fetch({
            method: "post",
            url: `${this.config.baseURL}/auth/logout/`
        }, "logout")
    }

    public async profile(){
        // TODO
        return await super.fetch({
            
        }, "view profile")
    }

}

export default UsersService