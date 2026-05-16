export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  sizeOptions: string[];
  colorOptions: ColorOption[];
  isNew?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
