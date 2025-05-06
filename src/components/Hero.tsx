
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-bakery-peach overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-bakery-dark mb-4 leading-tight">
              Homemade Bakes <br />
              <span className="text-bakery-orange">With Love</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Handcrafted desserts made fresh to order in Mumbai. From custom cakes to artisanal cookies, we bake happiness for every occasion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Explore Our Menu
              </Link>
              <Link to="/custom-order" className="border-2 border-bakery-orange text-bakery-orange font-medium py-3 px-6 rounded-md transition-all hover:bg-bakery-orange/10">
                Custom Order
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-72 md:h-96 bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Delicious homemade desserts from Suprilicious"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-bakery-pink rounded-full flex items-center justify-center p-4 shadow-md">
              <div className="text-center">
                <p className="font-serif font-bold">Fresh Daily</p>
                <p className="text-xs">Baked to Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-bakery-pink rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 bg-bakery-orange rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero;
