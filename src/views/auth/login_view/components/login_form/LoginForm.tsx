import { useState } from "react";
import { NavLink } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "jamesd",
    password: "jamesdpass",
  });

  return (
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
  );
};

export default LoginForm;
