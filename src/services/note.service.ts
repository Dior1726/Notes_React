import ApiService from "@/network/axios";

export default class NoteService {
  static get() {
    return ApiService.get("/posts");
  }

  static getById(id: string) {
    return ApiService.get(`/posts/${id}`);
  }

  static search(params: { q: string }) {
    return ApiService.get("/posts/seach", { params });
  }
}
