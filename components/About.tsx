
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1200" 
                alt="Vanzul Philosophy" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 p-10 bg-[#1E2F23] text-[#F9F7F2] rounded-[2.5rem] shadow-2xl hidden md:block">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] opacity-60 mb-2 block">Est. 2026</span>
              <p className="text-2xl font-heading font-bold tracking-tight">Vanzul Mart Modern Retail</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-[#1E2F23]/40 mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1E2F23] mb-12 tracking-tight leading-[1.1]">
              {CONTENT.sections.about}
            </h2>
            <div className="space-y-10 text-lg text-[#1A1A1A]/70 font-light leading-relaxed">
              <p>
                Kami percaya belanja harian harus menjadi pengalaman yang menyenangkan, bukan sekadar rutinitas. Vanzul Mart menggabungkan kemudahan teknologi dengan kurasi produk manual yang teliti.
              </p>
              <p>
                Filosofi kami sederhana: Kedekatan adalah kenyamanan. Itulah sebabnya setiap jengkal gerai kami didesain untuk menyatu dengan komunitas lokal, memberikan akses mudah ke produk segar setiap harinya.
              </p>
              
              <div className="flex gap-12 pt-6">
                <div>
                  <div className="text-4xl font-heading font-bold text-[#1E2F23] mb-1 tracking-tight">Integritas</div>
                  <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Layanan Kami</p>
                </div>
                <div className="w-[1px] h-16 bg-[#1E2F23]/10" />
                <div>
                  <div className="text-4xl font-heading font-bold text-[#1E2F23] mb-1 tracking-tight">Kualitas</div>
                  <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Produk Kami</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
