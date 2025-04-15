import { UserIcon, MenuIcon } from "lucide-react";

interface IState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const GeneralHeader = ({ isOpen, setIsOpen }: IState) => {
  return (
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
  );
};

export default GeneralHeader;
