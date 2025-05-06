
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-bakery-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to order? Have questions? We'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-bakery-orange mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-bakery-peach flex items-center justify-center mr-4">
                  <MapPin size={18} className="text-bakery-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-600 text-sm">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-bakery-peach flex items-center justify-center mr-4">
                  <Phone size={18} className="text-bakery-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-bakery-peach flex items-center justify-center mr-4">
                  <Mail size={18} className="text-bakery-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">hello@suprilicious.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-bakery-peach flex items-center justify-center mr-4">
                  <Clock size={18} className="text-bakery-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Hours</h4>
                  <p className="text-gray-600 text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="input-field" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="input-field" 
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="input-field" 
                    placeholder="Order Inquiry"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="input-field resize-none" 
                  placeholder="I would like to inquire about..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
