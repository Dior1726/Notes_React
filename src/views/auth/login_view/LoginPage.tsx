import { NavLink } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='max-w-lg bg-white rounded-3xl p-10 shadow-sm w-full'>
        <h3 className='text-center text-2xl font-medium text-indigo-500'>
          Welcome to Notes! {user.username}
        </h3>
        <div className='mt-10 flex flex-col gap-5'>
          <Input
            placeholder='Email'
            className='h-10'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Input
            placeholder='Password'
            className='h-10'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <NavLink to={"/main/home"} className='w-full block'>
            <Button variant='accent' className='bg-indigo-500 h-10 mt-5 w-full'>
              Login
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
