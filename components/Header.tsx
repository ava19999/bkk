import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        ? 'border-white text-white hover:bg-white hover:text-green-950'  // Scrolled: Border Putih
        : 'border-white/20 text-white hover:bg-white hover:text-green-950 backdrop-blur-sm bg-white/5'}
  `;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#041C12]/95 backdrop-blur-md py-3 border-white/10 shadow-sm' // BG HIJAU TUA SAAT SCROLL
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO AREA */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group shrink-0 text-left">
              <img 
                src="/images/logo.png" 
                alt="BKK Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                  {/* CHANGE: text-green-950 -> text-white (always white now) */}
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

          {/* MENU AREA */}
          <nav className="hidden lg:flex items-center gap-1.5">
              <button onClick={() => scrollToSection('about')} className={buttonClass}>About Us</button>
              <button onClick={() => scrollToSection('global')} className={buttonClass}>Global Reach</button>
              <button onClick={() => scrollToSection('catalogue')} className={buttonClass}>Product</button>
              <button onClick={() => setIsContactOpen(true)} className={`${buttonClass} pl-4 pr-3 flex items-center gap-2 ml-1`}>
                  <span>Contact</span>
                  <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white">
             <div className="space-y-1.5 cursor-pointer p-2">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-4 h-0.5 bg-current ml-auto"></div>
             </div>
          </button>

        </div>
      </header>
      
      {/* MODAL CONTACT US - Perlu Background Gelap juga agar konsisten? Atau Putih? 
          Saya biarkan Putih agar kontras dan mudah dibaca (Modal standard). */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsContactOpen(false)}></div>
            <div className="relative bg-[#041C12] border border-white/10 rounded-sm shadow-2xl max-w-lg w-full p-8 md:p-12 animate-in fade-in zoom-in duration-300">
               <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 transition-colors"><X size={24} /></button>
               <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif text-white mb-2">Get in Touch</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">We'd love to hear from you</p>
               </div>
               <div className="space-y-6">
                  {/* Item Contact: BG White/5 */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10">
                      <Phone className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Phone / WhatsApp</h4>
                          <p className="text-stone-400 font-light text-sm">+62 22 6016 306</p>
                          <p className="text-stone-400 font-light text-sm">+62 817 687 8166</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10">
                      <Mail className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Email Inquiries</h4>
                          <p className="text-stone-400 font-light text-sm">info@bkkemuliaan.com</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-sm border border-white/10">
                      <MapPin className="text-green-500 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Head Office</h4>
                          <p className="text-stone-400 font-light text-sm leading-relaxed">Jl. Sawit Darangdan No. 3, Purwakarta<br/>West Java 41163 - Indonesia</p>
                      </div>
                  </div>
               </div>
               <div className="mt-8 text-center">
                  <button onClick={() => setIsContactOpen(false)} className="w-full py-3 bg-white text-green-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-colors rounded-sm">Close</button>
               </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;