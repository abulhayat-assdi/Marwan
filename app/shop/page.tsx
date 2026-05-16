"use client";

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../../src/data/products';
import { ProductCard } from '../../src/components/ProductCard';

const ShopContent = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-4">The Collection</h1>
          <p className="text-sm opacity-40 uppercase tracking-widest font-bold">Showing {filteredProducts.length} Results</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64 group">
            <input 
              type="text" 
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100" />
          </div>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Filter Sidebar overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mb-12 p-8 glass rounded-sm grid grid-cols-2 md:grid-cols-5 gap-8 relative"
          >
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity"
            >
              <X size={18} />
            </button>
            <div className="col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-40">Categories</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat ? 'bg-luxury-gold text-black' : 'bg-white/5 border border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-40 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto opacity-20">
            <Search size={32} />
          </div>
          <p className="text-xl font-light opacity-60">No products found for the selected criteria.</p>
          <button 
            onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
            className="text-xs uppercase tracking-widest font-bold text-luxury-gold border-b border-luxury-gold/50 pb-1"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default function Shop() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center opacity-40">Loading Collection...</div>}>
      <ShopContent />
    </Suspense>
  );
}
