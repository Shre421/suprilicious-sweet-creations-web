
import React from 'react';
import { Link } from 'react-router-dom';
import { CakeSlice, Cookie } from 'lucide-react';

interface CategoryProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, description, image, icon, link }) => {
  return (
    <div className="product-card group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          to={link} 
          className="text-bakery-orange font-medium text-sm hover:underline inline-flex items-center"
        >
          Explore Products
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: "Cakes & Cheesecakes",
      description: "Custom celebration cakes and rich, creamy cheesecakes in various flavors.",
      image: "/lovable-uploads/4c89b735-7adf-46fb-9b7e-0d2d2075d2cd.png",
      icon: <CakeSlice size={18} className="text-bakery-orange" />,
      link: "/products"
    },
    {
      title: "Jar & Specialty Desserts",
      description: "Layered jar desserts and unique treats perfect for any occasion.",
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
      icon: <CakeSlice size={18} className="text-bakery-orange" />,
      link: "/products"
    },
    {
      title: "Brownies & Bars",
      description: "Rich, fudgy brownies and gourmet bars made with premium ingredients.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
      icon: <CakeSlice size={18} className="text-bakery-orange" />,
      link: "/products"
    },
    {
      title: "Cookies & Donuts",
      description: "Freshly baked cookies and soft, fluffy donuts in various flavors.",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      icon: <Cookie size={18} className="text-bakery-orange" />,
      link: "/products"
    }
  ];

  return (
    <section id="categories" className="section-padding bg-bakery-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of handcrafted desserts, made fresh to order with the finest ingredients and customized to your preferences.
          </p>
          <div className="w-20 h-1 bg-bakery-orange mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
