import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api/get_products";
import ProductList from "./components/product_list/ProductList";

const ProductsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get_products"],
    queryFn: () => getProducts(),
  });

  return (
    <>
      {isLoading && <div className='text-center mt-10'>Loading...</div>}
      {data && (
        <div>
          <h1 className='text-xl font-semibold mb-5'>Products</h1>
          <ProductList data={data.products} />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
