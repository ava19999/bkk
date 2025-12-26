import React from 'react';
import { Sprout, ShieldCheck, Truck, Star, ArrowRight, Globe, Scale } from 'lucide-react';

const MangosteenCard: React.FC = () => {
  return (
    // CHANGE: bg-[#fdfbf7] -> bg-[#041C12]
    <section className="relative z-30 w-full bg-[#041C12] py-24 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* KOLOM KIRI */}
        <div className="flex flex-col h-full">
             <div className="flex justify-start mb-4">
                <Star size={24} className="text-red-600" />
             </div>
             <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                Popular Product
             </p>

            {/* CHANGE: text-green-950 -> text-white */}
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight shrink-0">
              Mangosteen <br /> The <span className="text-red-600">Queen of Fruits</span>
            </h3>
            
            <p className="text-stone-400 text-lg font-light mb-10 leading-relaxed border-l-2 border-red-600 pl-6 shrink-0">
               Indonesia's Superfood Commodity. Known for its sweet, juicy white flesh and deep purple rind, harvested at the peak of perfection.
            </p>

            <div className="space-y-8 mb-12">
                {/* Highlight 1 */}
                <div className="flex gap-5">
                    {/* CHANGE: bg-white -> bg-white/10, text-green-800 -> text-white */}
                    <div className="bg-white/10 p-4 rounded-full shadow-sm text-white shrink-0 h-fit border border-white/10">
                        <Sprout size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Fresh & Traceable</h4>
                        <p className="text-stone-400 text-sm leading-relaxed font-light">
                          Directly sourced from registered farmers with transparent tracking from harvest to shipment.
                        </p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="bg-white/10 p-4 rounded-full shadow-sm text-white shrink-0 h-fit border border-white/10">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">International Standard</h4>
                        <p className="text-stone-400 text-sm leading-relaxed font-light">
                          GACC certified packaging house ensuring global export quality compliance.
                        </p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="bg-white/10 p-4 rounded-full shadow-sm text-white shrink-0 h-fit border border-white/10">
                        <Truck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Reliable Supply</h4>
                        <p className="text-stone-400 text-sm leading-relaxed font-light">
                          Consistent volume availability during harvest seasons to meet your market demands.
                        </p>
                    </div>
                </div>
            </div>

            {/* FORMULIR REQUEST QUOTATION */}
            <div className="mt-auto pt-8 border-t border-white/10">
                <h4 className="font-serif text-xl text-white mb-6 flex items-center gap-3">
                   <span className="w-8 h-[1px] bg-red-600"></span>
                   Get a Quotation
                </h4>
                
                <div className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Input Negara */}
                      <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Globe className="text-stone-500 group-focus-within:text-red-600 transition-colors" size={16} />
                          </div>
                          {/* CHANGE: bg-white -> bg-white/5, border-stone-200 -> border-white/10, text-stone-700 -> text-white */}
                          <input 
                            type="text" 
                            className="block w-full pl-10 pr-3 py-4 text-sm text-white bg-white/5 border border-white/10 rounded-sm focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder:text-stone-500 font-light shadow-sm" 
                            placeholder="Destination Country" 
                          />
                      </div>

                      {/* Input Berat */}
                      <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Scale className="text-stone-500 group-focus-within:text-red-600 transition-colors" size={16} />
                          </div>
                          <input 
                            type="number" 
                            className="block w-full pl-10 pr-3 py-4 text-sm text-white bg-white/5 border border-white/10 rounded-sm focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder:text-stone-500 font-light shadow-sm" 
                            placeholder="Volume (MT)" 
                          />
                      </div>
                   </div>

                   {/* Tombol Submit */}
                   <button className="w-full group inline-flex items-center justify-center gap-2 py-4 bg-white text-green-950 text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-red-600 hover:text-white transition-all shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-0.5">
                       Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
            </div>

        </div>

        {/* KOLOM KANAN */}
        <div className="flex flex-col gap-6 h-full pt-0 md:pt-20">
            <div className="flex-1 relative w-full min-h-[250px] rounded-sm overflow-hidden shadow-lg group border border-white/10">
               <img 
                 src="https://images.unsplash.com/photo-1591462619084-28b3c9597375?auto=format&fit=crop&q=80&w=800"
                 alt="Mangosteen Orchard"
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="flex-1 relative w-full min-h-[250px] rounded-sm overflow-hidden shadow-lg group border border-white/10">
               <img 
                 src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800"
                 alt="Premium Mangosteen"
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>
        </div>

      </div>
    </section>
  );
};

export default MangosteenCard;