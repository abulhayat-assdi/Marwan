"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, quantity: number, size: string, color: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('marwan_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('marwan_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size: string, color: string) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor === color
      );
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size && item.selectedColor === color)
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
  };

  const removeFromCart = (id: string, size: string, color: string) => {
    setCart(prev => prev.filter(item => 
      !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateQuantity = (id: string, quantity: number, size: string, color: string) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    setCart(prev => prev.map(item => 
      (item.id === id && item.selectedSize === size && item.selectedColor === color)
      ? { ...item, quantity }
      : item
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartTotal, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
