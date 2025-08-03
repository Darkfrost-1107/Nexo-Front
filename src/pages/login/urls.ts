import type { RouteObject } from "react-router"
import LoginPage from "."

const LoginRoutes : RouteObject[] = [
    {
        index: true,
        Component: LoginPage,
    },
]

export default LoginRoutes