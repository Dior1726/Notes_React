import AuthService from "@/services/auth.service";

export const getProfile = async () => {
  try {
    const { data } = await AuthService.getProfile();
    return data;
  } catch (error) {
    console.error(error);
  }
};
