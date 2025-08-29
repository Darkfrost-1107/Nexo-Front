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

    public async listClientes(cliente: ClienteData, params: Record<string, any>){
        const clients = new ClientesService()
        const response = await clients.list({ ...params,
            cliente: cliente.id
        })
        return response
    }
}

export default ClientesService