import React from 'react';
import { Target, Scale, Banknote, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VisionSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="pt-4 pb-12 md:pt-4 md:pb-16 relative overflow-hidden bg-green-50">
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50 to-transparent pointer-events-none z-0"></div>
       <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-hidden">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-stone-200">
                <Target size={16} className="text-red-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">{t.vision.label}</span>
             </div>
             
             {/* MODIFIKASI: Hanya "trusted exporter for fruits" yang merah */}
             <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-green-700 leading-[1.1] mb-8">
               {language === 'EN' ? (
                 <>
                   "To be the most <span className="text-red-600 italic">trusted exporter for fruits</span>, vegetables, and flowers."
                 </>
               ) : (
                 // Fallback untuk Bahasa Indonesia (atau Anda bisa menyesuaikan split-nya juga)
                 t.vision.text
               )}
             </h3>
             
             <div className="pl-6 border-l-2 border-red-600/30">
                <p className="text-stone-600 text-lg font-light leading-relaxed">{t.vision.subText}</p>
             </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100 reveal-hidden relative transform transition-transform hover:scale-[1.01] duration-500">
             <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 p-3 rounded-xl text-green-600 shadow-sm"><Scale size={24} /></div>
                <div>
                    <h3 className="text-3xl font-serif text-green-700 leading-none">{t.vision.missionTitle}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mt-1">{t.vision.missionSub}</p>
                </div>
             </div>
             <p className="text-stone-600 mb-8 leading-relaxed font-light">{t.vision.missionDesc}</p>
             <div className="space-y-4">
                {t.vision.points.map((point, idx) => {
                  const Icon = idx === 0 ? Banknote : idx === 1 ? Clock : ShieldCheck;
                  return (
                    <div key={idx} className="flex items-center gap-5 p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group cursor-default border border-stone-100 hover:border-red-200">
                        <div className="bg-white p-3 rounded-full shadow-sm text-stone-500 group-hover:text-red-600 transition-colors shrink-0"><Icon size={20} /></div>
                        <div>
                          <h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-1">{point.title}</h4>
                          <p className="text-xs text-stone-500">{point.desc}</p>
                        </div>
                    </div>
                  )
                })}
             </div>
          </div>
       </div>
    </section>
  );
};

export default VisionSection;