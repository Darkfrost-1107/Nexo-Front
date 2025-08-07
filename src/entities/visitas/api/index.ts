import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
// import MainServiceConnector from "@/shared/api/connectors/main-service";
import MockupConnector from "@/shared/api/connectors/mockup-connector";

class VisitasService extends CRUDStandardApiService<VisitaData>{
    
    constructor() {
        super({
            connector: MockupConnector,
            baseURL: '/visitas',
            debug: import.meta.env.VITE_DEBUG === 'true',
        });
    }
    
}

export default VisitasService;