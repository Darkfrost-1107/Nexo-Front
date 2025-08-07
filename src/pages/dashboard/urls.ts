import type { RouteObject } from "react-router";
import DashboardPage from ".";
import HomeDashboardPage from "./home";
import AsesoresDashboardPage from "./asesores";

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
            }
        ]
    }
]

export default DashboardRoutes