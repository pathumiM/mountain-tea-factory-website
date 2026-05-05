'use client';
import React, { useState, useEffect, useRef } from 'react';

const videos = [
  {
    src: '/images/deniyaya video.mp4',
    title: 'Explore the Heart of Deniyaya',
    description: 'Discover the lush mountains where our tea begins its journey.',
  },
  {
    src: '/images/tea leaves.mp4',
    title: 'Fresh Tea Leaves',
    description: 'See our hand-picked leaves ready for the perfect brew.',
  },
  {
    src: '/images/tea cups.mp4',
    title: 'A Perfect Cup of Tea',
    description: 'Experience the aroma and flavor of our crafted teas.',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        videoRef.current.load();
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };
    
    playVideo();
  }, [current]);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[120vh] sm:h-screen overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src={videos[current].src}
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="absolute z-10 w-full h-full top-1/2 left-1/2 
                        translate-x-[-50%] translate-y-[-50%] 
                        flex items-center justify-center flex-col px-4 text-center 
                        transition-opacity duration-1000">
          <h1 className="text-[25px] md:text-[35px] lg:text-[45px] tracking-[0.7rem] 
                         text-white font-bold uppercase mb-4">
            {videos[current].title}
          </h1>
          <p className="text-white text-lg md:text-base font-normal [word-spacing:5px]">
            {videos[current].description}
          </p>
        </div>

        {/* Video Indicators (dots) */}
        <div className="absolute bottom-10 w-full flex justify-center gap-4 z-20">
          {videos.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 
                ${current === index ? 'bg-white scale-125' : 'bg-gray-400'}
              `}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;