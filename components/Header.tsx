import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, ArrowRight, Phone, Mail, Sprout } from 'lucide-react';

const Header: React.FC = () => {
  // State untuk menangani scroll
  const [isScrolled, setIsScrolled] = useState(() => {
    return typeof window !== 'undefined' ? window.scrollY > 20 : false;
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // PERBAIKAN: State isMounted untuk mencegah animasi glitch saat refresh
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Menandakan komponen sudah dimuat di browser
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Theme: Deep Green text on scroll, White on transparent
  const navClasses = isScrolled 
    ? 'bg-[#fdfbf7]/95 backdrop-blur-md py-4 shadow-sm text-green-950' 
    : 'bg-gradient-to-b from-green-950/70 to-transparent py-6 text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navClasses}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Left: Hamburger & Search */}
          <div className="flex items-center gap-6 md:gap-8 flex-1">
            <button 
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-[0.2em]">Menu</span>
            </button>
            <Search size={20} strokeWidth={1.5} className="hidden md:block cursor-pointer hover:text-orange-500 transition-colors" />
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <a href="#" className="text-center group flex flex-col items-center">
              <div className="flex items-center gap-2">
                 <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-widest uppercase group-hover:text-orange-500 transition-colors duration-500">BKK</h1>
              </div>
              <p className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-80 group-hover:tracking-[0.4em] transition-all text-center hidden sm:block">PT. Bintang Kiat Kemuliaan</p>
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors">
              <span>EN</span> <Globe size={14} />
            </div>
            <div className="hidden md:block h-4 w-[1px] bg-current opacity-30"></div>
            <button className={`hidden sm:flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm ${
              isScrolled 
                ? 'bg-green-900 text-white hover:bg-orange-600' 
                : 'bg-white text-green-900 hover:bg-orange-50'
            }`}>
              Contact Us <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-green-950/40 backdrop-blur-sm z-[90] transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)} 
      />
      
      {/* Mobile Menu Drawer (Left Aligned, Solid) */}
      {/* PERBAIKAN: Gunakan ternary operator pada 'duration' agar saat refresh (isMounted false) durasinya 0 (instan) */}
      <div className={`fixed inset-y-0 left-0 w-[85%] sm:w-[400px] bg-[#fdfbf7] z-[100] shadow-2xl transform transition-transform cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${isMounted ? 'duration-500' : 'duration-0'} ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-8 border-b border-stone-200 bg-orange-50/50">
          <div className="flex items-center gap-2 text-green-900">
             <Sprout size={20} />
             <span className="text-xs font-bold uppercase tracking-[0.2em]">BKK Menu</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="text-stone-400 hover:text-orange-600 transition-colors">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 flex flex-col p-8 space-y-8 overflow-y-auto scrollbar-hide">
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-4xl font-serif text-green-950 hover:text-orange-600 hover:translate-x-2 transition-all duration-300">About Us</a>
            <a href="#" className="text-4xl font-serif text-green-950 hover:text-orange-600 hover:translate-x-2 transition-all duration-300">Commodities</a>
            <a href="#" className="text-4xl font-serif text-green-950 hover:text-orange-600 hover:translate-x-2 transition-all duration-300">Global Reach</a>
            <a href="#" className="text-4xl font-serif text-green-950 hover:text-orange-600 hover:translate-x-2 transition-all duration-300">Sustainability</a>
            <a href="#" className="text-4xl font-serif text-green-950 hover:text-orange-600 hover:translate-x-2 transition-all duration-300">Contact</a>
          </nav>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100">
             <h4 className="font-serif text-xl text-green-900 mb-2">Seasonal Alert</h4>
             <p className="text-sm text-green-800/80 leading-relaxed">
               Mangosteen harvest season is approaching. Pre-book your containers now for priority shipping.
             </p>
          </div>
        </div>
        
        {/* Drawer Footer */}
        <div className="p-8 border-t border-stone-200 bg-white">
             <button className="w-full mb-8 py-4 bg-green-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors shadow-lg">
              Get Quotation
            </button>
             <div className="space-y-4 text-stone-500">
              <div className="flex items-center gap-4 text-sm group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone size={14} />
                </div>
                <span className="group-hover:text-orange-600 transition-colors">+62 22 6016 306</span>
              </div>
              <div className="flex items-center gap-4 text-sm group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                   <Mail size={14} />
                </div>
                <span className="group-hover:text-orange-600 transition-colors">info@bkkemuliaan.com</span>
              </div>
             </div>
        </div>
      </div>
    </>
  );
};

export default Header;