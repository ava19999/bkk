import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { SERVICES } from './constants';
import { 
  ArrowRight, MapPin, Mail, Phone, CheckCircle2, Globe, TrendingUp, 
  Package, Leaf, Target, Scale, Clock, ShieldCheck, Banknote, 
  Sprout, Carrot, Flower2, Handshake, HeartHandshake, Shield 
} from 'lucide-react';

const App: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-hidden');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const allProducts = {
    fruits: [
      'Avocado', 'Harumanis Mango', 'Honey Sweet Pineapple', 'Mangosteen', 
      'Rockmelon', 'Salacca (Snake Head)', 'Watermelon', 'Durian', 'Dragon Fruit'
    ],
    vegetables: [
      'French Beans', 'Capsicum (Bell Pepper)', 'Honey Sweet Potato', 
      'Elephant Ginger', 'Young Ginger', 'Potato', 'Sweet Potato', 'Watercress'
    ],
    spices: [
      'Cinnamon', 'Vanilla', 'Black Pepper', 'Clove', 'Jasmine Flower', 'White Pepper'
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#fdfbf7] font-sans text-stone-600">
      {/* Texture halus di seluruh web */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ 
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` 
      }}></div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        {/* SECTION 1: ABOUT & HISTORY */}
        <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto reveal-hidden text-left relative">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none hidden lg:block">
              <Sprout size={400} />
           </div>

          <div className="flex justify-start mb-4">
             <Leaf size={24} className="text-orange-500" />
          </div>
          <p className="text-green-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Our History</p>
          
          <h2 className="text-3xl md:text-5xl font-serif text-green-950 leading-normal mb-16 pb-2 relative z-10">
            Established in 2013, legalized in 2016. <br/> Indonesia's <span className="italic text-orange-600">premier exporter</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <p className="text-stone-600 leading-relaxed font-light text-xl">
              PT. Bintang Kiat Kemuliaan (BKK) is dedicated to delivering the finest fresh fruits, vegetables, and flowers to the global market. We prioritize quality, consistency, and integrity in every shipment we make to the world.
            </p>
            
            <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                 <div className="bg-green-100 p-3 rounded-full text-green-800 shrink-0">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="font-serif text-xl text-green-950 mb-2">GACC Registered</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Our packaging house is legally registered at GACC <strong className="text-green-800 block mt-1">(Reg No. KEMTAN RI PH-32-73-0018-0418)</strong> for Mangosteen and Salacca, ensuring strict global quality standards.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX IMAGE BREAK */}
        <div className="w-full h-[60vh] bg-fixed bg-center bg-cover relative reveal-hidden" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?auto=format&fit=crop&q=80&w=2000")'
        }}>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white p-6 bg-black/10 backdrop-blur-[2px] rounded-lg border border-white/10">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-orange-200 drop-shadow-md">From Our Land</p>
                    <h2 className="text-4xl md:text-6xl font-serif italic drop-shadow-lg">"Preserving Nature's Freshness"</h2>
                </div>
            </div>
        </div>

        {/* SECTION 2: VISION & MISSION */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-stone-50 to-[#fdfbf7] border-y border-stone-200">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/40 rounded-l-[100px] hidden lg:block pointer-events-none"></div>
           
           <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              {/* Vision */}
              <div className="reveal-hidden">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-stone-100">
                    <Target size={16} className="text-orange-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Our Vision</span>
                 </div>
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-green-950 leading-[1.1] mb-8">
                   "To be the <span className="text-orange-600 italic">most trusted</span> exporter for fruits, vegetables, and flowers."
                 </h3>
                 <div className="pl-6 border-l-2 border-orange-500/30">
                    <p className="text-stone-600 text-lg font-light leading-relaxed">
                       Through a firm commitment and life-long integrity that we provide to every customer.
                    </p>
                 </div>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-stone-200/50 border border-white/50 reveal-hidden relative transform transition-transform hover:scale-[1.01] duration-500">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-900 p-3 rounded-xl text-white shadow-lg shadow-green-900/20">
                       <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif text-green-950 leading-none">Our Mission</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-1">Honesty & Commitment</p>
                    </div>
                 </div>
                 <p className="text-stone-500 mb-8 leading-relaxed font-light">
                   To cooperate with all stakeholders based on honesty, providing best services such as:
                 </p>
                 <div className="space-y-4">
                    {[
                      { icon: Banknote, title: "Competitive Prices", desc: "Best market value." },
                      { icon: Clock, title: "Precise Delivery", desc: "On-time logistics." },
                      { icon: ShieldCheck, title: "Finest Goods", desc: "Premium quality produce." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-5 p-4 bg-stone-50 rounded-2xl hover:bg-orange-50/50 transition-colors group cursor-default border border-stone-100 hover:border-orange-100">
                          <div className="bg-white p-3 rounded-full shadow-sm text-stone-400 group-hover:text-orange-600 transition-colors shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-green-950 text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                            <p className="text-xs text-stone-500">{item.desc}</p>
                          </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 3: CORE VALUES (BACKGROUND JABAT TANGAN LINE ART) */}
        <section className="py-24 px-6 relative overflow-hidden">
          
          {/* Background Image: Handshake Line Art - Dark Lines on Light BG */}
          {/* opacity-[0.08] membuatnya terlihat seperti watermark samar (abu-abu muda) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Handshake_icon_2016.svg/1200px-Handshake_icon_2016.svg.png" 
               alt="Handshake Watermark" 
               className="w-full md:w-3/4 h-auto object-contain opacity-[0.08]" 
             />
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-16 reveal-hidden">
               <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.3em] bg-white/50 px-2 py-1">Core Values</span>
               <h2 className="text-4xl md:text-5xl font-serif text-green-950 mt-3">Why Work With Us?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-hidden">
               {/* Trust */}
               <div className="p-8 bg-white/90 backdrop-blur-sm border border-stone-200 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-sm">
                    <Handshake className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950 group-hover:text-orange-600 transition-colors">Trust</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We build your trust by giving excellent quality of products and services. These have made us grow over the decades.
                 </p>
               </div>

               {/* Commitment */}
               <div className="p-8 bg-white/90 backdrop-blur-sm border border-stone-200 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-sm">
                    <HeartHandshake className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950 group-hover:text-orange-600 transition-colors">Commitment</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We stand on a firm commitment of being the most trusted and developed exporter for Indonesian fresh fruits and vegetables.
                 </p>
               </div>

               {/* Integrity */}
               <div className="p-8 bg-white/90 backdrop-blur-sm border border-stone-200 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-sm">
                    <Shield className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950 group-hover:text-orange-600 transition-colors">Integrity</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We uphold noble values rather than winning sectoral gain. We believe in fair businesses for everyone.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: STATS & GLOBAL REACH (World Map Background) */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* Map Background - Style sama dengan handshake */}
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="w-full h-auto object-cover opacity-[0.05]" />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="reveal-hidden relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                 {/* Card 1 */}
                 <div className="bg-[#fdfbf7]/80 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-stone-100 hover:border-orange-200 transition-colors">
                    <Globe className="text-orange-600 mb-4" size={32} />
                    <h3 className="text-5xl font-serif mb-2 text-green-950">7+</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Export Countries</p>
                    <p className="text-sm mt-4 text-stone-500">China, Singapore, Thailand, Malaysia, UAE, Bangladesh, Canada.</p>
                 </div>
                 {/* Card 2 */}
                 <div className="bg-green-900 text-white p-8 shadow-xl mt-8 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={100}/></div>
                    <TrendingUp className="text-orange-400 mb-4 relative z-10" size={32} />
                    <h3 className="text-5xl font-serif mb-2 relative z-10">100+</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-200 relative z-10">Happy Clients</p>
                    <p className="text-sm mt-4 text-green-100/80 relative z-10">Trusting us annually.</p>
                 </div>
                 {/* Card 3 */}
                 <div className="bg-[#fdfbf7]/80 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-stone-100 hover:border-orange-200 transition-colors">
                    <Package className="text-orange-600 mb-4" size={32} />
                    <h3 className="text-5xl font-serif mb-2 text-green-950">100<span className="text-2xl">MT</span></h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Monthly Capacity</p>
                    <p className="text-sm mt-4 text-stone-500">For each commodity.</p>
                 </div>
                 {/* Card 4 */}
                 <div className="bg-[#fdfbf7]/80 backdrop-blur-sm p-8 shadow-sm mt-8 rounded-sm border border-stone-100 hover:border-orange-200 transition-colors">
                    <CheckCircle2 className="text-orange-600 mb-4" size={32} />
                    <h3 className="text-5xl font-serif mb-2 text-green-950">GACC</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Certified</p>
                    <p className="text-sm mt-4 text-stone-500">Registered Packaging House.</p>
                 </div>
              </div>
            </div>
            
            <div className="reveal-hidden order-1 lg:order-2 lg:pl-10">
              <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Global Reach</span>
              <h2 className="text-5xl md:text-7xl font-serif text-green-950 mb-8 leading-tight">
                Connecting <br /> <span className="italic text-green-800">Indonesian Harvests</span> to the World.
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-10 text-lg">
                We uphold our decision-making process based on noble values rather than winning sectoral gain. We firmly believe in the importance of fair businesses for everyone.
              </p>
              <button className="border-b border-green-900 pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-orange-600 hover:border-orange-600 transition-colors">
                View Export Map
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRODUCT VISUAL & FULL LIST (SIDE BY SIDE) */}
        <section className="py-24 bg-[#fdfbf7] relative">
           <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

           <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6 reveal-hidden">
                <div className="mb-4 md:mb-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-2">Our Goods</p>
                  <h3 className="text-3xl md:text-5xl font-serif text-green-950">Product Catalogue</h3>
                </div>
                <div className="text-right">
                   <p className="text-stone-500 text-sm font-light">Explore our premium selection of 23 commodities.</p>
                </div>
              </div>

              {/* GRID LAYOUT: 2 COLUMNS */}
              <div className="grid lg:grid-cols-2 gap-10 items-start reveal-hidden">
                
                {/* LEFT COLUMN: 4 Featured Photos (2x2 Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {SERVICES.map((item, idx) => (
                    <div key={item.id} className="group relative h-[320px] overflow-hidden cursor-pointer bg-stone-100 rounded-sm shadow-md hover:shadow-xl transition-all duration-500">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2 text-orange-400">{item.type}</p>
                        <h4 className="text-2xl font-serif italic mb-4">{item.name}</h4>
                        <div className="flex items-center justify-between border-t border-white/20 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          <span className="text-[9px] font-bold tracking-widest uppercase">{item.startingPrice}</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT COLUMN: Static List (Clean) */}
                <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-8 md:p-10 h-full flex flex-col justify-center">
                   
                   {/* Fruits Section */}
                   <div className="mb-10">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-orange-600 mb-6 border-b border-orange-100 pb-2">
                         <Sprout size={24} /> Fruits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                         {allProducts.fruits.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* Vegetables Section */}
                   <div className="mb-10">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-green-700 mb-6 border-b border-green-100 pb-2">
                         <Carrot size={24} /> Vegetables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                         {allProducts.vegetables.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* Spices Section */}
                   <div>
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-stone-700 mb-6 border-b border-stone-200 pb-2">
                         <Flower2 size={24} /> Spices & Flowers
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                         {allProducts.spices.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>

                </div>

              </div>
           </div>
        </section>

        {/* SECTION 6: PARTNER WITH US (Standalone Bottom CTA) */}
        <section className="py-32 bg-green-950 text-white relative overflow-hidden">
           {/* Background Image: Jelas */}
           <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=2400" 
                alt="Global Shipping Port" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-900/40"></div>
           </div>

           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
              <div className="w-16 h-1 bg-orange-600 mb-8 mx-auto shadow-[0_0_20px_rgba(234,88,12,0.8)]"></div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
                 Partner <br/> <span className="italic text-green-200">With Us.</span>
              </h2>
              <p className="text-white text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-xl">
                  We are looking forward to working with you to bring nature's finest to your market.
              </p>
              <button className="group relative px-12 py-6 bg-white text-green-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all overflow-hidden shadow-2xl hover:shadow-orange-900/50 rounded-sm mx-auto flex items-center gap-4">
                  Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#121413] text-white pt-24 pb-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="col-span-1">
             <a href="#" className="block mb-8">
               <h2 className="text-4xl font-serif tracking-widest uppercase">BKK</h2>
               <p className="text-[9px] font-medium tracking-[0.3em] uppercase opacity-60">PT. Bintang Kiat Kemuliaan</p>
            </a>
            <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
              Trust, Commitment, Integrity.
            </p>
            <div className="text-[10px] text-stone-500 uppercase tracking-widest border-t border-white/10 pt-4">
              Fruits, Vegetables, and Flowers Exporter
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-orange-500">Office Addresses</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                 <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
                 <div>
                   <strong className="text-white block text-xs uppercase tracking-wide mb-1">Main Office</strong>
                   <p className="text-sm text-stone-300 font-light leading-relaxed">
                     Jl. Sawit Darangdan No. 3, Purwakarta<br/>
                     West Java 41163 - Indonesia
                   </p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
                 <div>
                   <strong className="text-white block text-xs uppercase tracking-wide mb-1">Operational Warehouse</strong>
                   <p className="text-sm text-stone-300 font-light leading-relaxed">
                     Husein Sastranegara Airport<br/>
                     Cargo Park C.49 Jl. Padjajaran No. 156,<br/>
                     Bandung, West Java 40174
                   </p>
                 </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-orange-500">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group cursor-pointer">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <span>+62 22 6016 306</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group cursor-pointer">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <span>+62 817 687 8166</span>
              </div>
              <div className="h-[1px] bg-white/10 w-full my-4"></div>
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group cursor-pointer">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <span>info@bkkemuliaan.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group cursor-pointer">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <span>Sales-marketing.2@bkkemuliaan.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group cursor-pointer">
                 <Globe size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <span>www.bkkemuliaan.com</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-orange-500">Quick Links</h4>
             <ul className="space-y-4 text-sm text-stone-300 font-light">
               <li className="hover:text-orange-400 cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-orange-400 cursor-pointer transition-colors">Product Catalogue</li>
               <li className="hover:text-orange-400 cursor-pointer transition-colors">GACC Certifications</li>
               <li className="hover:text-orange-400 cursor-pointer transition-colors">Request Quote</li>
             </ul>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <p>© 2024 PT. BINTANG KIAT KEMULIAAN.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;