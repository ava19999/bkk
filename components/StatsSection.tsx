import React from 'react';
import { Globe, TrendingUp, Package, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  const exportCountries = ['China', 'Singapore', 'Thailand', 'Malaysia', 'UAE', 'Bangladesh', 'Canada'];

  return (
    <section id="global" className="py-12 md:py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-green-50 to-transparent z-[5] pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="w-full h-auto object-cover opacity-20" style={{ filter: 'invert(34%) sepia(98%) saturate(696%) hue-rotate(88deg) brightness(93%) contrast(92%)' }} />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-3 md:gap-6">
             {/* Item 1 */}
             <div className="col-span-3 md:col-span-1 bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-3 md:gap-0 text-center md:text-left">
                    <Globe className="text-red-600 mb-0 md:mb-4 w-8 h-8 md:w-8 md:h-8 shrink-0" />
                    <div className="flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-0">
                       <h3 className="text-4xl md:text-5xl font-serif mb-0 md:mb-2 text-green-700">7+</h3>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 whitespace-nowrap">{t.stats.items.countries}</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                   {exportCountries.map((country, idx) => (
                       <span key={idx} className="bg-white border border-stone-200 px-2 py-1 rounded-full text-[10px] font-medium text-stone-600 shadow-sm">{country}</span>
                   ))}
                </div>
             </div>
             {/* Item 2 */}
             <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <TrendingUp className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">100+</h3>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">{t.stats.items.clients}</p>
                </div>
                <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">{t.stats.items.clientsSub}</p>
             </div>
             {/* Item 3 */}
             <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Package className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">100<span className="text-sm md:text-2xl">MT</span></h3>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">{t.stats.items.capacity}</p>
                </div>
                <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">{t.stats.items.capacitySub}</p>
             </div>
             {/* Item 4 */}
             <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <CheckCircle2 className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                    <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">GACC</h3>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">{t.stats.items.certified}</p>
                </div>
                <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">{t.stats.items.certifiedSub}</p>
             </div>
          </div>
        </div>
        <div className="reveal-hidden order-1 lg:order-2 lg:pl-10">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 block">{t.stats.label}</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-green-700 mb-6 md:mb-8 leading-tight">
            {t.stats.title1} <br /> <span className="italic text-red-600">{t.stats.title2}</span> <br/> {t.stats.title3}
          </h2>
          <p className="text-stone-600 font-light leading-relaxed mb-6 lg:mb-10 text-lg">{t.stats.description}</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;