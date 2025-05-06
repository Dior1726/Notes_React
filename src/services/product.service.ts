import ApiService from "@/network/axios";

export default class ProductService {
  static get() {
    return ApiService.get("/products");
  }
}
