"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Minus, Plus, Heart, Share2, ShieldCheck, Zap, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../../../src/data/products';
import { ProductCard } from '../../../src/components/ProductCard';
import { useCart } from '../../../src/context/CartContext';

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = useMemo(() => 
    PRODUCTS.find(p => p.slug === params.slug), 
  [params.slug]);

  const [selectedSize, setSelectedSize] = useState(product?.sizeOptions[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colorOptions[0].name || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <p className="text-xl font-light opacity-60">Product not found.</p>
        <button onClick={() => router.push('/shop')} className="text-luxury-gold border-b border-luxury-gold uppercase tracking-widest text-xs font-bold pb-1">
          Back to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor);
    router.push('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 mb-12">
        <button onClick={() => router.push('/')} className="hover:text-white">Home</button>
        <ChevronRight size={12} />
        <button onClick={() => router.push('/shop')} className="hover:text-white">Shop</button>
        <ChevronRight size={12} />
        <span className="text-white">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Product Images */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-white/5">
            <Image 
              src={product.image} 
              alt={product.title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="aspect-[3/4] relative opacity-40 hover:opacity-100 transition-opacity cursor-pointer rounded-sm overflow-hidden bg-white/5">
                <Image src={product.image} alt="Detail" fill className="object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h1 className="text-5xl font-display uppercase tracking-tighter leading-none">{product.title}</h1>
              <p className="text-3xl font-display text-luxury-gold">${product.price}</p>
            </div>
            <p className="text-sm opacity-60 leading-relaxed font-light max-w-lg">{product.description}</p>
          </div>

          <div className="space-y-10">
            {/* Color Selector */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Color: {selectedColor}</h4>
              <div className="flex gap-4">
                {product.colorOptions.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 ${selectedColor === color.name ? 'border-luxury-gold' : 'border-transparent'}`}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Select Size</h4>
              <div className="flex flex-wrap gap-4">
                {product.sizeOptions.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] h-12 flex items-center justify-center px-4 rounded-sm border text-[10px] font-bold tracking-widest transition-all ${
                      selectedSize === size ? 'border-luxury-gold bg-luxury-gold text-black' : 'border-white/10 hover:border-white opacity-60'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Quantity</h4>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-white/10 rounded-sm">
                  <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="w-12 h-12 flex items-center justify-center hover:bg-white/5"><Minus size={14} /></button>
                  <span className="w-12 h-12 flex items-center justify-center text-xs font-bold border-x border-white/10">{quantity}</span>
                  <button onClick={() => setQuantity(q => q+1)} className="w-12 h-12 flex items-center justify-center hover:bg-white/5"><Plus size={14} /></button>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 border border-white/10 rounded-sm hover:border-luxury-gold transition-colors"><Heart size={18} /></button>
                  <button className="p-3 border border-white/10 rounded-sm hover:border-luxury-gold transition-colors"><Share2 size={18} /></button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white text-black py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-luxury-gold transition-all group"
              >
                <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 border border-white/10 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck size={24} className="text-luxury-gold/60" />
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">2 Year Warranty</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Zap size={24} className="text-luxury-gold/60" />
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Express Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <RotateCcw size={24} className="text-luxury-gold/60" />
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Simple Returns</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40 border-t border-white/10 pt-20">
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold">Archive</h4>
            <h2 className="text-4xl md:text-5xl font-display leading-none">Related Pieces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
