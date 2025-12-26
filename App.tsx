import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MangosteenCard from './components/MangosteenCard';
import { SERVICES } from './constants';
import { 
  ArrowRight, MapPin, Mail, Phone, CheckCircle2, Globe, TrendingUp, 
  Package, Leaf, Target, Scale, Clock, ShieldCheck, Banknote, 
  Sprout, Carrot, Flower2, Handshake, HeartHandshake, Shield, X 
} from 'lucide-react';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  
  const [isContactOpen, setIsContactOpen] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1600387845879-a4713f764110?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1591462619084-28b3c9597375?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=1200", 
  ];

  const displayGallery = [...galleryImages, ...galleryImages, ...galleryImages];

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    const animate = () => {
      if (scrollContainer) {
        if (!isDown.current) {
           scrollContainer.scrollLeft += 1; 
        }
        const totalWidth = scrollContainer.scrollWidth;
        const oneSetWidth = totalWidth / 3;
        if (scrollContainer.scrollLeft >= oneSetWidth * 2) {
            scrollContainer.scrollLeft -= oneSetWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    setIsGrabbing(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDown.current = false; 
      setIsGrabbing(false);   
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const allProducts = {
    fruits: ['Avocado', 'Harumanis Mango', 'Honey Sweet Pineapple', 'Mangosteen', 'Rockmelon', 'Salacca', 'Watermelon', 'Durian', 'Dragon Fruit'],
    vegetables: ['French Beans', 'Capsicum', 'Honey Sweet Potato', 'Elephant Ginger', 'Young Ginger', 'Potato', 'Sweet Potato', 'Watercress'],
    spices: ['Cinnamon', 'Vanilla', 'Black Pepper', 'Clove', 'Jasmine Flower', 'White Pepper']
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-stone-600">
      
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ 
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` 
      }}></div>

      <Header isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
      
      <main className="relative z-10">
        <div id="home">
            <Hero />
        </div>
        
        <div id="popular" className="scroll-mt-24">
            <MangosteenCard />
        </div>
        
        {/* SECTION 1: ABOUT */}
        <section id="about" className="py-20 md:py-32 px-6 max-w-6xl mx-auto reveal-hidden text-left relative scroll-mt-24">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none hidden lg:block">
              <Sprout size={400} className="text-stone-100" />
           </div>
          <div className="flex justify-start mb-4">
             <Leaf size={24} className="text-red-600" />
          </div>
          <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Our History</p>
          
          <h2 className="text-3xl md:text-5xl font-serif text-green-950 leading-normal mb-16 pb-2 relative z-10">
            Established in 2013, legalized in 2016. <br/> Indonesia's <span className="italic text-red-600">premier exporter</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <p className="text-stone-600 leading-relaxed font-light text-xl">
              PT. Bintang Kiat Kemuliaan (BKK) is dedicated to delivering the finest fresh fruits, vegetables, and flowers to the global market. We prioritize quality, consistency, and integrity in every shipment we make to the world.
            </p>
            <div className="bg-stone-50 border border-stone-200 p-8 rounded-sm shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                 <div className="bg-green-100 p-3 rounded-full text-green-800 shrink-0">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="font-serif text-xl text-green-950 mb-2">GACC Registered</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Our packaging house is legally registered at GACC <strong className="text-green-950 block mt-1">(Reg No. KEMTAN RI PH-32-73-0018-0418)</strong> for Mangosteen and Salacca, ensuring strict global quality standards.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="relative w-full h-[60vh] bg-white group reveal-hidden border-y border-stone-100">
            <div 
              ref={scrollRef}
              className={`flex h-full w-full overflow-x-hidden select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {displayGallery.map((src, index) => (
                    <div key={index} className="h-full min-w-[50vw] md:min-w-[33vw] lg:min-w-[25vw] border-r border-white relative shrink-0">
                         <img 
                           src={src} 
                           alt={`Gallery ${index}`} 
                           className="w-full h-full object-cover pointer-events-none transition-all duration-700" 
                           draggable={false} 
                         />
                    </div>
                ))}
            </div>
            <style>{`.overflow-x-hidden::-webkit-scrollbar { display: none; }`}</style>
        </section>

        {/* SECTION 2: VISION & MISSION */}
        <section className="py-24 relative overflow-hidden bg-white border-b border-stone-100">
           <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal-hidden">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full shadow-sm mb-8 border border-stone-200">
                    <Target size={16} className="text-red-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Our Vision</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-green-950 leading-[1.1] mb-8">
                   "To be the <span className="text-red-600 italic">most trusted</span> exporter for fruits, vegetables, and flowers."
                 </h3>
                 <div className="pl-6 border-l-2 border-red-600/30">
                    <p className="text-stone-600 text-lg font-light leading-relaxed">
                       Through a firm commitment and life-long integrity that we provide to every customer.
                    </p>
                 </div>
              </div>
              
              <div className="bg-stone-50 p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-200 reveal-hidden relative transform transition-transform hover:scale-[1.01] duration-500">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-100 p-3 rounded-xl text-green-800 shadow-sm">
                       <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif text-green-950 leading-none">Our Mission</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mt-1">Honesty & Commitment</p>
                    </div>
                 </div>
                 <p className="text-stone-600 mb-8 leading-relaxed font-light">
                   To cooperate with all stakeholders based on honesty, providing best services such as:
                 </p>
                 <div className="space-y-4">
                    {[
                      { icon: Banknote, title: "Competitive Prices", desc: "Best market value." },
                      { icon: Clock, title: "Precise Delivery", desc: "On-time logistics." },
                      { icon: ShieldCheck, title: "Finest Goods", desc: "Premium quality produce." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-5 p-4 bg-white rounded-2xl hover:bg-stone-100 transition-colors group cursor-default border border-stone-200 hover:border-red-200">
                          <div className="bg-stone-100 p-3 rounded-full shadow-sm text-stone-500 group-hover:text-red-600 transition-colors shrink-0">
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

        {/* SECTION 3: CORE VALUES */}
        <section className="py-32 px-6 relative overflow-hidden bg-white">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-16 reveal-hidden">
               <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] bg-stone-50 border border-stone-200 px-3 py-1 rounded-full">Core Values</span>
               <h2 className="text-4xl md:text-5xl font-serif text-green-950 mt-4">Why Work With Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-hidden">
               <div className="p-8 bg-stone-50 border border-stone-200 hover:border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100">
                    <Handshake className="text-red-600" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950">Trust</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We build your trust by giving excellent quality of products and services. These have made us grow over the decades.
                 </p>
               </div>
               
               <div className="p-8 bg-stone-50 border border-stone-200 hover:border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100">
                    <HeartHandshake className="text-red-600" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950">Commitment</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We stand on a firm commitment of being the most trusted and developed exporter for Indonesian fresh fruits and vegetables.
                 </p>
               </div>
               
               <div className="p-8 bg-stone-50 border border-stone-200 hover:border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100">
                    <Shield className="text-red-600" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-green-950">Integrity</h4>
                 <p className="text-stone-600 leading-relaxed font-light text-sm">
                   We uphold noble values rather than winning sectoral gain. We believe in fair businesses for everyone.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: STATS */}
        <section id="global" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="w-full h-auto object-cover opacity-[0.03]" />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="reveal-hidden relative order-2 lg:order-1">
              
              {/* FIX: Ubah grid-cols-2 menjadi grid-cols-1 pada mobile (grid-cols-1 sm:grid-cols-2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 
                 {/* FIX: Ubah padding p-8 menjadi p-6 pada mobile (p-6 md:p-8) agar lebih lega */}
                 <div className="bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <Globe className="text-red-600 mb-4" size={32} />
                        {/* FIX: Ubah text-5xl jadi text-4xl di mobile */}
                        <h3 className="text-4xl md:text-5xl font-serif mb-2 text-green-950">7+</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Export Countries</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-600">China, Singapore, Thailand, Malaysia, UAE, Bangladesh, Canada.</p>
                 </div>

                 <div className="bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <TrendingUp className="text-red-600 mb-4" size={32} />
                        <h3 className="text-4xl md:text-5xl font-serif mb-2 text-green-950">100+</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Happy Clients</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-600">Trusting us annually.</p>
                 </div>

                 <div className="bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <Package className="text-red-600 mb-4" size={32} />
                        <h3 className="text-4xl md:text-5xl font-serif mb-2 text-green-950">100<span className="text-xl md:text-2xl">MT</span></h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Monthly Capacity</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-600">For each commodity.</p>
                 </div>

                 <div className="bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <CheckCircle2 className="text-red-600 mb-4" size={32} />
                        <h3 className="text-4xl md:text-5xl font-serif mb-2 text-green-950">GACC</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Certified</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-600">Registered Packaging House.</p>
                 </div>

              </div>
            </div>
            <div className="reveal-hidden order-1 lg:order-2 lg:pl-10">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Global Reach</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
                Connecting <br /> 
                <span className="italic text-red-600">Indonesian Harvests</span> to the World.
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-10 text-lg">
                We uphold our decision-making process based on noble values rather than winning sectoral gain. We firmly believe in the importance of fair businesses for everyone.
              </p>
              <button className="border-b border-stone-300 pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-red-600 hover:border-red-600 transition-colors text-green-950">
                View Export Map
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRODUCTS (ID 'catalogue') */}
        <section id="catalogue" className="py-24 bg-white relative scroll-mt-24">
           <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6 reveal-hidden">
                <div className="mb-4 md:mb-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2">Our Goods</p>
                  <h3 className="text-3xl md:text-5xl font-serif text-green-950">Product Catalogue</h3>
                </div>
                <div className="text-right">
                   <p className="text-stone-500 text-sm font-light">Explore our premium selection of 23 commodities.</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10 items-stretch reveal-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {SERVICES.map((item, idx) => (
                    <div key={item.id} className="group relative h-[340px] overflow-hidden cursor-pointer bg-stone-100 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 border border-stone-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2 text-red-400">{item.type}</p>
                        <h4 className="text-2xl font-serif italic mb-4 text-white">{item.name}</h4>
                        <div className="flex items-center justify-between border-t border-white/20 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          <span className="text-[9px] font-bold tracking-widest uppercase">{item.startingPrice}</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 md:p-8 h-full flex flex-col justify-center">
                   <div className="mb-8">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-red-600 mb-4 border-b border-stone-200 pb-2">
                         <Sprout size={24} /> Fruits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.fruits.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <div className="mb-8">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-green-600 mb-4 border-b border-stone-200 pb-2">
                         <Carrot size={24} /> Vegetables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.vegetables.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-yellow-500 mb-4 border-b border-stone-200 pb-2">
                         <Flower2 size={24} /> Spices & Flowers
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.spices.map((item, i) => (
                            <li key={i} className="text-stone-600 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* SECTION 6: PARTNER */}
        <section className="py-32 bg-white text-stone-600 relative overflow-hidden">
           {/* IMAGE BACKGROUND REMOVED & BG CHANGED TO WHITE */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
              <div className="w-16 h-1 bg-red-600 mb-8 mx-auto shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight text-green-950 drop-shadow-sm">
                 Partner <br/> <span className="italic text-red-600">With Us.</span>
              </h2>
              <p className="text-stone-600 text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                  We are looking forward to working with you to bring nature's finest to your market.
              </p>
              
              <button 
                onClick={() => setIsContactOpen(true)}
                className="group relative px-12 py-6 bg-green-950 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all overflow-hidden shadow-2xl hover:shadow-red-900/50 rounded-sm mx-auto flex items-center gap-4"
              >
                  Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#010805] text-white pt-24 pb-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          <div className="col-span-1">
             <a href="#" className="flex items-center gap-4 mb-8 group">
                <img 
                  src="/images/logo.png" 
                  alt="BKK Logo" 
                  className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div>
                   <h2 className="text-4xl font-serif tracking-widest uppercase text-white">BKK</h2>
                   <p className="text-[9px] font-medium tracking-[0.3em] uppercase opacity-60">PT. Bintang Kiat Kemuliaan</p>
                </div>
             </a>
             <p className="text-stone-400 text-sm font-light leading-relaxed mb-2">Trust, Commitment, Integrity.</p>
             <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-2 mb-8">Fruits, Vegetables, and Flowers Exporter</p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">Office Addresses</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                 <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
                 <div>
                   <strong className="text-white block text-xs uppercase tracking-wide mb-1">Main Office</strong>
                   <a 
                      href="https://www.google.com/maps/search/?api=1&query=Jl.+Sawit+Darangdan+No.+3,+Purwakarta,+West+Java+41163+-+Indonesia"
                      target="_blank"
                      rel="noreferrer" 
                      className="text-sm text-stone-300 font-light leading-relaxed hover:text-red-400 transition-colors block"
                   >
                     Jl. Sawit Darangdan No. 3, Purwakarta<br/>West Java 41163 - Indonesia
                   </a>
                 </div>
              </div>
              <div className="flex gap-4">
                 <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
                 <div>
                   <strong className="text-white block text-xs uppercase tracking-wide mb-1">Operational Warehouse</strong>
                   <a 
                      href="https://www.google.com/maps/search/?api=1&query=Husein+Sastranegara+Airport,+Cargo+Park+C.49+Jl.+Padjajaran+No.+156,+Bandung,+West+Java+40174"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-stone-300 font-light leading-relaxed hover:text-red-400 transition-colors block"
                   >
                     Husein Sastranegara Airport<br/>Cargo Park C.49 Jl. Padjajaran No. 156,<br/>Bandung, West Java 40174
                   </a>
                 </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">Contact Us</h4>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="tel:+62226016306" className="hover:text-red-400 transition-colors">+62 22 6016 306</a>
              </div>
               <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="tel:+628176878166" className="hover:text-red-400 transition-colors">+62 817 687 8166</a>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group mt-4">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="mailto:info@bkkemuliaan.com" className="hover:text-red-400 transition-colors break-all">info@bkkemuliaan.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="hover:text-red-400 transition-colors break-all">Sales-marketing.2@bkkemuliaan.com</a>
              </div>

              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group mt-4">
                 <Globe size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors break-all">www.bkkemuliaan.com</a>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">Quick Links</h4>
             <ul className="space-y-4 text-sm text-stone-300 font-light">
               <li className="hover:text-red-400 cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-red-400 cursor-pointer transition-colors">Product Catalogue</li>
               <li className="hover:text-red-400 cursor-pointer transition-colors">GACC Certifications</li>
               <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setIsContactOpen(true)}>Request Quote</li>
             </ul>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 text-center md:text-left">
            © 2025 PT. Bintang Kiat Kemuliaan. <span className="hidden sm:inline">All Rights Reserved.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
      
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsContactOpen(false)}></div>
            <div className="relative bg-white border border-stone-200 rounded-sm shadow-2xl max-w-lg w-full p-8 md:p-10 animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
               <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 text-stone-400 hover:text-red-600 transition-colors"><X size={24} /></button>
               
               <div className="text-center mb-6">
                  <h2 className="text-3xl font-serif text-green-950 mb-2">Get in Touch</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">We'd love to hear from you</p>
               </div>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Phone className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-950 mb-1">Phone / WhatsApp</h4>
                          <a href="tel:+62226016306" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 22 6016 306</a>
                          <a href="tel:+628176878166" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 817 687 8166</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Mail className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-950 mb-1">Emails</h4>
                          <a href="mailto:info@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors break-all">info@bkkemuliaan.com</a>
                          <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors break-all">Sales-marketing.2@bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Globe className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-950 mb-1">Website</h4>
                          <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm hover:text-red-600 transition-colors break-all">www.bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <MapPin className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-950 mb-2">Our Locations</h4>
                          <div className="mb-4">
                            <strong className="text-stone-500 text-[10px] uppercase tracking-wide block mb-1">Main Office:</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Sawit+Darangdan+No.+3,+Purwakarta,+West+Java+41163+-+Indonesia" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm leading-relaxed hover:text-red-600 transition-colors block">Jl. Sawit Darangdan No. 3, Purwakarta, West Java 41163 - Indonesia</a>
                          </div>
                          <div>
                            <strong className="text-stone-500 text-[10px] uppercase tracking-wide block mb-1">Operational Warehouse:</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Husein+Sastranegara+Airport,+Cargo+Park+C.49+Jl.+Padjajaran+No.+156,+Bandung,+West+Java+40174" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm leading-relaxed hover:text-red-600 transition-colors block">Husein Sastranegara Airport, Cargo Park C.49 Jl. Padjajaran No. 156, Bandung, West Java 40174</a>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-stone-200 text-center">
                  <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500">
                      <img src="/images/logo.png" alt="BKK Logo" className="w-12 h-12 object-contain mb-3" />
                      <h3 className="text-xl font-serif text-green-950 tracking-[0.2em] uppercase">BKK</h3>
                      <p className="text-[9px] font-medium tracking-[0.3em] uppercase text-stone-500 mt-1">PT. Bintang Kiat Kemuliaan</p>
                  </div>
               </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;