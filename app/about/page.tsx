"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pb-40">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
          alt="Atelier"
          fill
          className="object-cover opacity-40 grayscale"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/30 to-luxury-black" />
        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-luxury-gold"
          >
            Since 2012
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter leading-none"
          >
            Legacy of <br /> <span className="italic font-serif">MW</span> Craft
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display leading-[0.9]">Beyond the stitch and seam.</h2>
              <p className="text-xl text-white/50 leading-relaxed font-light">
                Marwan was founded on the belief that everyday garments should be treated as functional artifacts. We don't chase trends; we refine archetypes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-luxury-gold">
                  <Leaf size={24} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Ethical Sourcing</h4>
                <p className="text-xs opacity-40 leading-relaxed">We partner exclusively with family-owned mills in Italy and Japan.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-luxury-gold">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Lifetime Quality</h4>
                <p className="text-xs opacity-40 leading-relaxed">Every piece is designed to endure a decade of wear and tear.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] group overflow-hidden rounded-sm">
            <Image 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" 
              alt="Model"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Visual Identity / Values */}
      <section className="bg-white/5 border-y border-white/10 py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            {[
              { icon: Sparkles, val: 'Precision', desc: 'Sartorial accuracy in every cut' },
              { icon: Users, val: 'Community', desc: 'Built for the modern pioneer' },
              { icon: Leaf, val: 'Integrity', desc: 'Materials that respect the earth' }
            ].map((item, id) => (
              <div key={id} className="text-center space-y-6 group">
                <div className="w-24 h-24 bg-luxury-black border border-white/10 flex items-center justify-center rounded-full mx-auto group-hover:bg-luxury-gold group-hover:text-black transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display uppercase tracking-widest">{item.val}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-8xl font-serif italic mb-12 leading-none">
              Witness the <br /> New Standard.
            </h2>
            <Link 
              href="/shop" 
              className="inline-flex items-center gap-6 bg-white text-black px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.4em] hover:bg-luxury-gold transition-all group"
            >
              Start Exploring
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
