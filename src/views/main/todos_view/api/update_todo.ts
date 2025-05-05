import TodoService from "@/services/todo.service";
import { toast } from "sonner";

export const updateTodo = async (id: number, payload: any) => {
  try {
    const { data } = await TodoService.update(id, payload);
    toast.success("Todo updated successfully");
    return data;
  } catch (error) {
    toast.error("Error updating todo");
    throw error;
  }
};
