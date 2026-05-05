'use client';
import React from 'react';
import { TeaProduct } from '@/constant/type';
import { useRouter } from 'next/navigation';

interface ProductListProps {
  products: TeaProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => handleClick(product.id)}
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />

          {/* Product Info */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.flavornote}</p>
            <p className="text-green-700 font-semibold mt-2">Rs {product.price}</p>
            <div className='flex justify-center'>
            <button className="button-center font-semibold bg-green-950 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              View More
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
