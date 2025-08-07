import IndexedDBConnector from "@/shared/lib/db";

const MockupConnector : ServiceConnector = {
    async request(config: ServiceRequestConfig){
        if(config.url === undefined) {
            throw new Error("Request URL is required");
        }

        const [asset, resource] = config.url.split('/');

        if(!asset) {
            throw new Error("Asset is required in the URL");
        }

        const response = {
            data: undefined as unknown
        }

        function fixResponseData(data: unknown){
            response.data = data
        }

        switch(config.method){
            case "get":
                if(resource){
                    IndexedDBConnector.getResource({
                        objectStoreName: asset,
                        key: resource,
                    }, fixResponseData)
                } else {
                    IndexedDBConnector.getAssets({
                        objectStoreName: asset,
                    }, fixResponseData)
                } 
                break;

            case "post":
                IndexedDBConnector.addAsset({
                    objectStoreName: asset,
                    data: config.data
                }, fixResponseData)
                break;

            case "delete":
                IndexedDBConnector.deleteAsset({
                    objectStoreName: asset,
                    key: resource
                }, fixResponseData)
                break;

            case "put":
                IndexedDBConnector.updateResource({
                    objectStoreName: asset,
                    data: config.data,
                }, fixResponseData)
                break;
            default:
                
                break;
        }

        await setTimeout(() => {}, 2000)

        return response;
    }
}

export default MockupConnector;