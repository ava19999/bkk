import React from 'react';

const Hero: React.FC = () => {
  return (
    // Kembali ke h-[95vh] sesuai permintaan "sebelumnya"
    <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-green-950 pb-10">
      {/* Background Image - Rich Fruit/Nature */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2400" 
          alt="Fresh Indonesian Mangosteen Harvest" 
          className="w-full h-full object-cover opacity-80 transition-transform duration-[60s] scale-100 hover:scale-105"
        />
        {/* Gradient Overlay - Warmer for "Golden Hour" Fruit feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/40 to-green-950/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      {/* Tetap menggunakan mt-32 md:mt-40 agar tidak bertabrakan dengan Header */}
      <div className="relative z-10 text-center text-white px-6 mt-32 md:mt-40 max-w-5xl">
        <div className="inline-flex items-center gap-3 border border-white/20 pl-1 pr-4 py-1 rounded-full mb-8 backdrop-blur-sm bg-white/5 animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:bg-white/10 transition-colors cursor-default">
            <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
             Harvest Season 2024 Open
            </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-medium mb-6 leading-none md:leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 tracking-tight">
          Nature's <br />
          <span className="italic text-orange-200 font-light">Finest Yield</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-base md:text-xl font-light tracking-wide leading-relaxed opacity-90 text-stone-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mb-10">
          Indonesia's premium exporter of fresh fruits and spices. <br className="hidden md:block"/> Delighting global markets with trust, commitment, and integrity.
        </p>

        {/* BAGIAN TOMBOL DIHAPUS SESUAI PERMINTAAN */}
        
      </div>
    </section>
  );
};

export default Hero;