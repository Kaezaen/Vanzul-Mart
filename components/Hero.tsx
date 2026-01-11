
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2400" 
          alt="Retail Concept" 
          className="w-full h-full object-cover grayscale-[20%] opacity-40 scale-105"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 mb-10 text-[11px] font-heading font-bold uppercase tracking-[0.4em] text-[#1E2F23]/60 border-b border-[#1E2F23]/20"
          >
            Coming to your neighborhood
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-[#1E2F23] leading-[0.95] mb-12 tracking-tight text-balanced">
            {CONTENT.hero.headline}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl text-[#1E2F23] max-w-2xl mx-auto mb-16 leading-relaxed font-light px-4"
          >
            {CONTENT.hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-12 py-5 bg-[#1E2F23] text-[#F9F7F2] rounded-full font-heading font-semibold hover:opacity-90 transition-all text-sm tracking-widest uppercase">
              Hubungi Kami
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-[#1E2F23]/20 text-[#1E2F23] rounded-full font-heading font-semibold hover:bg-[#1E2F23] hover:text-[#F9F7F2] transition-all text-sm tracking-widest uppercase">
              Jelajahi
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Decoration */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-[1px] h-24 bg-[#1E2F23]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
