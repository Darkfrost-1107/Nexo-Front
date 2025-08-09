import StatusCodes from "@/shared/constants/status-codes";
import { AxiosError } from "axios";

class StandardApiService {
    protected config: ServiceConfig;
    protected handlers?: FlowHandlers;

    constructor(config: ServiceConfig, handlers?: FlowHandlers) {
        this.config = config;
        this.handlers = handlers;
    }

    protected async fetch(config : ServiceRequestConfig, action?: string) {
        try {
            const response = await this.config.connector.request(config);
            this.handlers?.onSuccess?.(response);
            if(this.config.debug){
                console.log(`${action || 'Request'} successful: `, response);
            }
            return {
                status: StatusCodes.REQUEST_COMPLETED,
                data: response.data
            };
        } catch (error) {
            
            if(this.config.debug){
                console.error(`Error in ${action || 'Request'}: `, error);
            }
            this.handlers?.onError?.(error);

            if(!(error instanceof AxiosError)){
                return {
                    status: StatusCodes.UNKNWON_ERROR,
                    data: error
                }
            }

            if(error.status == 401){
                return {
                    status: StatusCodes.UNAUTHORIZED,
                    data: error
                }
            }

            return {
                status: StatusCodes.SERVER_INTERNAL_ERROR,
                data: error,
            }
        }
    }
}

export default StandardApiService;