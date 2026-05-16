"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Play, Sparkles, Shield, Compass } from 'lucide-react';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { ProductCard } from '../src/components/ProductCard';
import { ReviewCarousel } from '../src/components/ReviewCarousel';
import { PRODUCTS } from '../src/data/products';

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const heroTranslateY = useTransform(scrollY, [0, 600], [0, 100]);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-luxury-black text-white selection:bg-luxury-gold selection:text-black overflow-x-hidden">
      <Header />
      
      <main>
        {/* Dynamic Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale, y: heroTranslateY }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1511499767350-a1590fdb2817?auto=format&fit=crop&q=80&w=2000" 
              alt="Archive Background"
              className="w-full h-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Winter Archive 2026</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-9xl font-display font-light uppercase tracking-tighter leading-[0.85]"
              >
                The Art of <br />
                <span className="italic font-serif">Curated Gear</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
              >
                Functional artifacts for the modern pioneer. We refine the archetypes of luxury through material integrity and historical precision.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/shop" 
                className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-luxury-gold transition-all"
              >
                Explore Archive
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold group border-b border-transparent hover:border-white transition-all pb-1">
                <Play size={14} fill="currentColor" />
                Origin Film
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </section>

        {/* Feature Grid / Brand Values */}
        <section className="py-40 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-black transition-all">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-display uppercase tracking-widest">Enduring Quality</h3>
            <p className="text-sm opacity-40 leading-relaxed font-light">Each piece is tested for a decade of wear. We don't believe in disposability.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-black transition-all">
              <Compass size={32} />
            </div>
            <h3 className="text-2xl font-display uppercase tracking-widest">Ethical Origin</h3>
            <p className="text-sm opacity-40 leading-relaxed font-light">Transparent supply chains from Italian mills to your doorstep.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-black transition-all">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-display uppercase tracking-widest">Rarity First</h3>
            <p className="text-sm opacity-40 leading-relaxed font-light">Small batch productions that ensure every creation remains an artifact.</p>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-40 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold">New Artifacts</h4>
                <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none">The Current <br /> Selection</h2>
              </div>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-luxury-gold text-luxury-gold pb-1 hover:opacity-100 transition-opacity">
                View Repository
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Split Visual Section */}
        <section className="h-[80vh] flex flex-col md:flex-row">
          <div className="flex-1 relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-display uppercase tracking-widest">Process</h3>
                <Link href="/about" className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative group overflow-hidden border-l border-white/10">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200" alt="Bespoke" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-display uppercase tracking-widest">Bespoke</h3>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">Request Edit</button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Reviews */}
        <section className="py-40 bg-luxury-black">
          <ReviewCarousel />
        </section>

        {/* Newsletter / Club */}
        <section className="py-40 border-t border-white/5 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[100px] rounded-full -z-10" />
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">Enter the Archive</h2>
              <p className="text-white/40 font-light max-w-lg mx-auto">Subscribe for early access to limited releases and process documentation.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 text-[10px] uppercase tracking-widest font-bold focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-luxury-gold transition-all shadow-xl shadow-white/5">
                Join
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
