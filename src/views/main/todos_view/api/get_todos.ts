import TodoService from "@/services/todo.service";

export const getTodos = async () => {
  try {
    const { data } = await TodoService.get();
    return data;
  } catch (error) {
    console.error(error);
  }
};
