
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2F23] text-[#F9F7F2] pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-8 h-8 bg-[#F9F7F2] rounded-full flex items-center justify-center">
                <span className="text-[#1E2F23] font-heading font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-heading font-bold tracking-tight">Vanzul Mart</span>
            </div>
            <p className="text-[#F9F7F2]/60 text-sm leading-relaxed mb-10 font-light">
              Standar baru retail modern untuk kebutuhan harian Anda yang berkualitas dan terpercaya.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] opacity-40">Navigasi</h4>
            <ul className="space-y-6 text-[#F9F7F2]/70 text-sm font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan Retail</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Lokasi Gerai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] opacity-40">Layanan</h4>
            <ul className="space-y-6 text-[#F9F7F2]/70 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Bahan Pokok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fresh Produce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kemitraan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] opacity-40">Kontak</h4>
            <p className="text-[#F9F7F2]/70 text-sm leading-relaxed mb-6 font-light">
              Jl. Modern Retail No. 123,<br />
              Jakarta Selatan, Indonesia
            </p>
            <p className="text-[#F9F7F2]/70 text-sm font-light italic">
              hello@vanzulmart.com
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F9F7F2]/30 text-[10px] uppercase tracking-widest font-bold">
            © 2024 Vanzul Mart Retail Group.
          </p>
          <div className="flex space-x-10 text-[#F9F7F2]/30 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
