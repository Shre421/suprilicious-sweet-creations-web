
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from '@/components/admin/ProductForm';
import ProductList from '@/components/admin/ProductList';
import PlaceholderCard from '@/components/admin/PlaceholderCard';
import { Product } from '@/types/admin';

const Admin: React.FC = () => {
  const { toast } = useToast();
  
  // Products list state
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  
  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');
        
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoadingProducts(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage your products, orders, and testimonials.
            </p>
            <div className="w-20 h-1 bg-bakery-orange mx-auto mt-4"></div>
          </div>
          
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <ProductForm onProductAdded={fetchProducts} />
                </div>
                
                <div className="lg:col-span-2">
                  <ProductList products={products} isLoading={isLoadingProducts} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <PlaceholderCard 
                title="Orders Management" 
                description="View and manage customer orders" 
              />
            </TabsContent>
            
            <TabsContent value="testimonials">
              <PlaceholderCard 
                title="Testimonials Management" 
                description="Approve and manage customer testimonials" 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
