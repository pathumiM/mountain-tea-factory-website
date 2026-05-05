'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
}

const heroSlides: HeroSlide[] = [
    {
    id: 1,   
    image: '/images/product home1.jpg',  
    title: 'Welcome To Our Tea Gallery',
    subtitle: 'From Leaf to Cup',
    description: 'Discover the rich aroma and pure taste crafted in every leaf.'
  },
  {
    id: 2,   
    image: '/images/product home2.jpg',  
    title: 'Premium Mountain Tea',
    subtitle: 'Crafted at the Heart of the Highlands',
    description: 'Crafted with care, inspired by the mountains.'
  },
  {
    id: 3,   
    image: '/images/product home3.jpg',  
    title: 'Organic Tea Collection',
    subtitle: 'Pure & Natural',
    description: 'Where tradition meets the art of perfect tea.'
  },
];

const ProductHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to products section
  const handleExploreClick = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='relative h-[600px] w-full overflow-hidden'>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Black Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          </div>

          {/* Text on Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {slide.title}
            </h2>
            <p className="text-2xl md:text-3xl mb-4 text-center">
              {slide.subtitle}
            </p>
            <p className="text-lg md:text-xl text-center max-w-2xl">
              {slide.description}
            </p>
            <button 
              onClick={handleExploreClick}
              className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Explore Our Teas
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductHero;