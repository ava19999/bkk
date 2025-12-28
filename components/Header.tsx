import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail, Building2, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isContactOpen, setIsContactOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isContactOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
         element.scrollIntoView({ behavior: 'smooth' });
      }, window.innerWidth < 768 ? 300 : 0);
    }
  };

  const menuItems = [
    { id: 'about', label: t.nav.about },
    { id: 'global', label: t.nav.global },
    { id: 'catalogue', label: t.nav.product },
  ];

  return (
    <>
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
            <div className="flex items-center gap-2 md:gap-4 shrink-0 relative z-[70]">
               <img src="/images/logo.png" alt="BKK Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md" />
               <div className="flex flex-col">
                  <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-widest leading-none ${isScrolled || isMobileMenuOpen ? 'text-green-800' : 'text-white'}`}>BKK</h1>
                  <p className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] ${isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-stone-300'}`}>PT. Bintang Kiat Kemuliaan</p>
               </div>
            </div>

            {/* 2. DESKTOP NAVIGATION (TENGAH/KANAN) - "NYAMBUNG" */}
            <nav className="hidden md:flex items-center gap-6 bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 relative z-[70]">
                
                {/* Tombol Bahasa (Desktop) - Masuk di dalam Nav */}
                <button 
                  onClick={toggleLanguage} 
                  className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest py-1 px-2 transition-all border-r border-white/20 pr-6 mr-2 ${isScrolled ? 'text-stone-600 hover:text-red-600' : 'text-white hover:text-red-300'}`}
                >
                  <Globe size={14} /> <span>{language}</span>
                </button>

                {/* Menu Items */}
                {menuItems.map((item) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`}>
                      {item.label}
                    </button>
                ))}
                <button onClick={() => setIsContactOpen(true)} className={`text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`}>
                  {t.nav.contact}
                </button>
            </nav>

            {/* 3. MOBILE ONLY ACTIONS (KANAN) */}
            {/* Hanya muncul di layar kecil (md:hidden) */}
            <div className="md:hidden flex items-center gap-3 relative z-[70]">
              
              {/* Language Switcher (Mobile) */}
              <button 
                onClick={toggleLanguage} 
                className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest py-2 px-3 rounded-full transition-all border ${isScrolled || isMobileMenuOpen ? 'border-stone-200 text-stone-600 hover:bg-stone-50' : 'border-white/20 text-white hover:bg-white/10'}`}
              >
                <Globe size={14} /> <span>{language}</span>
              </button>

              {/* Hamburger */}
              <button 
                className={`p-2 rounded-full transition-colors active:scale-95 ${isScrolled || isMobileMenuOpen ? 'text-green-900 bg-green-50' : 'text-white bg-white/10'}`} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 z-50 md:hidden bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-[#051f15] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col pt-24 pb-8 px-8 border-l border-white/5 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>
            <nav className="flex flex-col space-y-4 relative z-10 mb-auto">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2 block opacity-80">Menu</span>
               {menuItems.map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-xl font-serif text-white hover:text-red-400 transition-colors text-left border-b border-white/10 pb-3">
                      {item.label}
                  </button>
               ))}
               <button onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }} className="text-xl font-serif text-white hover:text-red-400 transition-colors text-left border-b border-white/10 pb-3">
                  {t.nav.contact}
               </button>
            </nav>
        </div>
      </div>

      {/* CONTACT FORM MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
              <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors z-20"><X size={20} /></button>
              
              <div className="grid md:grid-cols-1 p-8 md:p-10 gap-8">
                 <div className="text-center">
                    <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] border border-red-100 px-3 py-1 rounded-full">{t.contact.title}</span>
                    <h3 className="text-3xl font-serif text-green-700 mt-4">{t.contact.subtitle}</h3>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100">
                        <div className="flex gap-4 mb-6">
                            <div className="p-2 bg-white text-green-600 shadow-sm rounded-full h-fit"><Phone size={18} /></div>
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                                <a href="tel:+62226016306" className="block text-stone-700 font-medium hover:text-red-600">+62 22 6016 306</a>
                                <a href="https://wa.me/628176878166" className="block text-stone-700 font-medium hover:text-red-600">+62 817 687 8166</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-2 bg-white text-green-600 shadow-sm rounded-full h-fit"><Mail size={18} /></div>
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Emails</p>
                                <a href="mailto:info@bkkemuliaan.com" className="block text-stone-700 font-medium hover:text-red-600 break-all">info@bkkemuliaan.com</a>
                                <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="block text-stone-700 font-medium hover:text-red-600 break-all">Sales-marketing.2@bkkemuliaan.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-2 bg-stone-50 text-red-600 border border-stone-200 rounded-full h-fit"><Building2 size={18} /></div>
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-1">Main Office</h5>
                                <p className="text-sm text-stone-600">Jl. Sawit Darangdan No. 3, Purwakarta<br/>West Java 41163 - Indonesia</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-2 bg-stone-50 text-red-600 border border-stone-200 rounded-full h-fit"><Plane size={18} /></div>
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-1">Operational Warehouse</h5>
                                <p className="text-sm text-stone-600">Husein Sastranegara Airport<br/>Cargo Park C.49 Jl. Padjajaran No. 156,<br/>Bandung, West Java 40174</p>
                            </div>
                        </div>
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