 'use client';
import React, { useState } from 'react';
import ProductHero from './ProductHero';
import TeaCategory from './TeaCategory';
import ProductList from './ProductList';  
import { teaProducts } from '@/constant/type';

const Product = () => {
  // Default to "All" to show all teas
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Black Tea' | 'Green Tea' | 'Herbal Tea' | 'Special Tea'>('All');

  const handleSelectCategory = (category: 'All' | 'Black Tea' | 'Green Tea' | 'Herbal Tea' | 'Special Tea') => {
    setSelectedCategory(category);
  };

  // Filter products by category; show all if "All"
  const filteredProducts = selectedCategory === 'All'
    ? teaProducts
    : teaProducts.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <ProductHero /> 

      {/* Category Section - Added id for smooth scroll target */}
      <div id="products-section">
        <TeaCategory
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Product List Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {selectedCategory === 'All' ? 'All Teas' : selectedCategory}
        </h2>

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Product;