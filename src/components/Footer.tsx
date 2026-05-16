"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pt-20 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-display font-bold tracking-[0.4em] uppercase mb-6">
            MARWAN
          </h2>
          <p className="text-xs uppercase tracking-widest opacity-40 leading-relaxed max-w-xs font-bold">
            Curating functional artifacts for the modern pioneer. Excellence in every detail, timeless in every form.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-40">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">New Arrivals</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Best Sellers</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Limited Archive</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-40">Service</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Shipping & Returns</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Contact Us</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-40">Newsletter</h4>
          <p className="text-sm opacity-60 mb-4">Join our inner circle for exclusive updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm flex-1 focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <button className="bg-white text-black px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-opacity">
              Join
            </button>
          </div>
          <div className="flex gap-4 mt-8 opacity-40">
            <Instagram size={20} className="hover:opacity-100 transition-opacity cursor-pointer" />
            <Twitter size={20} className="hover:opacity-100 transition-opacity cursor-pointer" />
            <Facebook size={20} className="hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest opacity-40">© 2026 MARWAN Archive. All Rights Reserved.</p>
        <p className="text-[10px] uppercase tracking-widest opacity-40">Designed for the future.</p>
      </div>
    </footer>
  );
};
