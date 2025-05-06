import HomePage from "../home_view/HomePage";
import TrashPage from "../trash_view/TrashPage";
import ProductsPage from "../products_view/ProductsPage";
import ProfilePage from "../profile_view/ProfilePage";
import TodosPage from "../todos_view/TodosPage";

export const mainRoutes = [
  {
    path: "home",
    Component: HomePage,
  },
  {
    path: "profile",
    Component: ProfilePage,
  },
  {
    path: "products",
    Component: ProductsPage,
  },
  {
    path: "trash",
    Component: TrashPage,
  },
  {
    path: "todos",
    Component: TodosPage,
  },
];
