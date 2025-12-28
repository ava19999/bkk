import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MangosteenCard from './components/MangosteenCard';
import BookingWidget from './components/BookingWidget';
// Import komponen section baru dari folder components
import HistorySection from './components/HistorySection';
import VisionSection from './components/VisionSection';
import ValuesSection from './components/ValuesSection';
import StatsSection from './components/StatsSection';
import ProductSection from './components/ProductSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Animasi Reveal saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-stone-600 text-enhanced">
      
      {/* GLOBAL CSS STYLES */}
      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 50s linear infinite; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; }
        
        /* Heading Shadows */
        .text-enhanced h1, 
        .text-enhanced h2, 
        .text-enhanced h3, 
        .text-enhanced h4, 
        .text-enhanced h5, 
        .text-enhanced h6 {
           text-shadow: 0 1px 3px rgba(0,0,0,0.3) !important;
        }

        /* Clean styles for other elements */
        /* PERBAIKAN: Menghapus !important agar style di komponen lain (seperti Hero) bisa bekerja */
        .text-enhanced p, 
        .text-enhanced span, 
        .text-enhanced div, 
        .text-enhanced a, 
        .text-enhanced li, 
        .text-enhanced button, 
        .text-enhanced input, 
        .text-enhanced label,
        .text-enhanced svg {
           text-shadow: none; 
           -webkit-text-stroke: 0;
        }
      `}</style>

      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>

      <Header isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
      
      <main className="relative z-10">
        <div id="home"><Hero /></div>
        <div><BookingWidget /></div>
        <div id="popular" className="scroll-mt-24"><MangosteenCard /></div>
        
        {/* Sections */}
        <HistorySection />
        <VisionSection />
        <ValuesSection />
        <StatsSection />
        <ProductSection />
        <PartnerSection setIsContactOpen={setIsContactOpen} />
      </main>

      <Footer setIsContactOpen={setIsContactOpen} />
    </div>
  );
};

export default App;