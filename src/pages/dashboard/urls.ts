import DashboardWidget from "@/widget/ui/dashboard";
import type { RouteObject } from "react-router";
import DashboardPage from ".";
import HomeDashboardPage from "./home";

const DashboardRoutes : RouteObject[] = [
    {
        path: "",
        Component: DashboardPage,
        children: [
            {
                index: true,
                Component: HomeDashboardPage,
            }
        ]
    }
]

export default DashboardRoutes