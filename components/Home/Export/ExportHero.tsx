import React from 'react'

interface Stat {
  number: string;
  label: string;
} 
   

const ExportHero = () => {
    const stats: Stat[] = [
    { number: '5+', label: 'Countries Served' },
    { number: '150+', label: 'Years Experience' },
    { number: '5M+', label: 'Kg Exported Annually' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
        <section className='relative h-screen w-full'>
        {/* Background Image */}
        <img
            src="/images/export.jpg"
            alt="Export shipping"
            className="absolute w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-8 md:px-16">
            {/* Text Content */}
            <div className="font-serif text-center text-white max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Global Export Services
            </h1>
            <p className="text-lg md:text-xl leading-relaxed font-light">
                Delivering premium Ceylon tea to over 50 countries worldwide. 
                From our highlands to your market, we ensure quality in every shipment.
            </p>
            </div>

            {/* Statistics Cards */}
            <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat: Stat, index: number) => (
                <div 
                    key={index} 
                    className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
                >
                    <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
                    {stat.number}
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-medium">
                    {stat.label}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ExportHero