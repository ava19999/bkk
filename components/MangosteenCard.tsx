import React, { useState, useRef, useEffect } from 'react';
import { Sprout, Star, ArrowRight, Globe, Scale, ChevronDown, Check, Info, Package, Clock, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { POPULAR_PRODUCTS } from '../constants'; 

const MangosteenCard: React.FC = () => {
  const { t } = useLanguage();
  
  // --- STATE ---
  const [activeTab, setActiveTab] = useState<'mangosteen' | 'salacca' | 'jasmine'>('mangosteen');
  const [destination, setDestination] = useState('');
  const [volume, setVolume] = useState('');
  const [isOpenDestination, setIsOpenDestination] = useState(false);
  
  const destinationRef = useRef<HTMLDivElement>(null);
  const countries = ['China', 'Singapore', 'Thailand', 'Malaysia', 'UAE', 'Bangladesh', 'Canada', 'Other'];

  const currentProduct = POPULAR_PRODUCTS[activeTab];

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
    const subject = `Quote Request: ${currentProduct.name}`;
    const body = `Hello BKK Team,%0D%0A%0D%0AI would like to request a quotation for:%0D%0A%0D%0A- Commodity: ${currentProduct.name}%0D%0A- Destination: ${destination}%0D%0A- Volume: ${volume || 'TBD'} MT%0D%0A%0D%0AThank you.`;
    
    // UPDATE EMAIL DI SINI
    window.location.href = `mailto:Sales-marketing.2@bkkemuliaan.com?subject=${subject}&body=${body}`;
  };

  // Helper Colors
  const getActiveTitleColor = (id: string) => {
    if (id === 'mangosteen') return 'text-purple-900';
    if (id === 'salacca') return 'text-amber-900';
    if (id === 'jasmine') return 'text-slate-600';
    return 'text-green-700';
  };
  
  const getActiveBarColor = (id: string) => {
    if (id === 'mangosteen') return 'bg-purple-900';
    if (id === 'salacca') return 'bg-amber-900';
    if (id === 'jasmine') return 'bg-slate-400';
    return 'bg-green-700';
  };

  const fogOverlayClass = "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/80 to-transparent pointer-events-none mix-blend-multiply";

  return (
    <section className="relative z-30 w-full bg-green-50 py-24 px-6 reveal-hidden clean-section font-sans">
      
      <style>{`
        .clean-section h1:not(.title-shadow), .clean-section h2:not(.title-shadow), .clean-section h3:not(.title-shadow), 
        .clean-section h4:not(.title-shadow), .clean-section p, .clean-section span:not(.title-part), 
        .clean-section div, .clean-section input {
           text-shadow: none !important; -webkit-text-stroke: 0 !important;
        }
        .title-shadow { text-shadow: 0 1px 3px rgba(0,0,0,0.1) !important; }
      `}</style>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
        
        {/* KOLOM KIRI (MENU & KONTEN) */}
        <div className="flex flex-col h-full relative">
             <div className="flex justify-start mb-4">
                <Star size={24} className="text-red-600" />
             </div>
             
             <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Popular Indonesia Commodity</p>

            {/* SELECTION MENU INTERAKTIF */}
            <div className="flex flex-col gap-3 mb-8 relative z-50">
              {(['mangosteen', 'salacca', 'jasmine'] as const).map((key) => {
                const isActive = activeTab === key;
                const product = POPULAR_PRODUCTS[key];

                return (
                  <div key={key} className="relative">
                    <div 
                        onClick={() => setActiveTab(key)} 
                        className="group cursor-pointer flex items-center gap-4 transition-all duration-300 transform group-hover:translate-x-2"
                    >
                        <h3 className={`font-serif leading-tight transition-all duration-300 
                            ${isActive 
                                ? `text-4xl ${getActiveTitleColor(key)} title-shadow font-medium scale-105 origin-left` 
                                : 'text-3xl text-green-700/50 group-hover:text-green-700 font-light'
                            }`}
                        >
                          {product.name}
                        </h3>
                    </div>
                    {isActive && (
                        <div className={`h-1.5 w-24 ${getActiveBarColor(key)} mt-3 rounded-full animate-in fade-in slide-in-from-left-8 duration-500`}></div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* CONTENT AREA */}
            <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-0">
              
              <div className="flex flex-col gap-3 mb-4">
                 {currentProduct.subTitle && <h4 className="text-stone-800 font-bold uppercase tracking-wider text-sm">{currentProduct.subTitle}</h4>}
                 
                 {currentProduct.portfolioUrl && (
                     <a 
                       href={currentProduct.portfolioUrl}
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-fit flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs font-bold uppercase tracking-widest mt-2 group border border-red-700"
                     >
                        <FileText size={16} /> CLICK OFFICIAL PORTFOLIO
                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform opacity-70"/>
                     </a>
                 )}
              </div>

              <p className="text-stone-700 text-base font-normal mb-6 leading-relaxed border-l-4 border-stone-200 pl-4 mt-4">
                 {currentProduct.description}
              </p>

              {/* DETAILS */}
              {(currentProduct.specs || currentProduct.packagingDetails) && (
                <div className="bg-white border border-stone-200 rounded-lg p-5 mb-8 text-sm shadow-sm space-y-6">
                   {/* SPECS */}
                   {currentProduct.specs && (
                   <div>
                       <h5 className="font-bold text-stone-800 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2 text-xs uppercase tracking-wide">
                         <Info size={14} className="text-green-600" /> {currentProduct.specsTitle || "Product Detail"}
                       </h5>
                       <div className="grid grid-cols-1 gap-y-2">
                         {currentProduct.specs.map((spec, idx) => (
                           <div key={idx} className="grid grid-cols-3 pb-1 border-b border-stone-50 last:border-0 items-start">
                             <span className="text-stone-500 font-medium text-xs pt-0.5">{spec.label}</span>
                             <span className="col-span-2 text-stone-800 font-semibold text-xs leading-snug">{spec.value}</span>
                           </div>
                         ))}
                       </div>
                   </div>
                   )}
                   {/* PACKAGING & QC */}
                   {currentProduct.packagingDetails && (
                     <div>
                       <h5 className="font-bold text-stone-800 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2 text-xs uppercase tracking-wide">
                         <Package size={14} className="text-green-600" /> Packaging & Export Standard
                       </h5>
                       <div className="grid grid-cols-1 gap-y-2">
                         {currentProduct.packagingDetails.map((pkg, idx) => (
                           <div key={idx} className="grid grid-cols-3 pb-1 border-b border-stone-50 last:border-0 items-start">
                             <span className="text-stone-500 font-medium text-xs pt-0.5">{pkg.label}</span>
                             <span className="col-span-2 text-stone-800 font-semibold text-xs leading-snug">{pkg.value}</span>
                           </div>
                         ))}
                       </div>
                       {currentProduct.qualityControl && (
                          <div className="mt-4 bg-stone-50 p-3 rounded border border-stone-100">
                             <div className="flex items-center gap-2 mb-2"><ShieldCheck size={12} className="text-green-600"/><span className="text-stone-600 font-bold text-[10px] uppercase tracking-wider">Quality Control Points</span></div>
                             <ul className="list-disc list-inside text-stone-600 text-xs space-y-1">{currentProduct.qualityControl.map((qc, i) => <li key={i}>{qc}</li>)}</ul>
                          </div>
                       )}
                     </div>
                   )}
                   {/* ORDER INFO */}
                   {currentProduct.orderInfo && (
                     <div>
                       <h5 className="font-bold text-stone-800 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2 text-xs uppercase tracking-wide">
                         <Clock size={14} className="text-green-600" /> Detail Order
                       </h5>
                       <div className="grid grid-cols-1 gap-y-2">
                         {currentProduct.orderInfo.map((info, idx) => (
                           <div key={idx} className="grid grid-cols-3 pb-1 border-b border-stone-50 last:border-0 items-start">
                             <span className="text-stone-500 font-medium text-xs pt-0.5">{info.label}</span>
                             <span className="col-span-2 text-stone-800 font-semibold text-xs leading-snug">{info.value}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}
                </div>
              )}
            </div>

            {/* GAMBAR MOBILE */}
            <div className="md:hidden flex flex-col gap-4 mb-10">
                <div className="relative w-full h-[300px] bg-white rounded-lg overflow-hidden shadow-md border border-stone-100">
                   <img src={currentProduct.images[0]} alt={currentProduct.name} className="w-full h-full object-cover" />
                   <div className={fogOverlayClass}></div>
                </div>
            </div>

            {/* FORMULIR REQUEST QUOTATION */}
            <div className="mt-auto pt-6 border-t border-green-200/60">
                <h4 className="font-serif text-lg text-green-800 mb-4 flex items-center gap-3"><span className="w-6 h-[2px] bg-red-600"></span>{t.mangosteen.formTitle}</h4>
                <div className="space-y-3">
                   <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Sprout className="text-green-600" size={16} /></div>
                      <input type="text" value={currentProduct.name} readOnly className="block w-full pl-10 pr-3 py-3 text-sm text-stone-700 bg-stone-50 border border-stone-200 rounded focus:outline-none font-semibold shadow-sm" />
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative" ref={destinationRef}>
                          <div className="relative w-full cursor-pointer" onClick={() => setIsOpenDestination(!isOpenDestination)}>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Globe className="text-stone-400" size={16} /></div>
                              <input type="text" readOnly value={destination} className="block w-full pl-10 pr-3 py-3 text-sm text-stone-700 bg-white border border-stone-200 rounded focus:ring-1 focus:ring-green-600 cursor-pointer placeholder:text-stone-400 font-normal shadow-sm" placeholder="Destination Country" />
                              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><ChevronDown className={`text-stone-400 transition-transform ${isOpenDestination ? 'rotate-180' : ''}`} size={16} /></div>
                          </div>
                          {isOpenDestination && (
                            <div className="absolute bottom-full mb-1 left-0 w-full bg-white shadow-lg border border-stone-100 rounded z-50 max-h-48 overflow-y-auto">
                                <ul className="py-1">{countries.map((country) => (<li key={country} onClick={() => { setDestination(country); setIsOpenDestination(false); }} className="px-4 py-2 hover:bg-green-50 cursor-pointer text-xs text-stone-600 hover:text-green-700 flex items-center justify-between">{country}{destination === country && <Check size={12} className="text-green-600" />}</li>))}</ul>
                            </div>
                          )}
                      </div>
                      <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Scale className="text-stone-400 group-focus-within:text-green-600 transition-colors" size={16} /></div>
                          <input type="number" value={volume} onChange={(e) => setVolume(e.target.value)} className="block w-full pl-10 pr-3 py-3 text-sm text-stone-700 bg-white border border-stone-200 rounded focus:ring-1 focus:ring-green-600 transition-all placeholder:text-stone-400 font-normal shadow-sm" placeholder="Volume (MT)" />
                      </div>
                   </div>
                   <button onClick={handleEmail} className="w-full group inline-flex items-center justify-center gap-2 py-3.5 bg-green-700 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20">
                       {t.mangosteen.btnRequest} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
            </div>
        </div>

        {/* KOLOM KANAN (3 FOTO SEJAJAR MENURUN) */}
        <div className="hidden md:flex flex-col gap-6 h-full pt-16 sticky top-20">
            {currentProduct.images.slice(0, 3).map((img, idx) => (
                <div key={`${activeTab}-${idx}`} className="flex-1 relative w-full min-h-[200px] bg-white rounded-lg overflow-hidden shadow-lg border border-stone-100 animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                   <img 
                     src={img}
                     alt={`${currentProduct.name} ${idx + 1}`}
                     className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                   />
                   <div className={fogOverlayClass}></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default MangosteenCard;