import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PartnerSectionProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ setIsContactOpen }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 md:py-32 bg-white text-stone-600 relative overflow-hidden">
       <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <div className="reveal-hidden">
              <div className="w-16 h-1 bg-red-600 mb-4 md:mb-8 mx-auto shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>
              
              {/* MODIFIKASI: Partner (Merah) di atas, With Us di bawah */}
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif mb-4 md:mb-8 leading-tight text-green-700 drop-shadow-sm">
                {language === 'EN' ? (
                    <>
                        <span className="text-red-600 italic">Partner</span> <br /> With Us.
                    </>
                ) : (
                    <>
                        <span className="text-red-600 italic">Bermitra</span> <br /> Dengan Kami.
                    </>
                )}
              </h2>

              <p className="text-stone-600 text-lg md:text-2xl font-light mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                  {t.partner.description}
              </p>
              
              <button 
                onClick={() => setIsContactOpen(true)}
                className="group relative px-12 py-6 bg-green-600 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all overflow-hidden shadow-2xl hover:shadow-red-900/50 rounded-sm mx-auto flex items-center gap-4"
              >
                  {t.partner.btn} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
       </div>
    </section>
  );
};

export default PartnerSection;