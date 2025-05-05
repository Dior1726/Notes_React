import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface State {
  todo: {
    id: number;
    todo: string;
    completed: boolean;
  };
  onChangeHandler: (value: CheckedState, id: number) => void;
}

const TodoItem = ({ todo, onChangeHandler }: State) => {
  return (
    <>
      <label
        htmlFor={todo.id.toString()}
        key={todo.id}
        className={`flex items-center gap-2 justify-between py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none ${
          todo.completed ? "line-through" : ""
        }`}
      >
        <div>{todo.todo}</div>
        <Checkbox
          checked={todo.completed}
          id={todo.id.toString()}
          onCheckedChange={(value: CheckedState) =>
            onChangeHandler(value, todo.id)
          }
        />
      </label>
    </>
  );
};

export default TodoItem;
