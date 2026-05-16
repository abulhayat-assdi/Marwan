"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, Package, ArrowRight, Sparkles } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center space-y-12"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-24 h-24 rounded-full bg-luxury-gold flex items-center justify-center mx-auto"
          >
            <CheckCircle2 size={48} className="text-black" />
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute -inset-4 border border-luxury-gold/20 border-dashed rounded-full"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Ordered Successfully</h1>
          <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg mx-auto">
            Thank you for choosing Marwan. Your pieces are being curated and will be shipped with the utmost care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="glass p-6 rounded-sm space-y-3 border-white/5">
            <Package size={24} className="text-luxury-gold mx-auto" />
            <h4 className="text-[10px] uppercase tracking-widest font-bold">Track Order</h4>
            <p className="text-[10px] opacity-40 font-medium">Coming to your email soon</p>
          </div>
          <div className="glass p-6 rounded-sm space-y-3 border-white/5">
            <Sparkles size={24} className="text-luxury-gold mx-auto" />
            <h4 className="text-[10px] uppercase tracking-widest font-bold">Priority Support</h4>
            <p className="text-[10px] opacity-40 font-medium">Available 24/7 for you</p>
          </div>
        </div>

        <div className="pt-8">
          <Link 
            href="/shop"
            className="group inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold transition-all"
          >
            Return to Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="pt-20 opacity-20 select-none pointer-events-none">
          <h2 className="text-[150px] font-display font-black tracking-tighter leading-none">MW</h2>
        </div>
      </motion.div>
    </div>
  );
}
