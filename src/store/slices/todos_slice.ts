import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    toggleTodo: (state, action) => {
      const { id, completed } = action.payload;
      const todoIndex = state.todos.findIndex((todo: any) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = completed;
      }
    },
  },
});

export const { setTodos, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
