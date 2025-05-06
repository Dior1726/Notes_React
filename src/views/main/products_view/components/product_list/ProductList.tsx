import ProductCard from "../product_card/ProductCard";

interface ProductListProps {
  data: any[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
