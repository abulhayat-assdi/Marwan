"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass h-20 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden lg:flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
          <Link href="/shop" className="hover:text-luxury-gold hover:opacity-100 transition-all">Shop</Link>
          <Link href="/shop?cat=Archive" className="hover:text-luxury-gold hover:opacity-100 transition-all">Archive</Link>
          <Link href="/about" className="hover:text-luxury-gold hover:opacity-100 transition-all">Atelier</Link>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-[0.3em] uppercase font-display select-none">
            MARWAN
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-white/30 transition-colors">
          <Search size={14} className="opacity-40" />
          <input type="text" placeholder="Search archive..." className="bg-transparent border-none focus:ring-0 text-[10px] uppercase tracking-widest px-2 w-32 outline-none" />
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 group p-2"
        >
          <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-1 right-1 bg-luxury-gold text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-20 left-0 bottom-0 w-full h-[calc(100vh-80px)] bg-luxury-black border-r border-white/10 p-12 flex flex-col gap-10 lg:hidden backdrop-blur-3xl z-[100]"
          >
            <Link onClick={() => setIsMenuOpen(false)} href="/shop" className="text-5xl font-display font-light tracking-tighter uppercase">Collections</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/shop?cat=Archive" className="text-5xl font-display font-light tracking-tighter uppercase">Archive</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-5xl font-display font-light tracking-tighter uppercase">Atelier</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/signup" className="text-5xl font-display font-light tracking-tighter uppercase text-luxury-gold">Join Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
