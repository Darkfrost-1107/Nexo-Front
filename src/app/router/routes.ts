import type { RouteObject } from "react-router"
import LoginRoutes from "@/pages/login/urls"
import HomeRoutes from "@/pages/home/urls"
import DashboardRoutes from "@/pages/dashboard/urls"

const routes : RouteObject[] = [
    {
        path: "/",
        children: HomeRoutes,
    },
    {
        path: "/login",
        children : LoginRoutes
    },
    {
        path: "/dashboard",
        children: DashboardRoutes
    }
]

export default routes
