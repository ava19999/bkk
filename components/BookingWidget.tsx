import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Sprout, Globe, Scale, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Import Hook

const BookingWidget: React.FC = () => {
  const { t } = useLanguage(); // Gunakan kamus
  
  // --- STATE ---
  const [isOpenCommodity, setIsOpenCommodity] = useState(false);
  const [isOpenDestination, setIsOpenDestination] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'fruits' | 'vegetables' | 'spices'>('fruits');
  
  // Values
  const [commodity, setCommodity] = useState('');
  const [destination, setDestination] = useState('');
  const [volume, setVolume] = useState('');

  // Refs for click outside
  const commodityRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  // --- DATA ---
  const categories = ['fruits', 'vegetables', 'spices'] as const;
  
  // Kunci produk dalam bahasa Inggris (untuk dicocokkan dengan kamus commodities)
  const productKeys = {
    fruits: ['Avocado', 'Harumanis Mango', 'Honey Pineapple', 'Mangosteen', 'Rockmelon', 'Salacca', 'Watermelon', 'Durian', 'Dragon Fruit'],
    vegetables: ['French Beans', 'Capsicum', 'Honey Sweet Potato', 'Elephant Ginger', 'Young Ginger', 'Potato', 'Sweet Potato', 'Watercress'],
    spices: ['Cinnamon', 'Vanilla', 'Black Pepper', 'Clove', 'Jasmine Flower', 'White Pepper']
  };

  const countries = ['China', 'Singapore', 'Thailand', 'Malaysia', 'UAE', 'Bangladesh', 'Canada', 'Other'];

  // --- HANDLERS ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commodityRef.current && !commodityRef.current.contains(event.target as Node)) {
        setIsOpenCommodity(false);
      }
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setIsOpenDestination(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!commodity || !destination) {
        alert(t.booking.alert);
        return;
    }
    const subject = `Quote Request: ${commodity}`;
    const body = `Hello BKK Team,%0D%0A%0D%0AI would like to request a quotation for:%0D%0A%0D%0A- Commodity: ${commodity}%0D%0A- Destination: ${destination}%0D%0A- Volume: ${volume || 'TBD'} MT%0D%0A%0D%0AThank you.`;
    
    // UPDATE: Email tujuan telah diubah di sini
    window.location.href = `mailto:sales-marketing.2@bkkemuliaan.com?subject=${subject}&body=${body}`;
  };

  // Helper untuk mendapatkan nama komoditas yang diterjemahkan
  const getTranslatedCommodity = (key: string) => {
    return (t.commodities as any)[key] || key;
  };

  return (
    <div className="relative z-50 w-full bg-white border-y border-stone-200 shadow-2xl shadow-green-900/40">
      <div className="w-full grid grid-cols-3 lg:flex lg:flex-row">
        
        {/* 1. COMMODITY SELECT */}
        <div className="col-span-1 lg:flex-1 relative group hover:bg-stone-50 transition-colors border-r border-b lg:border-b-0 border-stone-200" ref={commodityRef}>
          <div 
            className="w-full h-20 md:h-24 lg:h-28 px-2 md:px-8 pt-4 lg:pt-6 relative cursor-pointer"
            onClick={() => setIsOpenCommodity(!isOpenCommodity)}
          >
             <div className="absolute top-2 lg:top-4 left-2 lg:left-8 z-10 pointer-events-none">
                <label className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-red-600 transition-colors">
                    <span className="hidden md:inline">{t.booking.labelCommodity}</span>
                    <span className="md:hidden">Item</span>
                </label>
             </div>
             <div className="flex flex-col justify-center lg:flex-row lg:items-center h-full pt-4 overflow-hidden">
                 <div className="flex items-center gap-1 lg:gap-4">
                    <Sprout size={16} className="text-green-600 shrink-0 lg:w-5 lg:h-5" />
                    <span className={`text-[10px] lg:text-xl font-serif truncate leading-tight ${commodity ? 'text-green-700' : 'text-stone-400'}`}>
                        {commodity ? getTranslatedCommodity(commodity) : t.booking.placeholderSelect}
                    </span>
                 </div>
                 <ChevronDown size={12} className={`text-stone-400 absolute right-1 top-2 lg:right-8 lg:top-1/2 lg:-translate-y-1/2 transition-transform ${isOpenCommodity ? 'rotate-180 text-red-600' : ''}`} />
             </div>
          </div>

          {/* DROPDOWN MENU */}
          {isOpenCommodity && (
            <div className="absolute top-full left-0 min-w-[280px] w-[300%] lg:w-[450px] bg-white shadow-2xl border border-stone-100 rounded-b-sm z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex border-b border-stone-100 bg-stone-50 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={(e) => { e.stopPropagation(); setSelectedCategory(cat); }}
                            className={`flex-1 py-3 px-3 text-[9px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                                selectedCategory === cat 
                                ? 'bg-white text-red-600 border-b-2 border-red-600' 
                                : 'text-stone-400 hover:text-stone-600 hover:bg-stone-100'
                            }`}
                        >
                            {t.booking.cats[cat]}
                        </button>
                    ))}
                </div>
                <div className="p-2 max-h-60 overflow-y-auto">
                    <ul className="grid grid-cols-1 gap-1">
                        {productKeys[selectedCategory].map((key) => (
                            <li 
                                key={key}
                                onClick={() => { setCommodity(key); setIsOpenCommodity(false); }}
                                className="flex items-center justify-between px-3 py-2 hover:bg-green-50 rounded-sm cursor-pointer text-stone-600 hover:text-green-700 transition-colors group/item"
                            >
                                <span className="text-xs md:text-sm">{getTranslatedCommodity(key)}</span>
                                {commodity === key && <Check size={14} className="text-green-600" />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          )}
        </div>

        {/* 2. DESTINATION SELECT */}
        <div className="col-span-1 lg:flex-1 relative group hover:bg-stone-50 transition-colors border-r border-b lg:border-b-0 border-stone-200" ref={destinationRef}>
          <div 
            className="w-full h-20 md:h-24 lg:h-28 px-2 md:px-8 pt-4 lg:pt-6 relative cursor-pointer"
            onClick={() => setIsOpenDestination(!isOpenDestination)}
          >
             <div className="absolute top-2 lg:top-4 left-2 lg:left-8 z-10 pointer-events-none">
                <label className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-red-600 transition-colors">
                    <span className="hidden md:inline">{t.booking.labelDestination}</span>
                    <span className="md:hidden">{t.booking.labelDestination.slice(0,4)}.</span>
                </label>
             </div>
             <div className="flex flex-col justify-center lg:flex-row lg:items-center h-full pt-4 overflow-hidden">
                 <div className="flex items-center gap-1 lg:gap-4">
                    <Globe size={16} className="text-green-600 shrink-0 lg:w-5 lg:h-5" />
                    <span className={`text-[10px] lg:text-xl font-serif truncate leading-tight ${destination ? 'text-green-700' : 'text-stone-400'}`}>
                        {destination || t.booking.placeholderSelect}
                    </span>
                 </div>
                 <ChevronDown size={12} className={`text-stone-400 absolute right-1 top-2 lg:right-8 lg:top-1/2 lg:-translate-y-1/2 transition-transform ${isOpenDestination ? 'rotate-180 text-red-600' : ''}`} />
             </div>
          </div>
          {isOpenDestination && (
             <div className="absolute top-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 min-w-[200px] w-[200%] lg:w-full bg-white shadow-2xl border border-stone-100 rounded-b-sm z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-2">
                    <ul className="space-y-1">
                        {countries.map((country) => (
                            <li 
                                key={country}
                                onClick={() => { setDestination(country); setIsOpenDestination(false); }}
                                className="flex items-center justify-between px-3 py-2 hover:bg-green-50 rounded-sm cursor-pointer text-stone-600 hover:text-green-700 transition-colors"
                            >
                                <span className="text-xs md:text-sm font-medium">{country}</span>
                                {destination === country && <Check size={14} className="text-green-600" />}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          )}
        </div>

        {/* 3. VOLUME INPUT */}
        <div className="col-span-1 lg:w-72 relative group hover:bg-stone-50 transition-colors border-b lg:border-b-0 border-stone-200 lg:border-r">
          <div className="absolute top-2 lg:top-4 left-2 lg:left-8 z-10 pointer-events-none">
             <label className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-red-600 transition-colors">
                <span className="hidden md:inline">{t.booking.labelVolume}</span>
                <span className="md:hidden">{t.booking.labelQty}</span>
             </label>
          </div>
          <div className="relative flex flex-col justify-center lg:flex-row lg:items-center h-20 md:h-24 lg:h-28 px-2 md:px-8 pt-4 lg:pt-6">
             <div className="flex items-center gap-1 lg:gap-4 w-full h-full pt-4">
                <Scale size={16} className="text-green-600 shrink-0 lg:w-5 lg:h-5 absolute lg:static left-2 top-1/2 -translate-y-1/2 lg:translate-y-0" />
                <input 
                    type="number" 
                    placeholder={t.booking.placeholderVolume}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full h-full bg-transparent border-none outline-none text-[10px] lg:text-xl font-serif text-green-700 pl-5 lg:pl-0 placeholder:text-stone-300 focus:ring-0"
                />
                <span className="text-[8px] lg:text-[10px] font-bold text-stone-400 absolute right-2 top-1/2 lg:top-1/2 lg:-translate-y-1/2 pt-3 lg:pt-0">MT</span>
             </div>
          </div>
        </div>

        {/* 4. CTA BUTTON */}
        <button 
            onClick={handleEmail}
            className="col-span-3 lg:w-auto min-w-[100px] bg-green-600 hover:bg-green-700 text-white flex flex-col items-center justify-center gap-1 font-bold uppercase tracking-[0.15em] text-xs transition-all relative overflow-hidden group py-4 lg:py-0 lg:px-8"
        >
          <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
             {t.booking.btnQuote} <ArrowRight size={16} />
          </span>
          <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

      </div>
    </div>
  );
};

export default BookingWidget;