import React from 'react'

const Page = () => {
  return (
    <div>
        {/*Hero*/}
        <section className='relative h-screen w-full'>
             {/*image*/}
             <img
             src="/images/factory.jpg"
             alt="Team collaboration"
             className="absolute w-full h-full object-cover"/>
             {/* Dark Overlay*/}
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="relative z-20 h-full flex items-center px-8 md:px-16">
             {/* Text Content */}
             <div className="font-serif text-left text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Tea Story
              </h1>
             <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-4 my-6 rounded-r-lg w-[400px]">
              <p className="text-lg md:text-xl leading-relaxed font-light italic">
                Crafting premium Ceylon tea with care and tradition in every leaf. 
                From the misty highlands to your cup, we ensure each sip delivers freshness and flavor.
              </p>
            </div>
            </div>
        </div>
        </section>
        {/*Our story*/}
        <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center font-serif font-bold text-green-900 mb-8">
            Our Story
          </h2>
          
          <div className="space-y-6  text-gray-800 text-lg leading-relaxed">
             <p className='text-justify'>
              In 1875, amid Sri Lanka's central highlands, our great-great-grandfather Mr. Appuhamy Mudaliyar 
              planted the first tea seedlings on five acres of mountain terrain. While neighboring farmers 
              remained skeptical of this colonial crop, he recognized the exceptional terroir where elevation, 
              climate, and mineral-rich soil created ideal conditions for premium Ceylon tea.
            </p>
            <p className='text-justify'>
              The early years demanded dedication. Mr. Appuhamy spent three years mastering tea cultivation, 
              studying under Scottish estate managers while integrating traditional Sinhalese practices. His 
              perseverance paid off in 1878 when his first harvest of hand-rolled orthodox tea commanded 
              remarkable prices at the Colombo Tea Exchange, establishing our family's reputation for quality.
            </p>
            
            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              <img 
                src="/images/about1.jpeg" 
                alt="factory"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/images/about2.jpeg" 
                alt="working"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/images/about3.jpeg" 
                alt="tea leave plucking"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
              <p className='text-justify'>
                By 1920, our estate had expanded to 75 acres, becoming one of the largest indigenous-owned tea 
                plantations in the region. During World War II, three generations worked side by side to meet 
                critical tea supply demands. After Ceylon's independence in 1948, we became pioneers demonstrating 
                that local entrepreneurship could rival colonial estates in both scale and quality.
              </p>

              <p className='text-justify'>
                Today, our 250-acre estate represents five generations of expertise and sustainable practices. 
                The original mountain spring discovered by Mr. Appuhamy in 1875 still irrigates our gardens, 
                while his first processing shed's stone foundation stands preserved. Every cup of Mountain Tea 
                embodies 150 years of family legacy, honoring the land and traditions that define authentic 
                Ceylon tea.
              </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
          <section className="py-16 px-8 md:px-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
                What Makes Us Special
              </h2>
              <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in every aspect of our tea production
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Value 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">🍃</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    100% Organic
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No pesticides, no chemicals. Only pure, natural tea grown in harmony with nature.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">👐</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Hand-Picked
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every leaf is carefully selected by skilled pluckers at peak freshness each morning.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    High Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous quality control ensures only the finest tea leaves make it to your cup.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">♻️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Sustainable
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Eco-friendly practices that protect our land for future generations of tea lovers.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Tea Making Process Section */}
            <section className="py-16 px-8 md:px-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
                  Traditional Tea Making Process
                </h2>
                <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                  Hover over each step to discover our time-honored craftsmanship
                </p>

                {/* Process Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  
                  {/* Step 1 - Plucking */}
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img 
                      src="/images/about3.jpeg" 
                      alt="Hand Plucking"
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-green-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">
                        Hand Plucking
                      </h3>
                      <p className="text-white text-sm text-center leading-relaxed">
                        Skilled workers select only the finest two leaves and a bud at dawn for optimal freshness.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Withering */}
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img 
                      src="/images/withering.jpg" 
                      alt="Natural Withering"
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">
                        Natural Withering
                      </h3>
                      <p className="text-white text-sm text-center leading-relaxed">
                        Leaves rest on bamboo trays for 12-16 hours, reducing moisture and developing aroma.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Rolling */}
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img 
                      src="/images/hdrolling.jpg" 
                      alt="Hand Rolling"
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">
                        Hand Rolling
                      </h3>
                      <p className="text-white text-sm text-center leading-relaxed">
                        Master craftsmen roll leaves to release natural oils and create distinctive twisted shapes.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Oxidation */}
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img 
                      src="/images/oxidating.jpg" 
                      alt="Controlled Oxidation"
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">
                        Controlled Oxidation
                      </h3>
                      <p className="text-white text-sm text-center leading-relaxed">
                        Temperature and humidity carefully monitored to develop perfect color, aroma, and taste.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 - Drying */}
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img 
                      src="/images/drying.jpg" 
                      alt="Traditional Firing"
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">
                        Traditional Firing
                      </h3>
                      <p className="text-white text-sm text-center leading-relaxed">
                        Hot air drying locks in flavor and aroma, preserving authentic Ceylon tea excellence.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            {/* Location */}
            <section className="py-16 px-8 md:px-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
                  Visit Our Factory
                </h2>
                <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                  Mountain Tea Estate, Deniyaya, Sri Lanka
                </p>

                {/* Map Container */}
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.89012345678!2d80.55123456789012!3d6.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e1234567890a%3A0x1234567890abcdef!2sDeniyaya!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Page