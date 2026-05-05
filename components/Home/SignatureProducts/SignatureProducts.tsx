"use client";

import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const SignatureProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Ceylon Black Tea",
      tagline: "Bold & Full-Bodied",
      description: "Rich malty flavor with hints of caramel.",
      image: "/images/black tea.jpg",
      type: "Black Tea",
      badge: "Best Seller",
      price: "RS.500.00"
    },
    {
      id: 2,
      name: "Green Tea Supreme",
      tagline: "Fresh & Delicate",
      description: "Light vegetal notes with sweet finish.",
      image: "/images/green tea.jpg",
      type: "Green Tea",
      badge: "Organic",
      price: "RS.500.00"
    },
    {
      id: 3,
      name: "White Silver Tips",
      tagline: "Rare & Exquisite",
      description: "Subtle floral aroma with honey undertones.",
      image: "/images/white tea.jpg",
      type: "White Tea",
      badge: "Limited Edition",
      price: "RS.500.00"
    },
    {
      id: 4,
      name: "Breakfast Blend",
      tagline: "Energizing Start",
      description: "Strong, brisk character for your morning.",
      image: "/images/breakfast tea.jpg",
      type: "Black Tea Blend",
      badge: "Award Winner",
      price: "RS.500.00"
    }
  ];

  const next = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const current = products[currentIndex];

  return (
    <section>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Signature Collection
        </h2>
        <p className="text-lg text-gray-600">
          Handcrafted teas that define excellence
        </p>
      </div>

      {/* product display */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 md:h-96">
              <img 
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {current.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-green-600 text-sm font-semibold uppercase mb-2">
                {current.type}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {current.name}
              </h3>
              
              <p className="text-xl text-gray-600 italic mb-4">
                {current.tagline}
              </p>

              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">
                {current.description}
              </p>
              
              <div className="text-3xl font-bold text-green-800 mb-6">
                {current.price}
              </div>
              
              <button className="w-full bg-green-800 text-white py-3 rounded-full font-semibold hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-4 border-t">
            <button onClick={prev} className="p-2 hover:bg-gray-100 rounded-full">
               <GrFormPrevious size={24} color="Black" />
            </button>

            <div className="flex gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button onClick={next} className="p-2 hover:bg-gray-100 rounded-full">
              <MdNavigateNext size={24} color="Black" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <a href='/products'> 
        <div className="text-center mt-8">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800">
            View All Products →
          </button>
        </div>
        </a>
      </div>
    </section>
  );
};

export default SignatureProducts;