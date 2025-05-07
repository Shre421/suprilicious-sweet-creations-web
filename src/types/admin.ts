
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  is_available: boolean;
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  total: number;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  delivery_address: string;
  delivery_date?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image_url: string;
  rating: number;
  is_approved: boolean;
  created_at: string;
}
