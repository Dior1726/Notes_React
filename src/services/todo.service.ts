import ApiService from "@/network/axios";

export default class TodoService {
  static get() {
    return ApiService.get("/todos?limit=15");
  }

  static getById(id: number) {
    return ApiService.get(`/todos/${id}`);
  }

  static create(payload: any) {
    return ApiService.post("/todos/add", payload);
  }

  static update(id: number, payload: any) {
    return ApiService.put(`/todos/${id}`, payload);
  }
}
