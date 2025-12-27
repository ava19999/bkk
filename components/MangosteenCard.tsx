import React, { useState, useRef, useEffect } from 'react';
import { Sprout, ShieldCheck, Truck, Star, ArrowRight, Globe, Scale, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MangosteenCard: React.FC = () => {
  const { t } = useLanguage();
  
  // Form States
  const [destination, setDestination] = useState('');
  const [volume, setVolume] = useState('');
  const [isOpenDestination, setIsOpenDestination] = useState(false);
  const destinationRef = useRef<HTMLDivElement>(null);

  const countries = ['China', 'Singapore', 'Thailand', 'Malaysia', 'UAE', 'Bangladesh', 'Canada', 'Other'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setIsOpenDestination(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!destination) {
        alert(t.booking.alert);
        return;
    }
    const subject = `Premium Mangosteen Quote Request`;
    const body = `Hello BKK Team,%0D%0A%0D%0AI would like to request a quotation for:%0D%0A%0D%0A- Commodity: Premium Mangosteen%0D%0A- Destination: ${destination}%0D%0A- Volume: ${volume || 'TBD'} MT%0D%0A%0D%0AThank you.`;
    window.location.href = `mailto:info@bkkemuliaan.com?subject=${subject}&body=${body}`;
  };

  // Path gambar
  const image1 = "/images/popular/48cbbd1b8072032c0c3b6441cddbe9e1.jpg";
  const image2 = encodeURI("/images/popular/Adventure Instagram Post_20250206_114851_0000.png");

  // Class untuk kabut hijau tua
  // Menggunakan gradien dari hijau tua (green-950) ke transparan
  const fogOverlayClass = "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-green-950/90 via-green-900/50 to-transparent pointer-events-none mix-blend-multiply";

  return (
    <section className="relative z-30 w-full bg-green-50 py-24 px-6 reveal-hidden clean-section">
      
      <style>{`
        .clean-section h1:not(.title-shadow), 
        .clean-section h2:not(.title-shadow), 
        .clean-section h3:not(.title-shadow), 
        .clean-section h4:not(.title-shadow), 
        .clean-section p, 
        .clean-section span:not(.title-part), 
        .clean-section div, 
        .clean-section input {
           text-shadow: none !important;
           -webkit-text-stroke: 0 !important;
        }
        
        .title-shadow {
           text-shadow: 0 1px 3px rgba(0,0,0,0.3) !important;
           -webkit-text-stroke: 0.5px rgba(0,0,0,0.15) !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* KOLOM KIRI */}
        <div className="flex flex-col h-full">
             <div className="flex justify-start mb-4">
                <Star size={24} className="text-red-600" />
             </div>
             <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                {t.mangosteen.badge}
             </p>

            <h3 className="text-4xl md:text-6xl font-serif text-green-700 mb-6 leading-tight shrink-0 title-shadow">
              {t.mangosteen.titleMain} <br /> <span className="text-red-600 title-part">{t.mangosteen.titleSub}</span>
            </h3>
            
            <p className="text-stone-600 text-lg font-light mb-10 leading-relaxed border-l-2 border-red-600 pl-6 shrink-0">
               {t.mangosteen.description}
            </p>

            {/* GAMBAR MOBILE (Image 1) dengan FOG */}
            <div className="md:hidden flex flex-col gap-4 mb-10">
                <div className="relative w-full min-h-[250px] rounded-sm overflow-hidden shadow-lg border border-stone-200 group">
                   <img 
                     src={image1}
                     alt="Premium Mangosteen Quality"
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   {/* Overlay Kabut Hijau Tua */}
                   <div className={fogOverlayClass}></div>
                </div>
            </div>

            {/* LIST FITUR */}
            <div className="space-y-3 md:space-y-8 mb-8 md:mb-12">
                <div className="flex gap-3 md:gap-5 items-start">
                    <div className="bg-white p-2.5 md:p-4 rounded-full shadow-sm text-green-600 shrink-0 h-fit border border-green-100">
                        <Sprout className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-700 uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2">{t.mangosteen.feat1Title}</h4>
                        <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                          {t.mangosteen.feat1Desc}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 md:gap-5 items-start">
                    <div className="bg-white p-2.5 md:p-4 rounded-full shadow-sm text-green-600 shrink-0 h-fit border border-green-100">
                        <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-700 uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2">{t.mangosteen.feat2Title}</h4>
                        <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                          {t.mangosteen.feat2Desc}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 md:gap-5 items-start">
                    <div className="bg-white p-2.5 md:p-4 rounded-full shadow-sm text-green-600 shrink-0 h-fit border border-green-100">
                        <Truck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-700 uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2">{t.mangosteen.feat3Title}</h4>
                        <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                          {t.mangosteen.feat3Desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* FORMULIR REQUEST QUOTATION */}
            <div className="mt-auto pt-8 border-t border-green-200">
                <h4 className="font-serif text-xl text-green-700 mb-6 flex items-center gap-3">
                   <span className="w-8 h-[1px] bg-red-600"></span>
                   {t.mangosteen.formTitle}
                </h4>
                
                <div className="space-y-4">
                   <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Sprout className="text-green-600" size={16} />
                      </div>
                      <input 
                        type="text" 
                        value={t.commodities['Mangosteen']}
                        readOnly
                        className="block w-full pl-10 pr-3 py-4 text-sm text-green-700 bg-white border border-stone-200 rounded-sm focus:outline-none font-bold shadow-sm cursor-not-allowed" 
                      />
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative" ref={destinationRef}>
                          <div 
                            className="relative w-full cursor-pointer"
                            onClick={() => setIsOpenDestination(!isOpenDestination)}
                          >
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Globe className="text-stone-400" size={16} />
                              </div>
                              <input 
                                type="text" 
                                readOnly
                                value={destination}
                                className="block w-full pl-10 pr-3 py-4 text-sm text-green-700 bg-white border border-stone-200 rounded-sm focus:ring-1 focus:ring-red-600 focus:border-red-600 cursor-pointer placeholder:text-stone-400 font-light shadow-sm" 
                                placeholder={t.mangosteen.inputDest} 
                              />
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ChevronDown className={`text-stone-400 transition-transform ${isOpenDestination ? 'rotate-180' : ''}`} size={16} />
                              </div>
                          </div>
                          {isOpenDestination && (
                            <div className="absolute bottom-full mb-1 left-0 w-full bg-white shadow-xl border border-stone-100 rounded-sm z-50 animate-in fade-in zoom-in-95 duration-200 max-h-48 overflow-y-auto">
                                <ul className="py-1">
                                    {countries.map((country) => (
                                        <li 
                                            key={country}
                                            onClick={() => { setDestination(country); setIsOpenDestination(false); }}
                                            className="px-4 py-2 hover:bg-green-50 cursor-pointer text-xs text-stone-600 hover:text-green-700 flex items-center justify-between"
                                        >
                                            {country}
                                            {destination === country && <Check size={12} className="text-green-600" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                          )}
                      </div>

                      <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Scale className="text-stone-400 group-focus-within:text-red-600 transition-colors" size={16} />
                          </div>
                          <input 
                            type="number"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            className="block w-full pl-10 pr-3 py-4 text-sm text-green-700 bg-white border border-stone-200 rounded-sm focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder:text-stone-400 font-light shadow-sm" 
                            placeholder={t.mangosteen.inputVol} 
                          />
                      </div>
                   </div>

                   <button 
                     onClick={handleEmail}
                     className="w-full group inline-flex items-center justify-center gap-2 py-4 bg-green-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-red-600 transition-all shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-0.5"
                   >
                       {t.mangosteen.btnRequest} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
            </div>

        </div>

        {/* KOLOM KANAN (DESKTOP ONLY) */}
        <div className="hidden md:flex flex-col gap-6 h-full pt-20">
            {/* Gambar Atas (Image 1) dengan FOG */}
            <div className="flex-1 relative w-full min-h-[250px] rounded-sm overflow-hidden shadow-lg group border border-stone-200">
               <img 
                 src={image1}
                 alt="Premium Mangosteen Quality"
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               {/* Overlay Kabut Hijau Tua */}
               <div className={fogOverlayClass}></div>
            </div>
            {/* Gambar Bawah (Image 2) dengan FOG */}
            <div className="flex-1 relative w-full min-h-[250px] rounded-sm overflow-hidden shadow-lg group border border-stone-200">
               <img 
                 src={image2}
                 alt="Fresh Mangosteen Harvest"
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               {/* Overlay Kabut Hijau Tua */}
               <div className={fogOverlayClass}></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MangosteenCard;