import nodes from "./nodes"

const ServiceUrls = {
    main: `http://${nodes.main}`,
    users: `http://${nodes.main}`,
    business: `http://${nodes.main}/business`,
}

export default ServiceUrls