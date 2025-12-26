import React from 'react';
import { Apple, Carrot, Flower } from 'lucide-react';

const Hero: React.FC = () => {
  // 1. Definisi Daftar Produk per Kategori (Sesuai App.tsx)
  const fruits = [
    'AVOCADO', 'HARUMANIS MANGO', 'HONEY SWEET PINEAPPLE', 'MANGOSTEEN', 
    'ROCKMELON', 'SALACCA (SNAKE HEAD)', 'WATERMELON', 'DURIAN', 'DRAGON FRUIT'
  ];

  const vegetables = [
    'FRENCH BEANS', 'CAPSICUM (BELL PEPPER)', 'HONEY SWEET POTATO', 
    'ELEPHANT GINGER', 'YOUNG GINGER', 'POTATO', 'SWEET POTATO', 'WATERCRESS'
  ];

  const spices = [
    'CINNAMON', 'VANILLA', 'BLACK PEPPER', 'CLOVE', 'JASMINE FLOWER', 'WHITE PEPPER'
  ];

  // 2. Menggabungkan semua untuk Running Text (Urut: Buah -> Sayur -> Rempah)
  const allCommodities = [...fruits, ...vegetables, ...spices];
  const displayList = [...allCommodities, ...allCommodities];

  // 3. Fungsi Helper untuk Ikon
  const getIcon = (item: string) => {
    // CHANGE: text-orange-600 -> text-red-600 (semua icon)
    if (fruits.includes(item)) return <Apple size={14} className="text-red-600" />;
    if (vegetables.includes(item)) return <Carrot size={14} className="text-red-600" />;
    return <Flower size={14} className="text-red-600" />; // Untuk Spices & Flowers
  };

  // 4. Fungsi Scroll ke Popular Product
  const scrollToPopular = () => {
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Tetap h-screen agar menutup bagian putih di bawah
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-green-950">
      
      {/* Definisi Animasi Marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2400" 
          alt="Fresh Indonesian Mangosteen Harvest" 
          className="w-full h-full object-cover opacity-80 transition-transform duration-[60s] scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/40 to-green-950/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 mt-32 md:mt-40 max-w-5xl">
        
        {/* PERUBAHAN: Div diubah menjadi Button dengan onClick */}
        <button 
            onClick={scrollToPopular}
            className="group inline-flex items-center gap-3 border border-white/20 pl-1 pr-4 py-1 rounded-full mb-8 backdrop-blur-sm bg-white/5 animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all cursor-pointer"
        >
            {/* CHANGE: bg-orange-600 -> bg-red-600, group-hover:bg-orange-500 -> group-hover:bg-red-500 */}
            <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider group-hover:bg-red-500 transition-colors">HOT</span>
            {/* CHANGE: group-hover:text-orange-200 -> group-hover:text-red-200 */}
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase group-hover:text-red-200 transition-colors">
             Premium Mangosteen
            </p>
        </button>
        
        <h1 className="text-5xl md:text-8xl font-serif font-medium mb-6 leading-none md:leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 tracking-tight">
          Trusted Indonesian <br />
          {/* CHANGE: text-orange-200 -> text-red-200 */}
          <span className="italic text-red-200 font-light">Fresh Produce Exporter</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base md:text-xl font-light tracking-wide leading-relaxed opacity-90 text-stone-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mb-10">
          Bridging Indonesia's Finest Harvest to the Global Market. <br className="hidden md:block"/> 
          Proudly serving China, Singapore, Thailand, Malaysia, UAE, Bangladesh, and Canada.
        </p>
      </div>

      {/* RUNNING TEXT (MARQUEE) */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-green-950/40 backdrop-blur-md border-t border-white/10">
          <div className="flex overflow-hidden py-4">
             <div className="flex animate-scroll">
                
                {/* Kita render list yang sudah diduplikasi */}
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