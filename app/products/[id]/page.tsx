'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { teaProducts, TeaProduct } from '@/constant/type';

const ProductDetail = () => {
  const params = useParams();
  const productId = Number(params.id);

  const product: TeaProduct | undefined = teaProducts.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <div className="bg-green-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Product Not Found</h2>
          <p className="text-gray-300 mb-6">The product you're looking for doesn't exist.</p>
          <a href="/products" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  const packages = [
    { size: '100g' },
    { size: '250g' },
    { size: '500g' }
  ];

  return (
    <div className="bg-green-950 min-h-screen py-10">
      <div className="pt-20 container mx-auto px-4 max-w-6xl">
        
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-white text-gray-800 px-6 py-2 rounded-lg mb-6 hover:bg-gray-100"
        >
          
        </button>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            
            {/* Product Image Section */}
            <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details Section */}
            <div className="md:w-1/2 p-8">
              
              {/* Product Name */}
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-green-700">
                  Rs {product.price}
                </p>
              </div>

              {/* Flavor Note */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Flavor Profile
                </h3>
                <p className="text-gray-700 text-lg">
                  {product.flavornote}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Package Display*/}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                  Available Package Sizes
                </h3>
                <div className="flex gap-3">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.size}
                      className="flex-1 py-4 px-4 rounded-lg border-2 border-gray-300 bg-white"
                    >
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-800">
                          {pkg.size}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200 shadow-md">
                  Buy Now
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-md">
                  Add to Cart
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;