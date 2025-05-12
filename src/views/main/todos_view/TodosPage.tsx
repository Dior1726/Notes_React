import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getTodos } from "./api/get_todos";
import { updateTodo } from "./api/update_todo";
import { createTodo } from "./api/create_todo";
import { setTodos, toggleTodo } from "@/store/slices/todos_slice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TodoItem from "./components/todo_item/TodoItem";
import { Input } from "@/components/ui/input";

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get_todos"],
    queryFn: () => getTodos(),
  });

  const { mutate } = useMutation({
    mutationFn: ({ id, payload }: any) => updateTodo(id, payload),
    onSuccess: (data) => {
      dispatch(toggleTodo({ id: data.id, completed: data.completed }));
    },
  });

  const { mutate: mutateCreateTodo, isPending: createLoading } = useMutation({
    mutationFn: (payload: any) => createTodo(payload),
    onSuccess: () => {
      setIsOpen(false);
      setTitle("");
      refetch();
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setTodos(data.todos));
    }
  }, [data, dispatch]);

  const onChangeHandler = (value: any, id: number) => {
    const payload = {
      completed: value,
    };
    mutate({ id, payload });
  };

  const onSubmitHandler = () => {
    const payload = {
      todo: title,
      completed: false,
      userId: localStorage.getItem("id"),
    };
    mutateCreateTodo(payload);
  };

  return (
    <>
      <div className='bg-white rounded-xl p-5 max-w-2xl mx-auto shadow-sm'>
        <div className='flex items-center justify-between mb-5'>
          <h1 className='text-xl  font-semibold text-center'>Todos</h1>
          <Button onClick={() => setIsOpen(true)}>Add Todo</Button>
        </div>
        {isLoading && <p className='text-center'>Loading...</p>}
        {todos &&
          todos.map((todo: any) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChangeHandler={onChangeHandler}
            />
          ))}
      </div>
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new todo</DialogTitle>
          </DialogHeader>
          <DialogDescription className='flex flex-col gap-4'>
            <Input
              className='h-[50px]'
              placeholder='Enter todo title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              disabled={createLoading || title.length === 0}
              onClick={onSubmitHandler}
              className='w-max ml-auto h-[50px]'
            >
              Create todo
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TodosPage;
