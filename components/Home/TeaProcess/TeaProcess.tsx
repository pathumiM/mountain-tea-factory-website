"use client";

import React from 'react';

const TeaProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Plucking",
      description: "Skilled pluckers carefully select 'two leaves and a bud' at dawn in the misty highlands of Deniyaya. Only the finest, most tender leaves make it into our collection.",
      image: "/images/step1.jpeg",
      alt: "Tea plucking in Deniyaya"
    },
    {
      number: "02",
      title: "Rolling",
      description: "Leaves are twisted and rolled to break down cell walls, releasing essential oils and enzymes that give our tea its distinctive character and depth of flavor.",
      image: "/images/step2.jpg",
      alt: "Tea rolling process"
    },
    {
      number: "03",
      title: "Drying",
      description: "Fresh leaves are carefully dried to reduce moisture content while preserving their natural essence. This gentle process prepares the leaves for the next stage of transformation.",
      image: "/images/step3.jpg",
      alt: "Tea drying process"
    },
    {
      number: "04",
      title: "Roasting",
      description: "Traditional roasting techniques bring out the rich, complex flavors. Precise temperature control ensures each leaf reaches its perfect aromatic profile.",
      image: "/images/step4.jpg",
      alt: "Tea roasting process"
    },
    {
      number: "05",
      title: "Packing",
      description: "Our tea is carefully packaged to lock in freshness and flavor. Each package is sealed with care, ready to deliver the authentic taste of Deniyaya to your cup.",
      image: "/images/step5.jpeg",
      alt: "Tea packing process"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-green-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Art of Tea Making
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the misty hills of Deniyaya to your cup, every step is a testament to our commitment to excellence
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 md:gap-12 mb-16 md:mb-24 last:mb-0`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <div className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-green-200">
                    {step.number}
                  </span>
                  <div className="h-1 flex-1 bg-green-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-12 h-1 bg-green-500"></div>
                  <div className="w-6 h-1 bg-green-300"></div>
                  <div className="w-3 h-1 bg-green-200"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeaProcess;