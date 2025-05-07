
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from '@/components/admin/ProductForm';
import ProductList from '@/components/admin/ProductList';
import PlaceholderCard from '@/components/admin/PlaceholderCard';
import AdminAuth from '@/components/admin/AdminAuth';
import { isAdminAuthenticated, adminLogout } from '@/utils/adminAuth';
import { Product } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const Admin: React.FC = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Products list state
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  
  // Check authentication on mount
  useEffect(() => {
    setIsAuthenticated(isAdminAuthenticated());
  }, []);
  
  // Fetch products on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);
  
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

  const handleLogout = () => {
    adminLogout();
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin dashboard."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 section-padding">
        <div className="container mx-auto">
          {!isAuthenticated ? (
            <AdminAuth />
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="flex justify-between items-center">
                  <div />
                  <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h1>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
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
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
