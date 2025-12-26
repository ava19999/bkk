import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MangosteenCard from './components/MangosteenCard';
import { SERVICES } from './constants';
import { 
  ArrowRight, MapPin, Mail, Phone, CheckCircle2, Globe, TrendingUp, 
  Package, Leaf, Target, Scale, Clock, ShieldCheck, Banknote, 
  Sprout, Carrot, Flower2, Handshake, HeartHandshake, Shield 
} from 'lucide-react';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  
  // STATE CONTACT
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
    <div className="relative min-h-screen bg-[#041C12] font-sans text-stone-300">
      
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0 invert" style={{ 
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
              <Sprout size={400} />
           </div>
          <div className="flex justify-start mb-4">
             <Leaf size={24} className="text-red-600" />
          </div>
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Our History</p>
          
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-normal mb-16 pb-2 relative z-10">
            Established in 2013, legalized in 2016. <br/> Indonesia's <span className="italic text-red-600">premier exporter</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <p className="text-stone-300 leading-relaxed font-light text-xl">
              PT. Bintang Kiat Kemuliaan (BKK) is dedicated to delivering the finest fresh fruits, vegetables, and flowers to the global market. We prioritize quality, consistency, and integrity in every shipment we make to the world.
            </p>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                 <div className="bg-green-900/50 p-3 rounded-full text-white shrink-0">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="font-serif text-xl text-white mb-2">GACC Registered</h4>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      Our packaging house is legally registered at GACC <strong className="text-white block mt-1">(Reg No. KEMTAN RI PH-32-73-0018-0418)</strong> for Mangosteen and Salacca, ensuring strict global quality standards.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="relative w-full h-[60vh] bg-[#020e09] group reveal-hidden border-y border-white/5">
            <div 
              ref={scrollRef}
              className={`flex h-full w-full overflow-x-hidden select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {displayGallery.map((src, index) => (
                    <div key={index} className="h-full min-w-[50vw] md:min-w-[33vw] lg:min-w-[25vw] border-r border-white/10 relative shrink-0">
                         <img 
                           src={src} 
                           alt={`Gallery ${index}`} 
                           className="w-full h-full object-cover pointer-events-none transition-all duration-700" 
                           draggable={false} 
                         />
                         <div className="absolute inset-0 bg-[#041C12]/30 mix-blend-multiply pointer-events-none"></div>
                    </div>
                ))}
            </div>
            <style>{`.overflow-x-hidden::-webkit-scrollbar { display: none; }`}</style>
        </section>

        {/* SECTION 2: VISION & MISSION */}
        <section className="py-24 relative overflow-hidden bg-[#041C12] border-b border-white/5">
           <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal-hidden">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full shadow-sm mb-8 border border-white/10">
                    <Target size={16} className="text-red-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Our Vision</span>
                 </div>
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-8">
                   "To be the <span className="text-red-600 italic">most trusted</span> exporter for fruits, vegetables, and flowers."
                 </h3>
                 <div className="pl-6 border-l-2 border-red-600/30">
                    <p className="text-stone-300 text-lg font-light leading-relaxed">
                       Through a firm commitment and life-long integrity that we provide to every customer.
                    </p>
                 </div>
              </div>
              
              <div className="bg-white/5 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 reveal-hidden relative transform transition-transform hover:scale-[1.01] duration-500">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-900/50 p-3 rounded-xl text-white shadow-lg shadow-green-900/20">
                       <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif text-white leading-none">Our Mission</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-1">Honesty & Commitment</p>
                    </div>
                 </div>
                 <p className="text-stone-400 mb-8 leading-relaxed font-light">
                   To cooperate with all stakeholders based on honesty, providing best services such as:
                 </p>
                 <div className="space-y-4">
                    {[
                      { icon: Banknote, title: "Competitive Prices", desc: "Best market value." },
                      { icon: Clock, title: "Precise Delivery", desc: "On-time logistics." },
                      { icon: ShieldCheck, title: "Finest Goods", desc: "Premium quality produce." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-default border border-white/5 hover:border-red-500/30">
                          <div className="bg-white/10 p-3 rounded-full shadow-sm text-stone-400 group-hover:text-red-600 transition-colors shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                            <p className="text-xs text-stone-500">{item.desc}</p>
                          </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 3: CORE VALUES */}
        <section className="py-32 px-6 relative overflow-hidden bg-[#041C12]">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-16 reveal-hidden">
               <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.3em] bg-white/10 px-3 py-1 rounded-full">Core Values</span>
               <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Why Work With Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-hidden">
               <div className="p-8 bg-white/5 border border-white/10 hover:border-red-500/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-sm">
                    <Handshake className="text-red-600 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-white group-hover:text-red-600 transition-colors">Trust</h4>
                 <p className="text-stone-400 leading-relaxed font-light text-sm">
                   We build your trust by giving excellent quality of products and services. These have made us grow over the decades.
                 </p>
               </div>
               
               <div className="p-8 bg-white/5 border border-white/10 hover:border-red-500/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-sm">
                    <HeartHandshake className="text-red-600 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-white group-hover:text-red-600 transition-colors">Commitment</h4>
                 <p className="text-stone-400 leading-relaxed font-light text-sm">
                   We stand on a firm commitment of being the most trusted and developed exporter for Indonesian fresh fruits and vegetables.
                 </p>
               </div>
               
               <div className="p-8 bg-white/5 border border-white/10 hover:border-red-500/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default rounded-sm">
                 <div className="mb-6 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-sm">
                    <Shield className="text-red-600 group-hover:text-white transition-colors" size={28} />
                 </div>
                 <h4 className="font-serif text-2xl mb-4 text-white group-hover:text-red-600 transition-colors">Integrity</h4>
                 <p className="text-stone-400 leading-relaxed font-light text-sm">
                   We uphold noble values rather than winning sectoral gain. We believe in fair businesses for everyone.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: STATS */}
        <section id="global" className="py-24 bg-[#041C12] relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="w-full h-auto object-cover opacity-[0.05] invert" />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="reveal-hidden relative order-2 lg:order-1">
              
              <div className="grid grid-cols-2 gap-6">
                 
                 {/* Card 1: Export Countries */}
                 <div className="bg-white/5 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-white/10 hover:border-red-500/30 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <Globe className="text-red-600 mb-4" size={32} />
                        <h3 className="text-5xl font-serif mb-2 text-white">7+</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Export Countries</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-500">China, Singapore, Thailand, Malaysia, UAE, Bangladesh, Canada.</p>
                 </div>

                 {/* Card 2: Happy Clients */}
                 <div className="bg-white/5 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-white/10 hover:border-red-500/30 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <TrendingUp className="text-red-600 mb-4" size={32} />
                        <h3 className="text-5xl font-serif mb-2 text-white">100+</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Happy Clients</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-500">Trusting us annually.</p>
                 </div>

                 {/* Card 3: Monthly Capacity */}
                 <div className="bg-white/5 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-white/10 hover:border-red-500/30 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <Package className="text-red-600 mb-4" size={32} />
                        <h3 className="text-5xl font-serif mb-2 text-white">100<span className="text-2xl">MT</span></h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Monthly Capacity</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-500">For each commodity.</p>
                 </div>

                 {/* Card 4: GACC */}
                 <div className="bg-white/5 backdrop-blur-sm p-8 shadow-sm rounded-sm border border-white/10 hover:border-red-500/30 transition-colors h-full flex flex-col justify-between">
                    <div>
                        <CheckCircle2 className="text-red-600 mb-4" size={32} />
                        <h3 className="text-5xl font-serif mb-2 text-white">GACC</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Certified</p>
                    </div>
                    <p className="text-sm mt-4 text-stone-500">Registered Packaging House.</p>
                 </div>

              </div>
            </div>
            <div className="reveal-hidden order-1 lg:order-2 lg:pl-10">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Global Reach</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Connecting <br /> <span className="italic text-stone-300">Indonesian Harvests</span> to the World.
              </h2>
              <p className="text-stone-400 font-light leading-relaxed mb-10 text-lg">
                We uphold our decision-making process based on noble values rather than winning sectoral gain. We firmly believe in the importance of fair businesses for everyone.
              </p>
              <button className="border-b border-white/30 pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-red-600 hover:border-red-600 transition-colors text-white">
                View Export Map
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRODUCTS (ID 'catalogue') */}
        <section id="catalogue" className="py-24 bg-[#041C12] relative scroll-mt-24">
           <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 reveal-hidden">
                <div className="mb-4 md:mb-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2">Our Goods</p>
                  <h3 className="text-3xl md:text-5xl font-serif text-white">Product Catalogue</h3>
                </div>
                <div className="text-right">
                   <p className="text-stone-400 text-sm font-light">Explore our premium selection of 23 commodities.</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10 items-stretch reveal-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {SERVICES.map((item, idx) => (
                    <div key={item.id} className="group relative h-[340px] overflow-hidden cursor-pointer bg-white/5 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 border border-white/5">
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
                
                <div className="bg-white/5 border border-white/10 rounded-sm shadow-sm p-6 md:p-8 h-full flex flex-col justify-center">
                   <div className="mb-8">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-red-600 mb-4 border-b border-white/10 pb-2">
                         <Sprout size={24} /> Fruits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.fruits.map((item, i) => (
                            <li key={i} className="text-stone-300 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <div className="mb-8">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-green-500 mb-4 border-b border-white/10 pb-2">
                         <Carrot size={24} /> Vegetables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.vegetables.map((item, i) => (
                            <li key={i} className="text-stone-300 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-yellow-400 mb-4 border-b border-white/10 pb-2">
                         <Flower2 size={24} /> Spices & Flowers
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                         {allProducts.spices.map((item, i) => (
                            <li key={i} className="text-stone-300 text-sm flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* SECTION 6: PARTNER */}
        <section className="py-32 bg-[#041C12] text-white relative overflow-hidden">
           <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=2400" 
                alt="Global Shipping Port" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#041C12]/95 via-[#041C12]/80 to-[#041C12]/40"></div>
           </div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
              <div className="w-16 h-1 bg-red-600 mb-8 mx-auto shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
                 Partner <br/> <span className="italic text-stone-300">With Us.</span>
              </h2>
              <p className="text-white text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-xl">
                  We are looking forward to working with you to bring nature's finest to your market.
              </p>
              
              <button 
                onClick={() => setIsContactOpen(true)}
                className="group relative px-12 py-6 bg-white text-green-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all overflow-hidden shadow-2xl hover:shadow-red-900/50 rounded-sm mx-auto flex items-center gap-4"
              >
                  Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </section>
      </main>

      {/* FOOTER - PROFESSIONAL UPDATE */}
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
          
          {/* CONTACT US COLUMN */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">Contact Us</h4>
            <div className="space-y-4">
               {/* Phone 1 */}
               <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="tel:+62226016306" className="hover:text-red-400 transition-colors">+62 22 6016 306</a>
              </div>
              {/* Phone 2 */}
               <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Phone size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="tel:+628176878166" className="hover:text-red-400 transition-colors">+62 817 687 8166</a>
              </div>
              
              {/* Email 1 */}
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group mt-4">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="mailto:info@bkkemuliaan.com" className="hover:text-red-400 transition-colors">info@bkkemuliaan.com</a>
              </div>
              {/* Email 2 */}
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group">
                 <Mail size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="hover:text-red-400 transition-colors">Sales-marketing.2@bkkemuliaan.com</a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3 text-sm text-stone-300 font-light group mt-4">
                 <Globe size={16} className="text-green-600 group-hover:text-white transition-colors" />
                 <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">www.bkkemuliaan.com</a>
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
        
        {/* NEW PROFESSIONAL COPYRIGHT FOOTER */}
        <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 text-center md:text-left">
            &copy; 2025 PT. Bintang Kiat Kemuliaan. <span className="hidden sm:inline">All Rights Reserved.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;