import React from 'react';
import { Handshake, HeartHandshake, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ValuesSection: React.FC = () => {
  const { t, language } = useLanguage(); // Ambil 'language' untuk cek kondisi jika perlu

  // BARIS 1: Urutan Folder A - Z
  const bgRow1 = [
    encodeURI("/images/buah/alpukat/57797b0d2866fea382c3d3733e4a52ca.jpg"),
    encodeURI("/images/buah/buah naga/4bd95663e59c77c62f6703d73a60c521.jpg"),
    encodeURI("/images/buah/duren/1e693c9a491dac24ae9f00a383aff9f1.jpg"),
    encodeURI("/images/buah/mangga/058dd8710180392aba22f28e6be62a89.jpg"),
    encodeURI("/images/buah/manggis/04d24571d83174a6ce2b388889e0f9d7.jpg"),
    encodeURI("/images/buah/melon/7e95a52ef10c6c6e393cd601ebca9e38.jpg"),
    encodeURI("/images/buah/nanas/bff552ba7a17a4cad1b5be6813e508ba.jpg"),
    encodeURI("/images/buah/salak/0d34951d7917a30bc40ad39a12a11b86.jpg"),
    encodeURI("/images/buah/semangka/3ef69e4351a7b086f44fa5263ee2977b.jpg")
  ];

  // BARIS 2: Urutan Folder Z - A
  const bgRow2 = [
    encodeURI("/images/buah/semangka/c81a24807bccc66982c36705cd98fa81.jpg"),
    encodeURI("/images/buah/salak/26cd2d3889fecf0db7d48da0e56c6ef6.jpg"),
    encodeURI("/images/buah/nanas/d806a750fa99f788d52f03b7269ad0f9.jpg"),
    encodeURI("/images/buah/melon/9b826d603c2cbd62cd8b893ef83b314a.jpg"),
    encodeURI("/images/buah/manggis/2a0990b6987bd640d14d85c5cf40c222.jpg"),
    encodeURI("/images/buah/mangga/6e90afdc6e5114186fc4bc48b8aaa225.jpg"),
    encodeURI("/images/buah/duren/5f651ba99fe439b516d767983b90c26f.jpg"),
    encodeURI("/images/buah/buah naga/73c4177891144a5bc19111758c2a041c.jpg"),
    encodeURI("/images/buah/alpukat/82b256f2eb90675b14621beb57436aaa.jpg")
  ];

  const displayBgRow1 = [...bgRow1, ...bgRow1, ...bgRow1, ...bgRow1];
  const displayBgRow2 = [...bgRow2, ...bgRow2, ...bgRow2, ...bgRow2];

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0 overflow-hidden flex flex-col pointer-events-none">
         {/* ... (Background Animation Code Tetap Sama) ... */}
         <div className="flex-1 w-full relative overflow-hidden flex items-center bg-green-50">
            <div className="flex animate-scroll-right min-w-full h-full">
                {displayBgRow1.map((src, i) => (
                  <div key={`row1-${i}`} className="h-full w-[40vw] md:w-[25vw] shrink-0 mx-0">
                      <img src={src} className="w-full h-full object-cover" alt={`Fruit A-Z ${i}`} />
                  </div>
                ))}
            </div>
         </div>
         <div className="flex-1 w-full relative overflow-hidden flex items-center bg-green-50">
            <div className="flex animate-scroll-left min-w-full h-full">
                {displayBgRow2.map((src, i) => (
                  <div key={`row2-${i}`} className="h-full w-[40vw] md:w-[25vw] shrink-0 mx-0">
                      <img src={src} className="w-full h-full object-cover" alt={`Fruit Z-A ${i}`} />
                  </div>
                ))}
            </div>
         </div>
         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-green-50 to-transparent z-[2]"></div>
         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-50 to-transparent z-[2]"></div>
         <div className="absolute inset-0 bg-green-50/20 backdrop-blur-[1px] z-[1]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal-hidden">
           <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] bg-white border border-stone-200 px-3 py-1 rounded-full shadow-sm">{t.values.label}</span>
           
           {/* MODIFIKASI: Memecah judul agar "With Us" berwarna merah */}
           <h2 className="text-4xl md:text-5xl font-serif text-green-700 mt-4 drop-shadow-sm">
              {language === 'EN' ? (
                <>Why Work <span className="text-red-600 italic">With Us?</span></>
              ) : (
                // Fallback untuk Bahasa Indonesia (Mengapa Bekerja Sama Dengan Kami?)
                // Jika ingin spesifik: "Mengapa Bekerja Sama <span...>Dengan Kami?</span>"
                t.values.title
              )}
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
           {t.values.cards.map((card, i) => {
             const Icon = i === 0 ? Handshake : i === 1 ? HeartHandshake : Shield;
             return (
               <div key={i} className="relative overflow-hidden p-4 md:p-8 bg-white/60 backdrop-blur-xl border border-white/40 hover:border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default rounded-sm reveal-hidden text-center">
                 <div className="relative z-10">
                     <div className="mb-3 md:mb-6 w-10 h-10 md:w-14 md:h-14 bg-stone-50 rounded-full flex items-center justify-center shadow-sm border border-stone-100 mx-auto"><Icon className="text-red-600 w-5 h-5 md:w-7 md:h-7" /></div>
                     <h4 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-green-700">{card.title}</h4>
                     <p className="text-stone-600 leading-relaxed font-light text-xs md:text-sm">{card.desc}</p>
                 </div>
               </div>
             )
           })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;