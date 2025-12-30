import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail, Building2, Plane, Info, Map, Package, Mail as MailIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Ikon WhatsApp (SVG) untuk tampilan yang konsisten dengan Footer
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    { id: 'about', label: t.nav.about, icon: Info },
    { id: 'global', label: t.nav.global, icon: Map },
    { id: 'catalogue', label: t.nav.product, icon: Package },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-md py-2 md:py-3 shadow-sm border-stone-200/50' 
            : 'bg-transparent py-3 md:py-5 border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-2 md:px-8">
          <div className="flex justify-between items-center">
            
            {/* 1. LOGO SECTION (KIRI) */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0 relative z-[70]">
               <img 
                  src="/images/logo.png" 
                  alt="BKK Logo" 
                  className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-md" 
               />
               <div className="flex flex-col">
                  <h1 className={`font-serif text-lg md:text-2xl font-bold tracking-widest leading-none ${isScrolled || isMobileMenuOpen ? 'text-green-800' : 'text-white'}`}>BKK</h1>
                  <p className={`text-[6px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] ${isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-stone-300'}`}>PT. Bintang Kiat Kemuliaan</p>
               </div>
            </div>

            {/* 2. DESKTOP NAVIGATION (TENGAH/KANAN) */}
            <nav className="hidden md:flex items-center gap-6 bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 relative z-[70]">
                <button 
                  onClick={toggleLanguage} 
                  className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest py-1 px-2 transition-all border-r border-white/20 pr-6 mr-2 ${isScrolled ? 'text-stone-600 hover:text-red-600' : 'text-white hover:text-red-300'}`}
                >
                  <Globe size={14} /> <span>{language}</span>
                </button>

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
            <div className="md:hidden flex items-center gap-2 relative z-[70]">
              <button 
                onClick={toggleLanguage} 
                className={`flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest py-1 px-2 rounded-full transition-all border ${isScrolled || isMobileMenuOpen ? 'border-stone-200 text-stone-600 hover:bg-stone-50' : 'border-white/20 text-white hover:bg-white/10'}`}
              >
                <Globe size={12} /> <span>{language}</span>
              </button>

              <button 
                className={`p-1 rounded-md transition-colors active:scale-95 ${isScrolled || isMobileMenuOpen ? 'text-green-900 bg-green-50' : 'text-white bg-white/10'}`} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER - ELEGANT & PROFESSIONAL */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'bg-black/30 backdrop-blur-sm' : 'pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-br from-white to-stone-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Menu - Menambahkan padding top yang lebih besar */}
          <div className="flex-1 px-6 pt-28 pb-8 overflow-y-auto">
            {/* Language Switcher - Diposisikan lebih turun */}
            <div className="mb-12 px-4 py-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl border border-green-200 shadow-sm">
                    <Globe size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-800 mb-1">Language</h3>
                    <p className="text-xs text-stone-600">Current: {language}</p>
                  </div>
                </div>
                <button 
                  onClick={toggleLanguage}
                  className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow"
                >
                  Switch
                </button>
              </div>
            </div>

            {/* Navigation Menu Items */}
            <nav className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button 
                    key={item.id} 
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-green-50 hover:border-green-100 border border-transparent transition-all duration-200 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg group-hover:from-green-200 group-hover:to-emerald-100 transition-colors">
                      <Icon size={18} className="text-green-700" />
                    </div>
                    <div className="text-left flex-1">
                      <span className="block text-sm font-medium text-stone-800 group-hover:text-green-700 transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-xs text-stone-500 mt-0.5">
                        {item.id === 'about' ? 'About our company' : 
                         item.id === 'global' ? 'Global reach & presence' : 
                         'Product catalogue'}
                      </span>
                    </div>
                    <div className="text-stone-300 group-hover:text-green-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </button>
                );
              })}
              
              {/* Contact Button */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg group mt-2"
              >
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <MailIcon size={18} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <span className="block text-sm font-semibold text-white">
                    {t.nav.contact}
                  </span>
                  <span className="block text-xs text-white/80 mt-0.5">
                    Get in touch with our team
                  </span>
                </div>
                <div className="text-white/60 group-hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </button>
            </nav>

            {/* Logo and Company Name Section */}
            <div className="mt-16 flex flex-col items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="BKK Logo" 
                className="w-16 h-16 object-contain mb-4" 
              />
              <div className="text-center">
                <h1 className="font-serif text-xl font-bold text-green-800">BKK</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mt-1">
                  PT. Bintang Kiat Kemuliaan
                </p>
              </div>
            </div>
          </div>

          {/* Footer - Hanya copyright */}
          <div className="px-6 py-4 border-t border-stone-100 bg-gradient-to-r from-green-50/50 to-white">
            <p className="text-center text-[10px] text-stone-400">
              © {new Date().getFullYear()} PT. Bintang Kiat Kemuliaan
            </p>
          </div>
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
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100">
                        {/* Office Phone Section */}
                        <div className="flex gap-4 mb-6">
                            <div className="p-2 bg-white text-green-600 shadow-sm rounded-full h-fit"><Phone size={18} /></div>
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:+62226016306" className="block text-stone-700 font-medium hover:text-red-600">+62 22 6016 306</a>
                            </div>
                        </div>

                        {/* WhatsApp Section with Custom Icon */}
                        <div className="flex gap-4 mb-6">
                            <div className="p-2 bg-white text-green-600 shadow-sm rounded-full h-fit"><WhatsAppIcon size={18} /></div>
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">WhatsApp</p>
                                <a href="https://wa.me/6285198782498" target="_blank" rel="noreferrer" className="block text-stone-700 font-medium hover:text-red-600">+62 851 9878 2498</a>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="flex gap-4">
                            <div className="p-2 bg-white text-green-600 shadow-sm rounded-full h-fit"><Mail size={18} /></div>
                            <div>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Emails</p>
                                <a href="mailto:info@bkkemuliaan.com" className="block text-stone-700 font-medium hover:text-red-600 break-all">info@bkkemuliaan.com</a>
                                <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="block text-stone-700 font-medium hover:text-red-600 break-all">Sales-marketing.2@bkkemuliaan.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-2 bg-stone-50 text-red-600 border border-stone-200 rounded-full h-fit"><Building2 size={18} /></div>
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-1">Main Office</h5>
                                <p className="text-sm text-stone-600">Husein Sastranegara Airport<br/>Cargo Park C.49 Jl. Padjajaran No. 156,<br/>Bandung, West Java 40174</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-2 bg-stone-50 text-red-600 border border-stone-200 rounded-full h-fit"><Plane size={18} /></div>
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-1">Operational Warehouse</h5>
                                <p className="text-sm text-stone-600">Jl. Sawit Darangdan No. 3, Purwakarta<br/>West Java 41163 - Indonesia</p>
                            </div>
                        </div>

                        {/* Branding Filler - Colored Version */}
                        <div className="flex flex-col items-center justify-center pt-6 mt-4 border-t border-stone-100">
                             <img src="/images/logo.png" alt="BKK Logo" className="w-10 h-10 object-contain mb-2" />
                             <div className="text-center">
                                <h4 className="font-serif text-lg font-bold text-green-800">BKK</h4>
                                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-stone-500">PT. Bintang Kiat Kemuliaan</p>
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