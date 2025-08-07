
type ServiceConnector = {
    request: (a: ServiceRequestConfig) => Promise<ServiceResponse>
} & Axios