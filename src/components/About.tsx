import React from 'react';
const About: React.FC = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Sweet Story</h2>
          <div className="w-20 h-1 bg-bakery-orange mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-bakery-peach rounded-full overflow-hidden">
                <img alt="Suprilicious Bakery" src="/lovable-uploads/027a8b25-e3f6-4ba9-983f-a27a6af9da0d.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-5 -right-4 w-32 h-32 bg-bakery-pink rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-bakery-orange rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-bakery-orange">Baking Memories Since 2018</h3>
            <p className="mb-4 text-gray-700">
              At the heart of Mumbai's bustling city, Suprilicious was born from a simple love for baking and the joy of sharing sweet moments.
            </p>
            <p className="mb-4 text-gray-700">
              What started as a passion project in a home kitchen has grown into Mumbai's favorite homemade bakery, specializing in a wide array of desserts crafted fresh to order — Cakes, Cheesecakes, Jar & Specialty desserts, Brownies & Bars, Cookies & Donuts.
            </p>
            <p className="mb-6 text-gray-700">
              Every order is prepared with personal attention, ensuring that customers not only get a delicious treat but one that reflects their own unique tastes and celebrations.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="bg-bakery-peach rounded-lg p-4 text-center">
                <p className="font-serif font-bold text-lg">100%</p>
                <p className="text-sm">Fresh Ingredients</p>
              </div>
              <div className="bg-bakery-peach rounded-lg p-4 text-center">
                <p className="font-serif font-bold text-lg">Custom</p>
                <p className="text-sm">Made to Order</p>
              </div>
              <div className="bg-bakery-peach rounded-lg p-4 text-center">
                <p className="font-serif font-bold text-lg">5★</p>
                <p className="text-sm">Customer Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;