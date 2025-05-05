import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { CheckedState } from "@radix-ui/react-checkbox";
import { RootState } from "@/store";
import { getTodos } from "./api/get_todos";
import { Checkbox } from "@/components/ui/checkbox";
import { setTodos, toggleTodo } from "@/store/slices/todos_slice";

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const { data, isLoading } = useQuery({
    queryKey: ["get_todos"],
    queryFn: () => getTodos(),
  });

  useEffect(() => {
    if (data) {
      dispatch(setTodos(data.todos));
    }
  }, [data, dispatch]);

  const onChangeHandler = (value: CheckedState, id: number) => {
    dispatch(toggleTodo({ id, completed: value }));
  };

  return (
    <div className='bg-white rounded-xl p-5 max-w-2xl mx-auto shadow-sm'>
      <h1 className='text-xl mb-5 font-semibold text-center'>Todos</h1>
      {isLoading && <p className='text-center'>Loading...</p>}
      {todos &&
        todos.map((todo: any) => (
          <label
            htmlFor={todo.id}
            key={todo.id}
            className='flex items-center gap-2 justify-between py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none'
          >
            <div>{todo.todo}</div>
            <Checkbox
              checked={todo.completed}
              id={todo.id}
              onCheckedChange={(value: CheckedState) =>
                onChangeHandler(value, todo.id)
              }
            />
          </label>
        ))}
    </div>
  );
};

export default TodosPage;
