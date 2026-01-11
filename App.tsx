
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import { CONTENT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#1E2F23] selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Why Us Section - Updated to be lighter and cleaner */}
        <section className="bg-white py-32 overflow-hidden border-y border-[#1E2F23]/5">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1E2F23] mb-8 tracking-tight">Apa yang membuat Vanzul Mart berbeda?</h2>
                <p className="text-lg text-[#1A1A1A]/60 leading-relaxed font-light">
                  Kami memadukan efisiensi operasional kelas dunia dengan keramahan toko lingkungan. Setiap detail, mulai dari tata cahaya hingga kurasi produk, dirancang untuk kenyamanan maksimal Anda.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full lg:w-auto">
                <div className="space-y-2">
                  <div className="text-5xl font-heading font-bold text-[#1E2F23] tracking-tighter">100%</div>
                  <div className="text-[10px] text-[#1E2F23]/40 uppercase tracking-[0.2em] font-bold">Terjamin Higienis</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-heading font-bold text-[#1E2F23] tracking-tighter">New</div>
                  <div className="text-[10px] text-[#1E2F23]/40 uppercase tracking-[0.2em] font-bold">Konsep Retail</div>
                </div>
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <div className="text-5xl font-heading font-bold text-[#1E2F23] tracking-tighter">Daily</div>
                  <div className="text-[10px] text-[#1E2F23]/40 uppercase tracking-[0.2em] font-bold">Produk Segar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <About />

        {/* Location Section */}
        <section id="location" className="py-40 bg-[#F9F7F2]">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-24"
            >
              <span className="text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-[#1E2F23]/40 mb-4 block">Find Us</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1E2F23] mb-8 tracking-tight leading-none">{CONTENT.sections.location}</h2>
              <p className="text-xl text-[#1E2F23]/60 font-light">
                Saat ini kami sedang menyiapkan gerai pertama kami di pusat pemukiman Anda untuk kemudahan akses tanpa batas.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-video md:aspect-[21/7] bg-white rounded-[3rem] overflow-hidden border border-[#1E2F23]/5 relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8">
                   <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-16 h-16 bg-[#1E2F23] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     </svg>
                   </motion.div>
                   <h3 className="text-2xl font-heading font-bold text-[#1E2F23] mb-2">Lokasi Segera Diumumkan</h3>
                   <p className="text-[#1A1A1A]/40 font-light">Stay tuned untuk titik Google Maps resmi.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-white">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto bg-[#1E2F23] rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-heading font-bold text-[#F9F7F2] mb-10 tracking-tight leading-none">Jadilah Yang Pertama Tahu.</h2>
                <p className="text-[#F9F7F2]/60 mb-16 max-w-2xl mx-auto text-xl leading-relaxed font-light">
                  Berlangganan info eksklusif untuk warga sekitar tentang tanggal pembukaan dan promosi perdana.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Alamat Email Anda" 
                    className="flex-1 px-10 py-6 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#F9F7F2]/20 transition-all bg-[#F9F7F2]/10 text-[#F9F7F2] placeholder:text-[#F9F7F2]/30 text-lg"
                  />
                  <button className="px-12 py-6 bg-[#F9F7F2] text-[#1E2F23] rounded-full font-heading font-bold hover:opacity-90 transition-all text-sm uppercase tracking-widest">
                    Notify Me
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
