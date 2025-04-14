import { Outlet, NavLink } from "react-router";
import {
  TrashIcon,
  ArchiveIcon,
  CalendarIcon,
  NotebookIcon,
  UserIcon,
  MenuIcon,
} from "lucide-react";
import { useState } from "react";

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex h-screen bg-slate-50'>
      <div
        className={`max-w-[250px] w-full bg-white pt-0 border-r border-slate-100 transition-all duration-150 transform ${
          isOpen ? "translate-x-0" : "-translate-x-[250px]"
        }`}
      >
        <div className='min-h-[60px] flex items-center justify-center font-bold text-indigo-500 text-2xl'>
          NOTES
        </div>
        <div className='flex flex-col p-5'>
          <NavLink
            end
            to={"/main/home"}
            className='flex items-center gap-2 px-5 py-3'
          >
            <NotebookIcon />
            <div>All Notes</div>
          </NavLink>
          <NavLink
            end
            to={"/main/calendar"}
            className='flex items-center gap-2 px-5 py-3'
          >
            <CalendarIcon />
            <div>Calendar</div>
          </NavLink>
          <NavLink
            end
            to={"/main/archive"}
            className='flex items-center gap-2 px-5 py-3'
          >
            <ArchiveIcon />
            <div>Archive</div>
          </NavLink>
          <NavLink
            end
            to={"/main/trash"}
            className='flex items-center gap-2 px-5 py-3'
          >
            <TrashIcon />
            <div>Trash</div>
          </NavLink>
        </div>
      </div>
      <div
        className={
          "flex-grow flex flex-col transition-all duration-150 " +
          (isOpen ? "ml-0" : "-ml-[250px]")
        }
      >
        <div className='min-h-[60px] w-full bg-white flex items-center justify-between px-5 border-b border-slate-100'>
          <div
            className='w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center'
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </div>
          <div className='w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center'>
            <UserIcon />
          </div>
        </div>
        <div className={`flex-grow min-h-0 overflow-y-auto p-5 w-full`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
