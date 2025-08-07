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
                console.log(`${action || 'Request'} successful:`, response);
            }
            return response.data;
        } catch (error) {
            console.error('Error listing items:', error);
            this.handlers?.onError?.(error);
            throw error;
        }
    }
}

export default StandardApiService;