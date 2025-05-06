
import React from 'react';
import { Link } from 'react-router-dom';
import { CakeSlice, Heart } from 'lucide-react';

const CustomOrder: React.FC = () => {
  return (
    <section id="custom-order" className="section-padding bg-gradient-to-br from-bakery-peach to-bakery-pink">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Custom cake design" 
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                <Heart size={24} className="text-bakery-orange" />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="inline-flex items-center mb-4 bg-white/50 px-4 py-2 rounded-full">
              <CakeSlice size={16} className="text-bakery-orange mr-2" />
              <span className="text-sm font-medium">Just as you imagine</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Custom Desserts <br />
              <span className="text-bakery-orange">Made For You</span>
            </h2>
            
            <p className="mb-6 text-gray-700">
              What sets Suprilicious apart is our commitment to customization — you can request cakes just the way you imagine them — flavors, designs, themes, and dietary preferences.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-bakery-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                </div>
                <span>Custom flavors and fillings</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-bakery-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                </div>
                <span>Personalized designs and themes</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-bakery-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                </div>
                <span>Dietary options (eggless, gluten-free)</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-bakery-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                </div>
                <span>Special occasion desserts</span>
              </li>
            </ul>
            
            <Link to="/custom-order" className="btn-primary">
              Order Custom Dessert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
