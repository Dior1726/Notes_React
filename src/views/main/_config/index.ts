import HomePage from "../home_view/HomePage";
import TrashPage from "../trash_view/TrashPage";
import ArchivePage from "../archive_view/ArchivePage";
import ProfilePage from "../profile_view/ProfilePage";
import CalendarPage from "../calendar_view/CalendarPage";

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
