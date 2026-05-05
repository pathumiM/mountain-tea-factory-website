import React from 'react'

interface Country {
  flag: string;
  name: string;
}

const ExportMarket = () => {

     const countries: Country[] = [
    { flag: '/images/c1.jpg', name: 'UK' },
    { flag: '/images/c2.jpg', name: 'Canada' },
    { flag: '/images/c3.jpg', name: 'Norway' },
    { flag: '/images/c4.jpg', name: 'China' },
    { flag: '/images/c5.jpg', name: 'Germany' },
    { flag: '/images/c6.jpg', name: 'Brazil' }
  ];

  return (
    <div>
        <section className="py-16 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
          Markets We Serve
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Trusted tea supplier across six continents
        </p>

        {/* Country Flags */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {countries.map((country: Country, index: number) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full h-32 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src={country.flag} 
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-gray-700 font-medium text-center">
                {country.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ExportMarket