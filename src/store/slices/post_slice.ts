import { toast } from "sonner";
import { createSlice } from "@reduxjs/toolkit";

interface PostState {
  value: number[];
}

const initialState: PostState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      if (state.value.includes(action.payload)) {
        state.value = state.value.filter((post) => post !== action.payload);
        toast.success("Post removed from favorites");
      } else {
        state.value.push(action.payload);
        toast.success("Post added to favorites");
      }
    },
  },
});

export const { setPosts } = postSlice.actions;
export const postReducer = postSlice.reducer;
