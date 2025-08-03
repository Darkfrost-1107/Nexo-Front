import type { RouteObject } from "react-router"
import LoginPage from "@/pages/login"
import LoginRoutes from "@/pages/login/urls"
import HomeRoutes from "@/pages/home/urls"

const routes : RouteObject[] = [
    {
        path: "/",
        children: HomeRoutes,
    },
    {
        path: "/login",
        children : LoginRoutes
    }
]

export default routes
