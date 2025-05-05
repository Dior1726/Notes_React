import { NavLink } from "react-router";
import {
  TrashIcon,
  ArchiveIcon,
  NotebookIcon,
  ListCheckIcon,
} from "lucide-react";

interface IState {
  isOpen: boolean;
}

const GeneralSidebar = ({ isOpen }: IState) => {
  return (
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
          <div>All Posts</div>
        </NavLink>
        <NavLink
          end
          to={"/main/todos"}
          className='flex items-center gap-2 px-5 py-3'
        >
          <ListCheckIcon />
          <div>Todos</div>
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
  );
};

export default GeneralSidebar;
