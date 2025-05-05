import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter_slice";
import { todoReducer } from "./slices/todos_slice";
import { postReducer } from "./slices/post_slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
