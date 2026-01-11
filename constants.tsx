
import React from 'react';

export const COLORS = {
  primary: '#1E2F23', // Deep Forest
  secondary: '#DDE2D5', // Soft Sage
  accent: '#C5A059',  // Muted Gold
  bg: '#F9F7F2',      // Warm Oat
  text: '#1A1A1A',    // Deep Charcoal
  muted: '#7A7A7A'
};

export const CONTENT = {
  hero: {
    headline: "Kebutuhan Harian, Dikurasi Dengan Hati.",
    subheadline: "Vanzul Mart segera hadir membawakan standar baru dalam berbelanja kebutuhan harian. Modern, segar, dan lebih dekat dengan Anda."
  },
  sections: {
    services: "Standar Layanan Kami",
    about: "Filosofi Vanzul Mart",
    location: "Kunjungi Gerai Kami",
    cta: "Tetap Terhubung"
  }
};

export const SERVICES = [
  {
    id: 'grocery',
    title: 'Kurasi Bahan Pokok',
    description: 'Bukan sekadar sembako. Kami memilih setiap produk dengan standar kualitas terbaik untuk keluarga Anda.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 'fresh',
    title: 'Kesegaran Terjaga',
    description: 'Rantai pasok yang efisien memastikan buah dan sayuran sampai ke tangan Anda dalam kondisi puncak.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'digital',
    title: 'Digital Terintegrasi',
    description: 'Sistem pembayaran nirsentuh dan layanan digital yang dirancang untuk menghemat waktu berharga Anda.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'snacks',
    title: 'Daily Essentials',
    description: 'Pilihan camilan dan minuman dari merk lokal hingga internasional untuk menemani hari Anda.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];
