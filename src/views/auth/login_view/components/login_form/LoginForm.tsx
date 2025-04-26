import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginHandler } from "../../api/login_handler";

const LoginForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "jamesd",
    password: "jamesdpass",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => loginHandler(user),
    onSuccess: (data) => {
      for (const key in data) {
        localStorage.setItem(key, data[key]);
      }
      navigate("/main/home");
    },
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
      <Button
        variant='accent'
        className='bg-indigo-500 h-10 mt-5 w-full'
        disabled={isPending}
        onClick={() => mutate()}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
