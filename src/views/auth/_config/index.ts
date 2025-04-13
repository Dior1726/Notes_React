export const authRoutes = [
  {
    path: "/auth",
    name: "LoginPage",
    component: () => import("../login_view/LoginPage"),
  },
];
