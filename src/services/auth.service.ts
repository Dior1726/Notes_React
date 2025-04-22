import ApiService from "@/network/axios";

interface LoginPayload {
  username: string;
  password: string;
}

export default class AuthService {
  static login(payload: LoginPayload) {
    return ApiService.post("/auth/login", payload);
  }

  static getProfile() {
    return ApiService.get("/auth/me");
  }
}
