import TodoService from "@/services/todo.service";

export const updateTodo = async (id: number, payload: any) => {
  try {
    const { data } = await TodoService.update(id, payload);
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};
