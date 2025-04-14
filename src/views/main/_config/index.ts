import ArchivePage from "../archive_view/ArchivePage";
import CalendarPage from "../calendar_view/CalendarPage";
import HomePage from "../home_view/HomePage";
import ProfilePage from "../profile_view/ProfilePage";
import TrashPage from "../trash_view/TrashPage";

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
    path: "archive",
    Component: ArchivePage,
  },
  {
    path: "trash",
    Component: TrashPage,
  },
  {
    path: "calendar",
    Component: CalendarPage,
  },
];
