"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ChevronLeft } from 'lucide-react';
import { useCart } from '../../src/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center space-y-8 px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-luxury-gold/20 blur-3xl rounded-full" />
          <ShoppingBag size={80} className="relative opacity-20" />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display uppercase tracking-tight">Your bag is empty</h1>
          <p className="text-white/40 font-light max-w-sm mx-auto">Discover our latest arrivals and find your next signature piece.</p>
        </div>
        <Link 
          href="/shop"
          className="bg-white text-black px-12 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors"
        >
          Discover Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left: Items List */}
        <div className="flex-1 space-y-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <h1 className="text-5xl font-display uppercase tracking-tighter">Bag</h1>
            <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-40">{cartCount} Items</p>
          </div>

          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div 
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col sm:flex-row gap-8 py-8 border-b border-white/5 relative group"
                >
                  <Link href={`/product/${item.slug}`} className="w-full sm:w-40 aspect-[3/4] relative rounded-sm overflow-hidden bg-white/5 flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{item.category}</p>
                        <h3 className="text-2xl font-display font-medium tracking-tight">
                          <Link href={`/product/${item.slug}`} className="hover:text-luxury-gold transition-colors">
                            {item.title}
                          </Link>
                        </h3>
                        <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold opacity-40 mt-2">
                          <span>Size: {item.selectedSize}</span>
                          <span>Color: {item.selectedColor}</span>
                        </div>
                      </div>
                      <p className="text-xl font-display text-luxury-gold">${item.price}</p>
                    </div>

                    <div className="flex justify-between items-center mt-8">
                      <div className="flex items-center border border-white/10 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                        ><Minus size={12} /></button>
                        <span className="w-10 h-10 flex items-center justify-center text-xs font-bold border-x border-white/10">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                        ><Plus size={12} /></button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-30 hover:opacity-100 transition-opacity text-red-500"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link href="/shop" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 hover:opacity-100 transition-opacity">
            <ChevronLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        {/* Right: Summary Card */}
        <div className="lg:w-[400px]">
          <div className="glass p-8 rounded-sm sticky top-32 space-y-8 border-white/10">
            <h2 className="text-xl font-display uppercase tracking-widest font-medium">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm opacity-60">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm opacity-60">
                <span>Shipping</span>
                <span className="text-green-500 uppercase text-[10px] font-bold tracking-widest">Free</span>
              </div>
              <div className="flex justify-between text-sm opacity-60">
                <span>Est. Taxes</span>
                <span>$0.00</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest font-bold">Total</span>
                <span className="text-3xl font-display text-luxury-gold">${cartTotal}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link 
                href="/checkout"
                className="w-full bg-white text-black py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-luxury-gold transition-all"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </Link>
              <p className="text-[9px] uppercase tracking-widest text-center opacity-30 leading-relaxed font-bold">
                Tax included. Shipping and promo codes applied at checkout.
              </p>
            </div>

            {/* Payment Icons */}
            <div className="flex justify-center gap-4 opacity-20 grayscale">
               {/* Just placeholders */}
               <div className="w-10 h-6 bg-white/20 rounded-sm" />
               <div className="w-10 h-6 bg-white/20 rounded-sm" />
               <div className="w-10 h-6 bg-white/20 rounded-sm" />
               <div className="w-10 h-6 bg-white/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
