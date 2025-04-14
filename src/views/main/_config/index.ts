import HomePage from "../home_view/HomePage";
import ProfilePage from "../profile_view/ProfilePage";

export const mainRoutes = [
  {
    path: "",
    Component: HomePage,
  },
  {
    path: "profile",
    Component: ProfilePage,
  },
  // {
  //   path: "/archive",
  //   name: "ArchivePage",
  // },
  // {
  //   path: "create-note",
  //   name: "CreateNotePage",
  // },
  // {
  //   path: "trash",
  //   name: "TrashPage",
  // },
  // {
  //   path: "calendar",
  //   name: "CalendarPage",
  // },
];
