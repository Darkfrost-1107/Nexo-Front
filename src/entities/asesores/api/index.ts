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

}

export default AsesoresService