
import React from 'react';
import { ChevronDown, Sprout, Globe, Scale } from 'lucide-react';

const BookingWidget: React.FC = () => {
  return (
    <div className="relative z-30 -mt-16 md:-mt-24 px-4 mb-20">
      <div className="max-w-6xl mx-auto bg-[#fdfbf7] shadow-2xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-stone-200 border-t-4 border-orange-500 rounded-sm">
        
        {/* Commodity Select */}
        <div className="flex-1 p-6 md:p-8 cursor-pointer hover:bg-orange-50 transition-colors group relative">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-hover:text-orange-600 transition-colors">Commodity</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Sprout size={20} className="text-green-800" />
               <span className="text-xl font-serif text-green-950">Select Product</span>
            </div>
            <ChevronDown size={16} className="text-stone-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </div>

        {/* Destination */}
        <div className="flex-1 p-6 md:p-8 cursor-pointer hover:bg-orange-50 transition-colors group">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-hover:text-orange-600 transition-colors">Destination</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Globe size={20} className="text-green-800" />
               <span className="text-xl font-serif text-green-950">Country / Port</span>
            </div>
            <ChevronDown size={16} className="text-stone-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </div>

        {/* Volume */}
        <div className="w-full md:w-64 p-6 md:p-8 cursor-pointer hover:bg-orange-50 transition-colors group">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-hover:text-orange-600 transition-colors">Volume</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Scale size={20} className="text-green-800" />
               <span className="text-xl font-serif text-green-950">Est. Tonnage</span>
            </div>
            <ChevronDown size={16} className="text-stone-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </div>

        {/* CTA */}
        <button className="bg-green-900 hover:bg-green-950 text-white p-6 md:p-8 md:w-64 flex items-center justify-center gap-2 font-bold uppercase tracking-[0.15em] text-xs transition-all relative overflow-hidden group">
          <span className="relative z-10 group-hover:translate-x-1 transition-transform">Request Quote</span>
          <div className="absolute inset-0 bg-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
