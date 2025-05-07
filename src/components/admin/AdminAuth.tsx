
import React, { useState } from 'react';
import { adminLogin } from '@/utils/adminAuth';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Lock } from 'lucide-react';

const AdminAuth: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      toast({
        title: "Error",
        description: "Password is required",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      const isSuccess = adminLogin(password);
      
      if (isSuccess) {
        toast({
          title: "Success",
          description: "Welcome to the admin dashboard!",
        });
        window.location.reload(); // Simple way to refresh authentication state
      } else {
        toast({
          title: "Error",
          description: "Invalid password",
          variant: "destructive"
        });
        setPassword('');
      }
      
      setIsLoading(false);
    }, 1000); // Simulate network delay for security
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <Lock className="w-12 h-12 mx-auto text-bakery-orange mb-4" />
          <CardTitle className="text-2xl font-serif">Admin Access</CardTitle>
          <CardDescription>Please enter the admin password to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input 
                type="password" 
                placeholder="Enter admin password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;
