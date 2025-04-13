import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router";
import HomePage from "./views/main/home_view/HomePage";
import AdminPage from "./views/main/profile_view/ProfilePage";

export default function App() {
  return (
    <Router>
      <header className='flex justify-between h-20 items-center px-10 border-b border-white/20'>
        <div className='text-2xl font-bold text-white'>My Notes</div>
        <nav className='flex gap-4 '>
          <NavLink to={"/"} className={"!text-white"}>
            Home
          </NavLink>
          <NavLink to={"/admin"} className={"!text-white"}>
            Admin
          </NavLink>
        </nav>
      </header>
      <div className='max-w-xl w-full mx-auto my-20 bg-white/20 p-10 rounded-2xl shadow h-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
