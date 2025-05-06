import { StarIcon } from "lucide-react";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='bg-white shadow-xs rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-300'>
      <div className='flex items-center justify-center mb-2'>
        <img width='200' height='auto' src={product.thumbnail} alt='' />
      </div>
      <div>
        <h2 className='font-medium mb-1'>{product.title}</h2>
        <div className='text-xl font-bold flex items-center justify-between'>
          <h2>$ {product.price}</h2>
          <p className='text-sm font-light'>{product.brand}</p>
        </div>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='flex gap-1 items-center text-sm font-bold'>
          <StarIcon className='text-orange-300' />
          {product.rating}
        </div>
        <div className='text-sm'>
          Stock: <span className='font-bold'>{product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
