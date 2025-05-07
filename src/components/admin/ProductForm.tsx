
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductFormProps {
  onProductAdded: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductAdded }) => {
  const { toast } = useToast();
  
  // Product form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
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
      onProductAdded();
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
    <Card>
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
  );
};

export default ProductForm;
