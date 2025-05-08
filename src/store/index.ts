import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todos_slice";
import { postReducer } from "./slices/post_slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
