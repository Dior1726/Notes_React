import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getTodos } from "./api/get_todos";
import { updateTodo } from "./api/update_todo";
import { setTodos, toggleTodo } from "@/store/slices/todos_slice";
import { Button } from "@/components/ui/button";
import TodoItem from "./components/todo_item/TodoItem";

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const { data, isLoading } = useQuery({
    queryKey: ["get_todos"],
    queryFn: () => getTodos(),
  });

  const { mutate } = useMutation({
    mutationFn: ({ id, payload }: any) => updateTodo(id, payload),
    onSuccess: (data) => {
      dispatch(toggleTodo({ id: data.id, completed: data.completed }));
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

  return (
    <div className='bg-white rounded-xl p-5 max-w-2xl mx-auto shadow-sm'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-xl  font-semibold text-center'>Todos</h1>
        <Button>Add Todo</Button>
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
  );
};

export default TodosPage;
