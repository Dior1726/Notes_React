import ProductService from "@/services/product.service";

export const getProducts = async () => {
  try {
    const { data } = await ProductService.get();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
