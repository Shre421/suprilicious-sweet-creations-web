
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Loader2, Plus, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  is_available: boolean;
}

const Admin: React.FC = () => {
  const { toast } = useToast();
  
  // Product form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
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
  
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !description || !price || !category) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const numericPrice = parseFloat(price);
      
      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            name,
            description,
            price: numericPrice,
            category,
            image_url: imageUrl,
            is_available: isAvailable
          }
        ])
        .select();
        
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Product added successfully!",
      });
      
      // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageUrl('');
      setIsAvailable(true);
      
      // Refresh products list
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
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
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Add New Product</CardTitle>
                    <CardDescription>Add a new product to your catalog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddProduct} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Product Name *
                        </label>
                        <Input 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium mb-1">
                          Description *
                        </label>
                        <Textarea 
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium mb-1">
                          Price (₹) *
                        </label>
                        <Input 
                          id="price"
                          type="number"
                          step="0.01"
                          min="0"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium mb-1">
                          Category *
                        </label>
                        <Input 
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          placeholder="e.g., cakes, brownies"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
                          Image URL
                        </label>
                        <Input 
                          id="imageUrl"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          id="isAvailable"
                          type="checkbox"
                          className="h-4 w-4 text-bakery-orange"
                          checked={isAvailable}
                          onChange={(e) => setIsAvailable(e.target.checked)}
                        />
                        <label htmlFor="isAvailable" className="ml-2 text-sm">
                          Product is available
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Adding...
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Product
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Product Catalog</CardTitle>
                    <CardDescription>Manage your existing products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoadingProducts ? (
                      <div className="text-center py-8">
                        <Loader2 className="mx-auto h-8 w-8 animate-spin text-bakery-orange" />
                        <p className="mt-2 text-sm text-gray-500">Loading products...</p>
                      </div>
                    ) : products.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-500">No products available. Add your first product!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Search products..." 
                            className="pl-10"
                          />
                        </div>
                        
                        <div className="border rounded-md divide-y">
                          {products.map((product) => (
                            <div key={product.id} className="p-4 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.category} - ₹{product.price}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Orders Management</CardTitle>
                  <CardDescription>View and manage customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Order management functionality coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <Card>
                <CardHeader>
                  <CardTitle>Testimonials Management</CardTitle>
                  <CardDescription>Approve and manage customer testimonials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Testimonial management functionality coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
