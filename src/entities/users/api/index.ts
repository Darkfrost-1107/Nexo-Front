import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
import UserServiceConnector from "@/shared/api/connectors/user-connector";

class UsersService extends CRUDStandardApiService<AsesorData>{

    constructor(){
        super({
            connector: UserServiceConnector,
            baseURL: "/users",
            debug: import.meta.env.VITE_DEBUG === "true"         
        })
    }

    public async login(username: string, password: string){
        return await super.fetch({
            method: "post",
            data: {
                username,
                password,
            },
            url: `${this.config.baseURL}/auth/login/` 
        }, "login")
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