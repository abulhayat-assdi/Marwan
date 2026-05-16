"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-luxury-black z-[101] flex flex-col border-l border-white/10"
          >
            <div className="p-8 flex items-center justify-between border-b border-white/10">
              <div className="space-y-1">
                <h2 className="text-xl font-display font-medium uppercase tracking-widest text-white">Your Bag</h2>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">{cartCount} Items</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 hover:bg-white/5 rounded-full transition-colors border border-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40 text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-luxury-gold border-b border-luxury-gold pb-1 font-bold text-[10px] uppercase tracking-widest"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6 pb-8 border-b border-white/5 last:border-0"
                  >
                    <div className="w-20 h-24 bg-white/5 rounded-sm overflow-hidden relative flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-tight">{item.title}</h3>
                          <p className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold mt-1">
                            {item.selectedSize} · {item.selectedColor}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="opacity-40 hover:opacity-100 transition-opacity text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                          >-</button>
                          <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold border-x border-white/10">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                          >+</button>
                        </div>
                        <p className="text-sm font-display font-medium text-luxury-gold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-white/10 space-y-6 bg-white/[0.02]">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">Estimated Total</p>
                  <p className="text-3xl font-display text-luxury-gold">${cartTotal}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    href="/cart"
                    onClick={onClose}
                    className="flex-1 text-center border border-white/10 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-colors"
                  >
                    View Bag
                  </Link>
                  <Link 
                    href="/checkout"
                    onClick={onClose}
                    className="flex-1 text-center bg-white text-black py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-luxury-gold transition-all"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
