import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Phone, Mail, MapPin, Globe } from 'lucide-react';

// Menambahkan definisi tipe untuk window agar TypeScript tidak error saat memanggil google translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

interface HeaderProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isContactOpen, setIsContactOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN'); // State untuk bahasa saat ini

  useEffect(() => {
    // 1. Cek cookie saat ini untuk menentukan label tombol (EN atau ID)
    const cookies = document.cookie.split(';');
    const googtrans = cookies.find(c => c.trim().startsWith('googtrans='));
    if (googtrans && googtrans.includes('/en/id')) {
      setLang('ID');
    } else {
      setLang('EN');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Inject Google Translate Script
    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,id', // Hanya Inggris dan Indonesia
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, 
        }, 'google_translate_element');
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk mengubah bahasa
  const toggleLanguage = () => {
    let newLang = '/en/en'; // Default ke Inggris
    if (lang === 'EN') {
      newLang = '/en/id'; // Ubah ke Indonesia
    }

    // Set cookie Google Translate
    document.cookie = `googtrans=${newLang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=${newLang}; path=/`; // Fallback untuk localhost

    // Reload halaman untuk menerapkan terjemahan
    window.location.reload();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonClass = `
    group relative px-2 py-1 md:px-3 md:py-1.5 rounded-sm 
    text-[9px] md:text-[10px] font-bold uppercase 
    tracking-tight md:tracking-[0.1em] transition-all duration-300 border whitespace-nowrap shadow-none
    ${scrolled 
        ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white' 
        : 'border-white/20 text-white hover:bg-white hover:text-green-600 backdrop-blur-sm bg-white/5'}
  `;

  return (
    <>
      {/* Elemen tersembunyi untuk Google Translate Widget */}
      <div id="google_translate_element" className="hidden fixed bottom-0 right-0 z-0"></div>

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md py-2 md:py-3 border-stone-200 shadow-sm' 
            : 'bg-transparent py-2 md:py-6 border-transparent'
        }`}
      >
        <div className="w-full pl-4 md:pl-12 pr-2 md:pr-6 flex justify-between items-center">
          
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 md:gap-4 group shrink-0 text-left">
              <img 
                src="/images/logo.png" 
                alt="BKK Logo" 
                className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                  <h1 className={`text-xl md:text-3xl font-serif font-bold leading-none tracking-wide transition-colors duration-300 ${scrolled ? 'text-green-700' : 'text-white'}`}>
                      BKK
                  </h1>
                  <p className="text-[6px] md:text-[8px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mt-0.5 md:mt-1 text-red-600 transition-colors duration-300 whitespace-nowrap">
                      PT. Bintang Kiat Kemuliaan
                  </p>
              </div>
          </button>

          <nav className="flex items-center gap-1 md:gap-2 justify-end">
              
              {/* TOMBOL TRANSLATE (TANPA SHADOW & OTOMATIS TRANSLATE) */}
              <button 
                onClick={toggleLanguage}
                className={`${buttonClass} flex items-center gap-1 mr-1 shadow-none`} // shadow-none ditambahkan eksplisit
                title={lang === 'EN' ? "Translate to Indonesian" : "Translate to English"}
              >
                  <Globe size={12} className={scrolled ? 'text-green-600 group-hover:text-white' : 'text-white group-hover:text-green-600'} />
                  <span>{lang}</span>
              </button>

              <button onClick={() => scrollToSection('about')} className={buttonClass}>About Us</button>
              <button onClick={() => scrollToSection('global')} className={buttonClass}>Global Reach</button>
              <button onClick={() => scrollToSection('catalogue')} className={buttonClass}>Product</button>
              
              <button onClick={() => setIsContactOpen(true)} className={buttonClass}>
                  Contact
              </button>
          </nav>

        </div>
      </header>
      
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsContactOpen(false)}></div>
            <div className="relative bg-white border border-stone-200 rounded-sm shadow-2xl max-w-lg w-full p-8 md:p-10 animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
               <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 transition-colors"><X size={24} /></button>
               
               <div className="text-center mb-6">
                  <h2 className="text-3xl font-serif text-green-700 mb-2">Get in Touch</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">We'd love to hear from you</p>
               </div>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Phone className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Phone / WhatsApp</h4>
                          <a href="tel:+62226016306" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 22 6016 306</a>
                          <a href="tel:+628176878166" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 817 687 8166</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Mail className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Emails</h4>
                          <a href="mailto:info@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">info@bkkemuliaan.com</a>
                          <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">Sales-marketing.2@bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Globe className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Website</h4>
                          <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm hover:text-red-600 transition-colors">www.bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <MapPin className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Our Locations</h4>
                          <div className="mb-4">
                            <strong className="text-stone-500 text-[10px] uppercase tracking-wide block mb-1">Main Office:</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Sawit+Darangdan+No.+3,+Purwakarta,+West+Java+41163+-+Indonesia" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm leading-relaxed hover:text-red-600 transition-colors block">Jl. Sawit Darangdan No. 3, Purwakarta, West Java 41163 - Indonesia</a>
                          </div>
                          <div>
                            <strong className="text-stone-500 text-[10px] uppercase tracking-wide block mb-1">Operational Warehouse:</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Husein+Sastranegara+Airport,+Cargo+Park+C.49+Jl.+Padjajaran+No.+156,+Bandung,+West+Java+40174" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm leading-relaxed hover:text-red-600 transition-colors block">Husein Sastranegara Airport, Cargo Park C.49 Jl. Padjajaran No. 156, Bandung, West Java 40174</a>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-stone-200 text-center">
                  <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500">
                      <img src="/images/logo.png" alt="BKK Logo" className="w-12 h-12 object-contain mb-3" />
                      <h3 className="text-xl font-serif text-green-700 tracking-[0.2em] uppercase">BKK</h3>
                      <p className="text-[9px] font-medium tracking-[0.3em] uppercase text-stone-500 mt-1">PT. Bintang Kiat Kemuliaan</p>
                  </div>
               </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;