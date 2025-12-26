import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Phone, Mail, MapPin, Globe } from 'lucide-react';

interface HeaderProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isContactOpen, setIsContactOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonClass = `
    group relative px-3 py-1.5 rounded-sm text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border
    ${scrolled 
        ? 'border-white text-white hover:bg-white hover:text-green-950' 
        : 'border-white/20 text-white hover:bg-white hover:text-green-950 backdrop-blur-sm bg-white/5'}
  `;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#041C12]/95 backdrop-blur-md py-3 border-white/10 shadow-sm' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group shrink-0 text-left">
              <img 
                src="/images/logo.png" 
                alt="BKK Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-serif font-bold leading-none tracking-wide text-white transition-colors duration-300">
                      BKK
                  </h1>
                  <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
                      scrolled ? 'text-red-500' : 'text-red-400 group-hover:text-white'
                  }`}>
                      PT. Bintang Kiat Kemuliaan
                  </p>
              </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5">
              <button onClick={() => scrollToSection('about')} className={buttonClass}>About Us</button>
              <button onClick={() => scrollToSection('global')} className={buttonClass}>Global Reach</button>
              <button onClick={() => scrollToSection('catalogue')} className={buttonClass}>Product</button>
              <button onClick={() => setIsContactOpen(true)} className={`${buttonClass} pl-4 pr-3 flex items-center gap-2 ml-1`}>
                  <span>Contact</span>
                  <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </button>
          </nav>
          
          <button className="lg:hidden text-white" onClick={() => setIsContactOpen(true)}>
             <div className="space-y-1.5 cursor-pointer p-2">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-4 h-0.5 bg-current ml-auto"></div>
             </div>
          </button>

        </div>
      </header>
      
      {/* --- MODAL CONTACT US --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            {/* Backdrop click to close */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsContactOpen(false)}></div>
            
            <div className="relative bg-[#041C12] border border-white/10 rounded-sm shadow-2xl max-w-lg w-full p-8 md:p-10 animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
               
               {/* Tombol X (Close) tetap ada di pojok kanan atas untuk menutup */}
               <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 transition-colors"><X size={24} /></button>
               
               <div className="text-center mb-6">
                  <h2 className="text-3xl font-serif text-white mb-2">Get in Touch</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">We'd love to hear from you</p>
               </div>
               
               <div className="space-y-4">
                  {/* PHONE - Click to Call */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 group hover:border-white/20 transition-colors">
                      <Phone className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Phone / WhatsApp</h4>
                          <a href="tel:+62226016306" className="text-stone-300 font-light text-sm hover:text-red-400 block transition-colors">+62 22 6016 306</a>
                          <a href="tel:+628176878166" className="text-stone-300 font-light text-sm hover:text-red-400 block transition-colors">+62 817 687 8166</a>
                      </div>
                  </div>

                  {/* EMAIL - Click to Mail */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 group hover:border-white/20 transition-colors">
                      <Mail className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Emails</h4>
                          <a href="mailto:info@bkkemuliaan.com" className="text-stone-300 font-light text-sm hover:text-red-400 block transition-colors">info@bkkemuliaan.com</a>
                          <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="text-stone-300 font-light text-sm hover:text-red-400 block transition-colors">Sales-marketing.2@bkkemuliaan.com</a>
                      </div>
                  </div>

                  {/* WEBSITE */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 group hover:border-white/20 transition-colors">
                      <Globe className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Website</h4>
                          <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="text-stone-300 font-light text-sm hover:text-red-400 transition-colors">
                            www.bkkemuliaan.com
                          </a>
                      </div>
                  </div>

                  {/* ADDRESSES - Click to Maps */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10 group hover:border-white/20 transition-colors">
                      <MapPin className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Our Locations</h4>
                          
                          <div className="mb-4">
                            <strong className="text-stone-400 text-[10px] uppercase tracking-wide block mb-1">Main Office:</strong>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Jl.+Sawit+Darangdan+No.+3,+Purwakarta,+West+Java+41163+-+Indonesia" 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-stone-300 font-light text-sm leading-relaxed hover:text-red-400 transition-colors block"
                            >
                              Jl. Sawit Darangdan No. 3, Purwakarta, West Java 41163 - Indonesia
                            </a>
                          </div>
                          
                          <div>
                            <strong className="text-stone-400 text-[10px] uppercase tracking-wide block mb-1">Operational Warehouse:</strong>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Husein+Sastranegara+Airport,+Cargo+Park+C.49+Jl.+Padjajaran+No.+156,+Bandung,+West+Java+40174" 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-stone-300 font-light text-sm leading-relaxed hover:text-red-400 transition-colors block"
                            >
                              Husein Sastranegara Airport, Cargo Park C.49 Jl. Padjajaran No. 156, Bandung, West Java 40174
                            </a>
                          </div>
                      </div>
                  </div>
               </div>

               {/* BOTTOM BRANDING (Pengganti Tombol Close) */}
               <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500">
                      <img src="/images/logo.png" alt="BKK Logo" className="w-12 h-12 object-contain mb-3" />
                      <h3 className="text-xl font-serif text-white tracking-[0.2em] uppercase">BKK</h3>
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