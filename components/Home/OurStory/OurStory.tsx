"use client";

import React from 'react';

const OurStory = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">Since 1985</span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mt-2 mb-4">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Content */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Founded in the lush hills of Deniyaya, our Tea Factory has been crafting
          premium hand-picked teas for generations. From the careful selection of
          fresh leaves to the art of processing, every cup of tea tells the story
          of our heritage, dedication, and love for quality. We pride ourselves on
          sustainable practices and the rich flavor that makes our teas unique.
        </p>

        {/* Read More Button */}
        <a 
          href="/about" 
          className="inline-flex items-center gap-2 bg-green-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg group"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default OurStory;