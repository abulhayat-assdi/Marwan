"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/src/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-white/5 rounded-sm relative">
          <Image 
            src={product.image} 
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-75"
            referrerPolicy="no-referrer"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full z-10">
              New Arrival
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-white text-black p-4 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
              <ArrowRight size={20} />
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
              {product.category}
            </p>
            <h3 className="text-base font-display font-medium tracking-tight uppercase group-hover:text-luxury-gold transition-colors">
              {product.title}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-lg font-display text-luxury-gold font-medium">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
