
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "text-bakery-orange" : "";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-bakery-orange">
              Suprilicious
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/products" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/products')}`}>
              Products
            </Link>
            <Link to="/custom-order" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/custom-order')}`}>
              Custom Orders
            </Link>
            <Link to="/contact" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link to="/admin" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/admin')}`}>
              Admin
            </Link>
          </nav>

          {/* Order Now Button */}
          <div className="hidden md:block">
            <Link to="/products" className="btn-primary">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-bakery-dark focus:outline-none"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/')}`} onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/products" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/products')}`} onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/custom-order" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/custom-order')}`} onClick={toggleMenu}>
                Custom Orders
              </Link>
              <Link to="/contact" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/contact')}`} onClick={toggleMenu}>
                Contact
              </Link>
              <Link to="/admin" className={`font-medium hover:text-bakery-orange transition-colors ${isActive('/admin')}`} onClick={toggleMenu}>
                Admin
              </Link>
              <Link to="/products" className="btn-primary text-center" onClick={toggleMenu}>
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
