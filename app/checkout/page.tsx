"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Lock, CreditCard, Wallet, Truck } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      router.push('/thank-you');
    }, 1500);
  };

  if (cart.length === 0) {
    if (typeof window !== 'undefined') router.push('/shop');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left: Checkout Form */}
        <div className="flex-1 space-y-12">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-40 hover:opacity-100">
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tighter">Checkout</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-1 h-4 bg-luxury-gold" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-1 h-4 bg-luxury-gold" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 md:col-span-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Street Address</label>
                  <input 
                    required
                    type="text" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Apartment, suite, unit, etc."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">City</label>
                  <input 
                    required
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="New York"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Postal Code</label>
                  <input 
                    required
                    type="text" 
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    placeholder="10001"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Payment (Visual only) */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-1 h-4 bg-luxury-gold" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Payment Method</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-luxury-gold bg-luxury-gold/5 rounded-sm flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <CreditCard size={20} className="text-luxury-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-luxury-gold" />
                </div>
                <div className="p-4 border border-white/10 opacity-40 rounded-sm flex items-center justify-between cursor-not-allowed">
                  <div className="flex items-center gap-4">
                    <Wallet size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Paypal</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-white/20" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black py-6 rounded-sm font-bold text-sm uppercase tracking-[0.3em] hover:bg-luxury-gold transition-all shadow-2xl shadow-white/5"
            >
              Place Order - ${cartTotal}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-[450px]">
          <div className="glass p-10 rounded-sm sticky top-32 space-y-10 border-white/10">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold opacity-40 border-b border-white/10 pb-6">Your Order</h2>
            
            <div className="max-h-[300px] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 items-center">
                  <div className="w-16 h-20 relative rounded-sm overflow-hidden bg-white/5">
                    <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-tight">{item.title}</h4>
                    <p className="text-[9px] uppercase tracking-widest opacity-40 font-bold">Qty: {item.quantity} · {item.selectedSize}</p>
                  </div>
                  <p className="text-xs font-display font-medium">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-10 border-t border-white/10">
              <div className="flex justify-between items-center text-xs opacity-60">
                <span className="uppercase tracking-widest font-bold">Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between items-center text-xs opacity-60">
                <span className="uppercase tracking-widest font-bold">Priority Shipping</span>
                <span className="text-green-500 font-bold">FREE</span>
              </div>
              <div className="pt-6 flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Order Total</span>
                <span className="text-4xl font-display text-luxury-gold">${cartTotal}</span>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-60 group-hover:bg-luxury-gold group-hover:text-black transition-all">
                  <Truck size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold">Estimated Delivery</p>
                  <p className="text-[10px] font-medium text-white/40">3-5 Business Days</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-60 group-hover:bg-luxury-gold group-hover:text-black transition-all">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold">Secure Transactions</p>
                  <p className="text-[10px] font-medium text-white/40">256-bit SSL encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
