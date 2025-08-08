import type { RouteObject } from "react-router";
import DashboardPage from ".";
import HomeDashboardPage from "./home";
import AsesoresDashboardPage from "./asesores";
import VisitasDashboardPage from "./visitas";
import ClientesDashboardPage from "./clientes";

const DashboardRoutes : RouteObject[] = [
    {
        path: "",
        Component: DashboardPage,
        children: [
            {
                index: true,
                Component: HomeDashboardPage,
            },

            {
                path: "asesores",
                Component: AsesoresDashboardPage,
            },
            {
                path: "visitas",
                Component: VisitasDashboardPage,
            },
            {
                path: "clientes",
                Component: ClientesDashboardPage,
            }
        ]
    }
]

export default DashboardRoutes