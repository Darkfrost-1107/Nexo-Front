import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
import MockupConnector from "@/shared/api/connectors/mockup-connector";

class AsesoresService extends CRUDStandardApiService<AsesorData>{

    constructor(){
        super({
            connector: MockupConnector,
            baseURL: "/asesores",
            debug: import.meta.env.VITE_DEBUG === "true"         
        })
    }

}

export default AsesoresService