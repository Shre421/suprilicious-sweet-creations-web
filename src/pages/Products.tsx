
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  is_available: boolean;
}

const Products: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Product[];
    }
  });

  const categories = products ? ['all', ...new Set(products.map(product => product.category))] : ['all'];
  
  const filteredProducts = products?.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  const addToCart = (product: Product) => {
    // For now, just show a toast - we'll implement cart functionality later
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-bakery-orange" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">Error loading products</h2>
            <p className="mt-2">Please try again later</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our delicious range of handcrafted desserts, made with love and the finest ingredients.
            </p>
            <div className="w-20 h-1 bg-bakery-orange mx-auto mt-4"></div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image_url || "https://images.unsplash.com/photo-1582562124811-c09040d0a901"} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-xl font-semibold">{product.name}</h3>
                      <span className="font-medium text-bakery-orange">₹{product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                    <div className="mt-4">
                      <Button 
                        onClick={() => addToCart(product)}
                        className="w-full"
                        disabled={!product.is_available}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        {product.is_available ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
