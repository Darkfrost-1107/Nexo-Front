import ClientesService from "@/entities/clientes/api";
import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
import BusinessServiceConnector from "@/shared/api/connectors/business-connector";

class AsesoresService extends CRUDStandardApiService<AsesorData>{

    constructor(){
        super({
            connector: BusinessServiceConnector,
            baseURL: "/asesores",
            debug: import.meta.env.VITE_DEBUG === "true"         
        })
    }

    public async listClientes(asesor: AsesorData, params: Record<string, any>){
        const clients = new ClientesService()
        const response = await clients.list({ ...params,
            asesor: asesor.id
        })
        return response
    }

}

export default AsesoresService