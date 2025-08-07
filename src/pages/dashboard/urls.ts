import type { RouteObject } from "react-router";
import DashboardPage from ".";
import HomeDashboardPage from "./home";
import AsesoresDashboardPage from "./asesores";
import VisitasDashboardPage from "./visitas";

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
            }
        ]
    }
]

export default DashboardRoutes