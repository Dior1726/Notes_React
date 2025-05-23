import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "@/views/main/_config";
import { authRoutes } from "@/views/auth/_config";

import MainLayout from "@/components/layouts/main_layout/MainLayout";
import AuthLayout from "../components/layouts/auth_layout/AuthLayout";
import NotFoundPage from "@/views/general/not_found_view/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: authRoutes,
  },
  {
    path: "/main",
    Component: MainLayout,
    children: mainRoutes,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
