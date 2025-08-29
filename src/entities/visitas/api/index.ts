import CRUDStandardApiService from "@/shared/api/configs/crud-standard";
// import MainServiceConnector from "@/shared/api/connectors/main-service";
// import MockupConnector from "@/shared/api/connectors/mockup-connector";
import BusinessServiceConnector from "@/shared/api/connectors/business-connector";

class VisitasService extends CRUDStandardApiService<VisitaData>{
    
    constructor() {
        super({
            connector: BusinessServiceConnector,
            baseURL: '/visitas',
            debug: import.meta.env.VITE_DEBUG === 'true',
        });
    }
    
    public async listVisitas(visitas: VisitaData, params: Record<string, any>){
        const visita = new VisitasService()
        const response = await visita.list({ ...params,
            visitas: visitas.id
        })
        return response
    }
}

export default VisitasService;