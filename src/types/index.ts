export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizeOptions: string[];
  colorOptions: { name: string; hex: string }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}
