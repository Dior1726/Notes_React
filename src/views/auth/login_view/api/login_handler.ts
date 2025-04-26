import AuthService from "@/services/auth.service";

export const loginHandler = async (payload: {
  username: string;
  password: string;
}) => {
  try {
    const { data } = await AuthService.login(payload);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
