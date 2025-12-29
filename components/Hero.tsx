import React from 'react';
import { Apple, Carrot, Flower } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // 1. Definisikan item untuk HOT tag
  const hotItems = [
    "Premium Mangosteen", 
    "Fresh Salacca", 
    "Fresh Jasmine"
  ];
  
  // Duplikasi array agar loop berjalan mulus (seamless)
  const hotDisplayList = [...hotItems, ...hotItems, ...hotItems, ...hotItems];

  const fruits = [
    t.commodities['Avocado'], t.commodities['Harumanis Mango'], t.commodities['Honey Pineapple'],
    t.commodities['Mangosteen'], t.commodities['Rockmelon'], t.commodities['Salacca'], 
    t.commodities['Watermelon'], t.commodities['Durian'], t.commodities['Dragon Fruit']
  ];
  const vegetables = [
    t.commodities['French Beans'], t.commodities['Capsicum'], t.commodities['Honey Sweet Potato'], 
    t.commodities['Elephant Ginger'], t.commodities['Young Ginger'], t.commodities['Potato'], 
    t.commodities['Sweet Potato'], t.commodities['Watercress']
  ];
  const spices = [
    t.commodities['Cinnamon'], t.commodities['Vanilla'], t.commodities['Black Pepper'], 
    t.commodities['Clove'], t.commodities['Jasmine Flower'], t.commodities['White Pepper']
  ];

  const allCommodities = [...fruits, ...vegetables, ...spices];
  const displayList = [...allCommodities, ...allCommodities];

  const getIcon = (item: string) => {
    if (fruits.includes(item)) return <Apple size={14} className="text-red-600" />;
    if (vegetables.includes(item)) return <Carrot size={14} className="text-red-600" />;
    return <Flower size={14} className="text-red-600" />;
  };

  const scrollToPopular = () => {
    const element = document.getElementById('popular');
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <section className="relative h-[730px] md:h-screen w-full flex items-center justify-center overflow-hidden bg-green-950">
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        
        /* Animasi lambat untuk footer bawah */
        .animate-scroll { animation: scroll 60s linear infinite; width: max-content; }
        
        /* 2. Animasi lebih cepat untuk tombol HOT */
        .animate-scroll-fast { animation: scroll 20s linear infinite; width: max-content; }
        
        /* CUSTOM CSS: HANYA SHADOW */
        .text-custom-shadow { 
            text-shadow: 3px 3px 4px #022c22 !important; 
        }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2400" 
          alt="Fresh Indonesian Mangosteen Harvest" 
          className="w-full h-full object-cover opacity-100 brightness-110 transition-transform duration-[60s] scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-green-500/5 mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/30 to-green-950/40 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 mt-12 md:mt-24 w-full">
        
        {/* 3. Tombol HOT dengan Running Text */}
        <button 
            onClick={scrollToPopular}
            className="group inline-flex items-center gap-3 border border-white/20 pl-1 pr-4 py-1 rounded-full mb-6 md:mb-8 backdrop-blur-sm bg-white/5 animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all cursor-pointer overflow-hidden max-w-[280px] sm:max-w-[320px]"
        >
            <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider group-hover:bg-red-500 transition-colors shrink-0 z-10">
                {t.hero.hotTag}
            </span>
            
            {/* Area Running Text */}
            <div className="overflow-hidden w-full mask-image-linear-gradient(to right, transparent, black 10%, black 90%, transparent)">
              <div className="flex animate-scroll-fast gap-6">
                {hotDisplayList.map((text, i) => (
                  <p key={i} className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase group-hover:text-red-200 transition-colors whitespace-nowrap">
                    {text}
                  </p>
                ))}
              </div>
            </div>
        </button>
        
        {/* JUDUL UTAMA */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium mb-6 leading-tight md:leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 tracking-tight">
          <span className="text-white block text-custom-shadow">{t.hero.titleTrusted}</span>
          <span className="text-white block text-custom-shadow">{t.hero.titleIndonesian}</span>
          
          <span className="italic text-red-600 font-light block whitespace-normal md:whitespace-nowrap px-2 leading-none md:leading-tight text-custom-shadow">
            {t.hero.titleSuffix}
          </span>
        </h1>
        
        {/* DESKRIPSI */}
        <p className="max-w-3xl mx-auto text-sm md:text-xl font-light tracking-wide leading-relaxed opacity-90 text-stone-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mb-10 drop-shadow-md px-4">
          {t.hero.description}
        </p>
      </div>

      {/* Running Text Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-green-950/40 backdrop-blur-md border-t border-white/10">
          <div className="flex overflow-hidden py-4">
             <div className="flex animate-scroll">
                <div className="flex items-center gap-12 px-6">
                   {displayList.map((item, i) => (
                      <div key={`${item}-${i}`} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                         {getIcon(item)}
                         <span className="text-xs font-bold tracking-[0.2em] uppercase text-white whitespace-nowrap">
                            {item}
                         </span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;