
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F9F7F2]/80 backdrop-blur-xl border-b border-[#1E2F23]/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#1E2F23] rounded-full flex items-center justify-center">
            <span className="text-white font-heading font-semibold text-lg">V</span>
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-[#1E2F23]">Vanzul Mart</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-heading font-medium uppercase tracking-widest text-[#1E2F23]/60">
          <a href="#about" className="hover:text-[#1E2F23] transition-colors">Tentang</a>
          <a href="#services" className="hover:text-[#1E2F23] transition-colors">Layanan</a>
          <a href="#location" className="hover:text-[#1E2F23] transition-colors">Lokasi</a>
          <button className="bg-[#1E2F23] text-[#F9F7F2] px-6 py-2.5 rounded-full hover:opacity-90 transition-all text-xs">
            Soon
          </button>
        </nav>

        <button className="md:hidden text-[#1E2F23]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
