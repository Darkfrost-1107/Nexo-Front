import StandardApiService from "./standard";

class CRUDStandardApiService<T> extends StandardApiService{


    constructor(config: ServiceConfig, handlers?: FlowHandlers) {
        super(config, handlers);
    }

    public async list(params: Record<string, any> = {}) {
        return await this.fetch({
            method: "get",
            url: this.config.baseURL,
            params: params
        })
    }

    public async create(data: T) {
        return await this.fetch({
            method: "post",
            url: this.config.baseURL,
            data: data
        })
    }

    public async update(id: string, data: T) {
        return await this.fetch({
            method: "put",
            url: `${this.config.baseURL}/${id}`,
            data: data
        })
    }

    public async delete(id: string){
        return await this.fetch({
            method: "delete",
            url: `${this.config.baseURL}/${id}`
        })
    }

    public async retrieve(id: string) {
        return await this.fetch({
            method: "get",
            url: `${this.config.baseURL}/${id}`
        })
    }

}

export default CRUDStandardApiService;