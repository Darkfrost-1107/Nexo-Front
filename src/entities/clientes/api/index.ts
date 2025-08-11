import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
import BusinessServiceConnector from "@/shared/api/connectors/business-connector";

class ClientesService extends CRUDStandardApiService<ClienteData>{
    constructor(){
        super({
            connector: BusinessServiceConnector,
            baseURL: "/clientes",
            debug: import.meta.env.VITE_DEBUG === "true"  
        })
    }
}

export default ClientesService