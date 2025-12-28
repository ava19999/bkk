import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isContactOpen, setIsContactOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
         element.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Delay sedikit agar menu menutup dulu
    }
  };

  const menuItems = [
    { id: 'about', label: t.nav.about },
    { id: 'global', label: t.nav.global },
    { id: 'catalogue', label: t.nav.product },
    // Contact ditangani khusus
  ];

  return (
    <>
      {/* --- HEADER UTAMA --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-stone-200/50' 
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            {/* 1. LOGO SECTION (KIRI) */}
            <div className="flex items-center gap-3 shrink-0 relative z-[70]">
               <img 
                 src="/images/logo.png" 
                 alt="BKK Logo" 
                 className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md" 
               />
               <div className="flex flex-col">
                  <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-widest leading-none ${isScrolled || isMobileMenuOpen ? 'text-green-800' : 'text-white'}`}>
                    BKK
                  </h1>
                  <p className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] ${isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-stone-300'}`}>
                    PT. Bintang Kiat Kemuliaan
                  </p>
               </div>
            </div>

            {/* 2. DESKTOP NAVIGATION (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center gap-8 bg-black/10 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
              {menuItems.map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`}>
                    {item.label}
                  </button>
              ))}
              <button onClick={() => setIsContactOpen(true)} className={`text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`}>
                {t.nav.contact}
              </button>
            </nav>

            {/* 3. RIGHT ACTIONS (Language & Hamburger) */}
            <div className="flex items-center gap-3 md:gap-6 relative z-[70]">
              
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-3 md:px-4 rounded-full transition-all border ${
                  isScrolled || isMobileMenuOpen
                    ? 'border-stone-200 text-stone-600 hover:bg-stone-50' 
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                <Globe size={14} />
                <span>{language}</span>
              </button>

              {/* Hamburger Button */}
              <button 
                className={`md:hidden p-2 rounded-full transition-colors active:scale-95 ${isScrolled || isMobileMenuOpen ? 'text-green-900 bg-green-50' : 'text-white bg-white/10'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU DRAWER (SLIDE DARI KANAN) --- */}
      <div 
        className={`fixed inset-0 z-50 md:hidden bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)} // Klik luar untuk tutup
      >
        {/* Panel Menu Putih */}
        <div 
            className={`absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-[#051f15] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col pt-24 pb-8 px-8 border-l border-white/5 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()} // Mencegah klik dalam panel menutup menu
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2 relative z-10 mb-auto">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block opacity-80">Menu</span>
               
               {menuItems.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="group flex items-center justify-between py-4 border-b border-white/10 text-left"
                    style={{ transitionDelay: `${index * 50}ms` }} // Staggered animation effect
                  >
                      <span className="text-2xl font-serif text-white group-hover:text-red-400 transition-colors">{item.label}</span>
                      <ArrowRight size={16} className="text-stone-500 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                  </button>
               ))}
               
               <button 
                  onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }}
                  className="group flex items-center justify-between py-4 border-b border-white/10 text-left"
               >
                  <span className="text-2xl font-serif text-white group-hover:text-red-400 transition-colors">{t.nav.contact}</span>
                  <ArrowRight size={16} className="text-stone-500 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
               </button>
            </nav>

            {/* Footer Info di Menu Mobile */}
            <div className="relative z-10 space-y-6">
                <div className="h-px w-full bg-white/10"></div>
                <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Quick Contact</p>
                    <a href="https://wa.me/628176878166" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
                        <Phone size={16} className="text-green-500" />
                        <span className="text-sm font-light">+62 817 687 8166</span>
                    </a>
                    <a href="mailto:info@bkkemuliaan.com" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
                        <Mail size={16} className="text-green-500" />
                        <span className="text-sm font-light">info@bkkemuliaan.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-stone-300">
                        <MapPin size={16} className="text-green-500 mt-1 shrink-0" />
                        <span className="text-xs font-light leading-relaxed">Jl. Sawit Darangdan No. 3, Purwakarta, Indonesia</span>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* --- CONTACT FORM MODAL --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
              <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors z-10">
                 <X size={20} className="text-stone-500" />
              </button>
              
              <div className="p-8 md:p-10">
                 <div className="text-center mb-8">
                    <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em]">{t.contact.title}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700 mt-2">{t.contact.subtitle}</h3>
                 </div>

                 <div className="space-y-6">
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.contact.phone}</label>
                       <div className="space-y-2">
                          <a href="https://wa.me/628176878166" target="_blank" rel="noreferrer" className="block p-3 bg-stone-50 rounded-sm hover:bg-green-50 hover:text-green-700 transition-colors text-sm font-medium border border-stone-100">
                             +62 817 687 8166 (WhatsApp)
                          </a>
                          <a href="tel:+62226016306" className="block p-3 bg-stone-50 rounded-sm hover:bg-green-50 hover:text-green-700 transition-colors text-sm font-medium border border-stone-100">
                             +62 22 6016 306 (Office)
                          </a>
                       </div>
                    </div>

                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.contact.email}</label>
                       <a href="mailto:info@bkkemuliaan.com" className="block p-3 bg-stone-50 rounded-sm hover:bg-green-50 hover:text-green-700 transition-colors text-sm font-medium border border-stone-100 mb-2">
                          info@bkkemuliaan.com
                       </a>
                       <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="block p-3 bg-stone-50 rounded-sm hover:bg-green-50 hover:text-green-700 transition-colors text-sm font-medium border border-stone-100">
                          Sales-marketing.2@bkkemuliaan.com
                       </a>
                    </div>
                    
                    <div className="pt-4 border-t border-stone-100 text-center">
                        <p className="text-xs text-stone-400 font-light">
                           Operational Hours: Mon - Fri, 09:00 - 17:00 WIB
                        </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;