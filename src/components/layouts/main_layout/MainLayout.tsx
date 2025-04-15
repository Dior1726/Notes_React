import { useState } from "react";
import { Outlet } from "react-router";
import GeneralSidebar from "@/components/general/general_sidebar/GeneralSidebar";
import GeneralHeader from "@/components/general/general_header/GeneralHeader";

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex h-screen bg-[#F6F7F9]'>
      <GeneralSidebar isOpen={isOpen} />
      <div
        className={
          "flex-grow flex flex-col transition-all duration-150 " +
          (isOpen ? "ml-0" : "-ml-[250px]")
        }
      >
        <GeneralHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex-grow min-h-0 overflow-y-auto p-5 w-full`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
