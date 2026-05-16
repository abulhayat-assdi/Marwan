"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5">
        <Quote size={120} />
      </div>

      <div className="relative z-10 min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < REVIEWS[index].rating ? "currentColor" : "none"} 
                  className={i < REVIEWS[index].rating ? "text-luxury-gold" : "text-white/20"} 
                />
              ))}
            </div>
            
            <p className="text-3xl md:text-5xl font-serif italic leading-tight px-4 md:px-12">
              "{REVIEWS[index].comment}"
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-luxury-gold/30">
                <img src={REVIEWS[index].avatar} alt={REVIEWS[index].user} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">{REVIEWS[index].user}</h4>
                <p className="text-[9px] opacity-40 uppercase tracking-widest mt-1">Verified Patron</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <button onClick={prev} className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
