"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Twitter } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass p-10 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Subtle line decor */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-40" />
          
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-4xl font-display uppercase tracking-tight">Create Account</h1>
            <p className="text-sm opacity-40 font-light">Join the Marwan inner circle for early access and projects.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-1">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" />
                <input 
                  type="text" 
                  placeholder="Alexander Thorne"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-1">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" />
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-1">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-luxury-gold transition-all"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-pink-600/20"
              >
                Sign Up
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

          <div className="mt-10 flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-20">Or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <Twitter size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Twitter</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <Github size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">GitHub</span>
            </button>
          </div>

          <p className="text-center mt-12 text-[10px] opacity-40 uppercase tracking-widest">
            Already have an account? <Link href="#" className="font-bold text-white hover:text-luxury-gold transition-colors">Log In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
