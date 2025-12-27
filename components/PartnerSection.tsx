import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PartnerSectionProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ setIsContactOpen }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 md:py-32 bg-white text-stone-600 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute right-0 top-0 w-1/2 h-full bg-green-50/50 -skew-x-12 translate-x-20 pointer-events-none"></div>

       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* KOLOM KIRI: TEKS & TOMBOL */}
              <div className="reveal-hidden text-left order-2 lg:order-1">
                  <div className="w-16 h-1 bg-red-600 mb-6 shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-green-700 drop-shadow-sm">
                    {language === 'EN' ? (
                        <>
                            <span className="text-red-600 italic">Partner</span> With Us.
                        </>
                    ) : (
                        <>
                            <span className="text-red-600 italic">Bermitra</span> Dengan Kami.
                        </>
                    )}
                  </h2>

                  <p className="text-stone-600 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg">
                      {t.partner.description}
                  </p>
                  
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="group relative px-10 py-5 bg-green-600 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all overflow-hidden shadow-xl hover:shadow-red-900/50 rounded-sm flex items-center gap-4 w-fit"
                  >
                      {t.partner.btn} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>

              {/* KOLOM KANAN: PETA (MAPS) */}
              <div className="reveal-hidden order-1 lg:order-2 h-[400px] relative rounded-sm overflow-hidden shadow-2xl border border-stone-200 group">
                  
                  {/* Label Lokasi di atas Peta */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-3 border-l-4 border-red-600 shadow-sm max-w-[250px]">
                      <div className="flex items-center gap-2 mb-1">
                          <MapPin size={14} className="text-red-600" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Operational Warehouse</span>
                      </div>
                      <p className="text-xs font-bold text-green-800 leading-tight">
                          Husein Sastranegara Airport, Cargo Park C.49
                      </p>
                      <p className="text-[10px] text-stone-500 mt-1">Bandung, West Java 40174</p>
                  </div>

                  {/* Google Maps Iframe */}
                  <iframe 
                    src="https://maps.google.com/maps?q=Cargo%20Park%20C.49%20Jl.%20Padjajaran%20No.%20156%2C%20Bandung%2C%20West%20Java%2040174&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    title="Operational Warehouse Map"
                  ></iframe>
              </div>

          </div>
       </div>
    </section>
  );
};

export default PartnerSection;