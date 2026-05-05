 import React from 'react';
import { ReactNode } from 'react';
import { FaCoffee, FaLeaf, FaGift, FaMugHot, FaTh } from 'react-icons/fa';

interface TeaCategory {
  id: number;
  title: 'All' | 'Black Tea' | 'Green Tea' | 'Herbal Tea' | 'Special Tea';
  icon: ReactNode;
  description: string;
}

const categories: TeaCategory[] = [
  {
    id: 0,
    title: 'All',
    icon: <FaTh size={24} />,
    description: 'Browse our complete collection of premium teas from around the world, carefully selected for quality and taste.'
  },
  {
    id: 1,
    title: 'Black Tea',
    icon: <FaCoffee size={24} />,
    description: 'Experience the bold flavors and rich aroma of our finest black teas, handpicked for the perfect cup.'
  },
  {
    id: 2,
    title: 'Green Tea',
    icon: <FaLeaf size={24} />,
    description: 'Refresh yourself with our premium green teas, carefully selected to deliver natural taste and health benefits.'
  },
  {
    id: 3,
    title: 'Herbal Tea',
    icon: <FaGift size={24} />,
    description: 'Discover soothing herbal blends made from natural ingredients, perfect for relaxation and wellness.'
  },
  {
    id: 4,
    title: 'Special Tea',
    icon: <FaMugHot size={24} />,
    description: 'Indulge in unique, specialty teas crafted to offer a memorable and exquisite tea experience.'
  }
];

interface TeaCategoryProps {
  onSelectCategory: (category: 'All' | 'Black Tea' | 'Green Tea' | 'Herbal Tea' | 'Special Tea') => void;
  selectedCategory: string;
}

const TeaCategory = ({ onSelectCategory, selectedCategory }: TeaCategoryProps) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Tea Collection</h2>
          <p className="text-gray-600">Select a category to explore our premium teas</p>
        </div>

        {/* Grid container for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 shadow-lg rounded-lg overflow-hidden">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.title)}
              className={`text-white p-6 transition-all duration-300 cursor-pointer relative
                ${selectedCategory === category.title 
                  ? 'bg-green-700 scale-105 z-10' 
                  : 'bg-emerald-950 hover:bg-green-800'
                }`}
            >
              {/* Selected Indicator */}
              {selectedCategory === category.title && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4 text-center opacity-90">
                {category.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-center">
                {category.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-xs leading-relaxed text-center">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaCategory;