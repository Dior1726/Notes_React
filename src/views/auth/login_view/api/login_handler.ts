import { toast } from "sonner";
import AuthService from "@/services/auth.service";
export const loginHandler = async (payload: {
  username: string;
  password: string;
}) => {
  try {
    const { data } = await AuthService.login(payload);
    toast.success("Login successful");
    return data;
  } catch (error: any) {
    toast.error(error.response.data.message);
    throw error;
  }
};
