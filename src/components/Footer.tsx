
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-peach">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="font-serif text-2xl font-bold text-bakery-orange mb-4 inline-block">
              Suprilicious
            </Link>
            <p className="text-sm mt-4 mb-6">
              At the heart of Mumbai's bustling city, Suprilicious brings you homemade desserts crafted with love and the finest ingredients. Every bite tells our story.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-bakery-dark hover:text-bakery-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-bakery-dark hover:text-bakery-orange transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-bakery-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-bakery-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-bakery-orange transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="text-sm hover:text-bakery-orange transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-bakery-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-bakery-orange flex-shrink-0" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-bakery-orange flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-bakery-orange flex-shrink-0" />
                <span className="text-sm">hello@suprilicious.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bakery-pink/30 mt-8 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Suprilicious. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
