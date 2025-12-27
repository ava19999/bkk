import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MangosteenCard from './components/MangosteenCard';
import BookingWidget from './components/BookingWidget';
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

  // --- LOGIKA GAMBAR & LABEL PRODUK ---
  
  const defaultImages = {
    fruits: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600",
    vegetables: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=600",
    spices: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600"
  };

  const adjectives = [
    'Sensational', 'Premium', 'Popular', 'Exquisite', 
    'Fresh Harvest', 'Top-Tier', 'Finest', 'Signature', 'Selected', 'Organic'
  ];

  const [categoryImages, setCategoryImages] = useState({
    fruits: defaultImages.fruits,
    vegetables: defaultImages.vegetables,
    spices: defaultImages.spices
  });

  const [selectedLabels, setSelectedLabels] = useState({
      fruits: { adj: 'Sensational', name: 'Fruits' }, 
      vegetables: { adj: 'Premium', name: 'Vegetables' },
      spices: { adj: 'Exquisite', name: 'Spices & Flowers' }
  });

  const [mobileActiveImage, setMobileActiveImage] = useState(defaultImages.fruits);
  const [activeProduct, setActiveProduct] = useState<string>('');
  const [mobileActiveCategory, setMobileActiveCategory] = useState<'fruits' | 'vegetables' | 'spices'>('fruits');

  const productImages: Record<string, string> = {
    // Fruits
    'Avocado': 'https://images.unsplash.com/photo-1523049673856-38866de6c069?auto=format&fit=crop&q=80&w=600',
    'Harumanis Mango': 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600',
    'Honey Sweet Pineapple': 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600',
    'Mangosteen': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600',
    'Rockmelon': 'https://images.unsplash.com/photo-1593407983685-61882c974917?auto=format&fit=crop&q=80&w=600',
    'Salacca': 'https://images.unsplash.com/photo-1627308785461-9c1782079039?auto=format&fit=crop&q=80&w=600',
    'Watermelon': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    'Durian': 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&q=80&w=600',
    'Dragon Fruit': 'https://images.unsplash.com/photo-1527725964894-3914a5c0b9e8?auto=format&fit=crop&q=80&w=600',
    // Vegetables
    'French Beans': 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=600',
    'Capsicum': 'https://images.unsplash.com/photo-1563565375-f3fdf5dbc240?auto=format&fit=crop&q=80&w=600',
    'Honey Sweet Potato': 'https://images.unsplash.com/photo-1596097635121-14b63b84041e?auto=format&fit=crop&q=80&w=600',
    'Elephant Ginger': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    'Young Ginger': 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=600',
    'Potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
    'Sweet Potato': 'https://images.unsplash.com/photo-1634547902407-359f42807e3d?auto=format&fit=crop&q=80&w=600',
    'Watercress': 'https://images.unsplash.com/photo-1558487226-724f33d7b86d?auto=format&fit=crop&q=80&w=600',
    // Spices
    'Cinnamon': 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=600',
    'Vanilla': 'https://images.unsplash.com/photo-1610214612300-66444c20f188?auto=format&fit=crop&q=80&w=600',
    'Black Pepper': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600',
    'Clove': 'https://images.unsplash.com/photo-1618635296065-2410286b0266?auto=format&fit=crop&q=80&w=600',
    'Jasmine Flower': 'https://images.unsplash.com/photo-1600387845879-a4713f764110?auto=format&fit=crop&q=80&w=600',
    'White Pepper': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600'
  };

  const handleProductClick = (category: 'fruits' | 'vegetables' | 'spices', productName: string) => {
    const imageUrl = productImages[productName] || defaultImages[category];
    setCategoryImages(prev => ({ ...prev, [category]: imageUrl }));
    setMobileActiveImage(imageUrl);
    setActiveProduct(productName);
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    setSelectedLabels(prev => ({
        ...prev,
        [category]: { adj: randomAdjective, name: productName }
    }));
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1600387845879-a4713f764110?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1591462619084-28b3c9597375?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=1200", 
  ];

  const displayGallery = [...galleryImages, ...galleryImages, ...galleryImages];

  // --- BACKGROUND IMAGES FOR "WHY WORK WITH US" ---
  const bgRow1 = [
    "https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600387845879-a4713f764110?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1591462619084-28b3c9597375?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800"
  ];

  const bgRow2 = [
    "https://images.unsplash.com/photo-1523049673856-38866de6c069?auto=format&fit=crop&q=80&w=600", // Avocado
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600", // Mangosteen
    "https://images.unsplash.com/photo-1610214612300-66444c20f188?auto=format&fit=crop&q=80&w=600", // Vanilla
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600", // Ginger
    "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&q=80&w=600"  // Durian
  ];

  // Duplicate for smooth loop
  const displayBgRow1 = [...bgRow1, ...bgRow1, ...bgRow1, ...bgRow1];
  const displayBgRow2 = [...bgRow2, ...bgRow2, ...bgRow2, ...bgRow2];


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

  const exportCountries = ['China', 'Singapore', 'Thailand', 'Malaysia', 'UAE', 'Bangladesh', 'Canada'];

  return (
    <div className="relative min-h-screen bg-white font-sans text-stone-600">
      
      {/* Styles for animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ 
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` 
      }}></div>

      <Header isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
      
      <main className="relative z-10">
        <div id="home">
            <Hero />
        </div>

        {/* BOOKING WIDGET */}
        <div>
           <BookingWidget />
        </div>
        
        <div id="popular" className="scroll-mt-24">
            <MangosteenCard />
        </div>
        
        {/* COMBINED SECTION: ABOUT & GALLERY */}
        {/* MODIFIED: Removed border-t border-green-100 */}
        <section id="about" className="py-20 md:py-32 bg-green-50 reveal-hidden text-left relative scroll-mt-24">
           
           {/* PART 1: ABOUT TEXT (Centered Box) */}
           <div className="px-6 max-w-6xl mx-auto mb-20 relative z-10">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none hidden lg:block">
                  <Sprout size={400} className="text-green-100" />
              </div>
              <div className="flex justify-start mb-4">
                 <Leaf size={24} className="text-red-600" />
              </div>
              <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Our History</p>
              
              <h2 className="text-3xl md:text-5xl font-serif text-green-700 leading-normal mb-16 pb-2 relative z-10">
                Established in 2013, legalized in 2016. <br/> Indonesia's <span className="italic text-red-600">premier exporter</span>.
              </h2>
              <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                <p className="text-stone-600 leading-relaxed font-light text-xl">
                  PT. Bintang Kiat Kemuliaan (BKK) is dedicated to delivering the finest fresh fruits, vegetables, and flowers to the global market. We prioritize quality, consistency, and integrity in every shipment we make to the world.
                </p>
                <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                     <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                        <CheckCircle2 size={24} />
                     </div>
                     <div>
                        <h4 className="font-serif text-xl text-green-700 mb-2">GACC Registered</h4>
                        <p className="text-sm text-stone-500 leading-relaxed">
                          Our packaging house is legally registered at GACC <strong className="text-green-700 block mt-1">(Reg No. KEMTAN RI PH-32-73-0018-0418)</strong> for Mangosteen and Salacca, ensuring strict global quality standards.
                        </p>
                     </div>
                  </div>
                </div>
              </div>
           </div>

           {/* PART 2: GALLERY CAROUSEL (Full Width) */}
           {/* MODIFIED: Removed border-y border-stone-100 to make it seamless */}
           <div className="relative w-full h-[60vh] bg-green-50 group">
                <div 
                  ref={scrollRef}
                  className={`flex h-full w-full overflow-x-hidden select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayGallery.map((src, index) => (
                        <div key={index} className="h-full min-w-[50vw] md:min-w-[33vw] lg:min-w-[25vw] border-r border-green-50 relative shrink-0">
                             <img 
                               src={src} 
                               alt={`Gallery ${index}`} 
                               className="w-full h-full object-cover pointer-events-none transition-all duration-700" 
                               draggable={false} 
                             />
                             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-900/80 to-transparent pointer-events-none opacity-80"></div>
                        </div>
                    ))}
                </div>
                <style>{`.overflow-x-hidden::-webkit-scrollbar { display: none; }`}</style>
           </div>

        </section>

        {/* SECTION 2: VISION & MISSION */}
        {/* MODIFIED: Removed border-b border-green-100 */}
        <section className="py-24 relative overflow-hidden bg-green-50">
           
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50 to-transparent pointer-events-none z-0"></div>

           <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal-hidden">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-stone-200">
                    <Target size={16} className="text-red-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Our Vision</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-green-700 leading-[1.1] mb-8">
                   "To be the <span className="text-red-600 italic">most trusted</span> exporter for fruits, vegetables, and flowers."
                 </h3>
                 <div className="pl-6 border-l-2 border-red-600/30">
                    <p className="text-stone-600 text-lg font-light leading-relaxed">
                       Through a firm commitment and life-long integrity that we provide to every customer.
                    </p>
                 </div>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100 reveal-hidden relative transform transition-transform hover:scale-[1.01] duration-500">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-100 p-3 rounded-xl text-green-600 shadow-sm">
                       <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif text-green-700 leading-none">Our Mission</h3>
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
                      <div key={idx} className="flex items-center gap-5 p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group cursor-default border border-stone-100 hover:border-red-200">
                          <div className="bg-white p-3 rounded-full shadow-sm text-stone-500 group-hover:text-red-600 transition-colors shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                            <p className="text-xs text-stone-500">{item.desc}</p>
                          </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 3: CORE VALUES */}
        <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-stone-50">
          
          <div className="absolute inset-0 z-0 overflow-hidden flex flex-col pointer-events-none">
             
             <div className="flex-1 w-full relative overflow-hidden flex items-center bg-green-50">
                <div className="flex animate-scroll-right min-w-full h-full">
                    {displayBgRow1.map((src, i) => (
                      <div key={`row1-${i}`} className="h-full w-[40vw] md:w-[25vw] shrink-0 mx-0">
                         <img 
                           src={src} 
                           className="w-full h-full object-cover" 
                           alt="Background" 
                         />
                      </div>
                    ))}
                </div>
             </div>
             
             <div className="flex-1 w-full relative overflow-hidden flex items-center bg-green-50">
                <div className="flex animate-scroll-left min-w-full h-full">
                    {displayBgRow2.map((src, i) => (
                      <div key={`row2-${i}`} className="h-full w-[40vw] md:w-[25vw] shrink-0 mx-0">
                         <img 
                            src={src} 
                            className="w-full h-full object-cover" 
                            alt="Background" 
                          />
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
               <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] bg-white border border-stone-200 px-3 py-1 rounded-full shadow-sm">Core Values</span>
               <h2 className="text-4xl md:text-5xl font-serif text-green-700 mt-4 drop-shadow-sm">
                  Why Work <span className="text-red-600">With Us?</span>
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
               
               {/* VALUE 1: TRUST */}
               <div className="relative overflow-hidden p-4 md:p-8 bg-white/60 backdrop-blur-xl border border-white/40 hover:border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default rounded-sm reveal-hidden text-center">
                 <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-50/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-green-50/90 to-transparent"></div>
                 </div>

                 <div className="relative z-10">
                     <div className="mb-3 md:mb-6 w-10 h-10 md:w-14 md:h-14 bg-stone-50 rounded-full flex items-center justify-center shadow-sm border border-stone-100 mx-auto">
                        <Handshake className="text-red-600 w-5 h-5 md:w-7 md:h-7" />
                     </div>
                     <h4 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-green-700">Trust</h4>
                     <p className="text-stone-600 leading-relaxed font-light text-xs md:text-sm">
                       We build your trust by giving excellent quality of products and services. These have made us grow over the decades.
                     </p>
                 </div>
               </div>
               
               {/* VALUE 2: COMMITMENT */}
               <div className="relative overflow-hidden p-4 md:p-8 bg-white/60 backdrop-blur-xl border border-white/40 hover:border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default rounded-sm reveal-hidden text-center">
                 <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-50/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-green-50/90 to-transparent"></div>
                 </div>

                 <div className="relative z-10">
                     <div className="mb-3 md:mb-6 w-10 h-10 md:w-14 md:h-14 bg-stone-50 rounded-full flex items-center justify-center shadow-sm border border-stone-100 mx-auto">
                        <HeartHandshake className="text-red-600 w-5 h-5 md:w-7 md:h-7" />
                     </div>
                     <h4 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-green-700">Commitment</h4>
                     <p className="text-stone-600 leading-relaxed font-light text-xs md:text-sm">
                       We stand on a firm commitment of being the most trusted and developed exporter for Indonesian fresh fruits and vegetables.
                     </p>
                 </div>
               </div>
               
               {/* VALUE 3: INTEGRITY */}
               <div className="relative overflow-hidden p-4 md:p-8 bg-white/60 backdrop-blur-xl border border-white/40 hover:border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default rounded-sm reveal-hidden text-center">
                 <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-50/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-green-50/90 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-green-50/90 to-transparent"></div>
                 </div>

                 <div className="relative z-10">
                     <div className="mb-3 md:mb-6 w-10 h-10 md:w-14 md:h-14 bg-stone-50 rounded-full flex items-center justify-center shadow-sm border border-stone-100 mx-auto">
                        <Shield className="text-red-600 w-5 h-5 md:w-7 md:h-7" />
                     </div>
                     <h4 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-green-700">Integrity</h4>
                     <p className="text-stone-600 leading-relaxed font-light text-xs md:text-sm">
                       We uphold noble values rather than winning sectoral gain. We believe in fair businesses for everyone.
                     </p>
                 </div>
               </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: STATS */}
        <section id="global" className="py-12 md:py-24 bg-white relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-green-50 to-transparent z-[5] pointer-events-none"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
               alt="World Map" 
               className="w-full h-auto object-cover opacity-20"
               style={{ filter: 'invert(34%) sepia(98%) saturate(696%) hue-rotate(88deg) brightness(93%) contrast(92%)' }} 
             />
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-3 md:grid-cols-2 gap-3 md:gap-6">
                 
                 {/* 1. EXPORT COUNTRIES */}
                 <div className="col-span-3 md:col-span-1 bg-stone-50 backdrop-blur-sm p-6 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                    <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-3 md:gap-0 text-center md:text-left">
                        <Globe className="text-red-600 mb-0 md:mb-4 w-8 h-8 md:w-8 md:h-8 shrink-0" />
                        <div className="flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-0">
                           <h3 className="text-4xl md:text-5xl font-serif mb-0 md:mb-2 text-green-700">7+</h3>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 whitespace-nowrap">Export Countries</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                       {exportCountries.map((country, idx) => (
                           <span key={idx} className="bg-white border border-stone-200 px-2 py-1 rounded-full text-[10px] font-medium text-stone-600 shadow-sm">
                               {country}
                           </span>
                       ))}
                    </div>
                 </div>

                 {/* 2. HAPPY CLIENTS */}
                 <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <TrendingUp className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                        <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">100+</h3>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">Happy Clients</p>
                    </div>
                    <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">Trusting us annually.</p>
                 </div>

                 {/* 3. CAPACITY */}
                 <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Package className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                        <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">100<span className="text-sm md:text-2xl">MT</span></h3>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">Monthly Capacity</p>
                    </div>
                    <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">For each commodity.</p>
                 </div>

                 {/* 4. GACC */}
                 <div className="col-span-1 md:col-span-1 bg-stone-50 backdrop-blur-sm p-3 md:p-8 shadow-sm rounded-sm border border-stone-200 hover:border-red-200 transition-colors h-full flex flex-col justify-between reveal-hidden">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <CheckCircle2 className="text-red-600 mb-2 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                        <h3 className="text-xl md:text-5xl font-serif mb-1 md:mb-2 text-green-700">GACC</h3>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500 leading-tight">Certified</p>
                    </div>
                    <p className="hidden md:block text-sm mt-2 text-stone-600 leading-tight">Registered Packaging House.</p>
                 </div>

              </div>
            </div>
            <div className="reveal-hidden order-1 lg:order-2 lg:pl-10">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 block">Global Reach</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-green-700 mb-6 md:mb-8 leading-tight">
                Connecting <br /> 
                <span className="italic text-red-600">Indonesian Harvests</span> to the World.
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-6 lg:mb-10 text-lg">
                We uphold our decision-making process based on noble values rather than winning sectoral gain. We firmly believe in the importance of fair businesses for everyone.
              </p>
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
                  <h3 className="text-3xl md:text-5xl font-serif text-green-700">Product Catalogue</h3>
                </div>
                <div className="text-right">
                   <p className="text-stone-500 text-sm font-light">Explore our premium selection of 23 commodities.</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 items-stretch reveal-hidden">
                
                {/* 1. KOLOM KIRI (FOTO) */}
                <div className="h-full relative md:min-h-[400px]">
                   
                   {/* MOBILE: Single Image (Center) */}
                   <div className="md:hidden flex flex-col items-center justify-center mb-0">
                      <div className="w-full max-w-sm aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-stone-200 relative group">
                         <img 
                           src={mobileActiveImage} 
                           alt="Selected Product" 
                           className="w-full h-full object-cover transition-opacity duration-500"
                         />

                         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent pointer-events-none opacity-95"></div>

                         <div className="absolute bottom-4 right-4 z-10">
                             <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-baseline gap-2">
                                <span className="text-red-500 font-serif font-light italic text-xs tracking-widest">
                                    {selectedLabels[mobileActiveCategory].adj}
                                </span>
                                <span className={`font-serif font-thin text-xs tracking-widest uppercase ${
                                    mobileActiveCategory === 'fruits' ? 'text-red-100' :
                                    mobileActiveCategory === 'vegetables' ? 'text-green-100' :
                                    'text-yellow-100'
                                }`}>
                                    {selectedLabels[mobileActiveCategory].name}
                                </span>
                             </div>
                         </div>
                      </div>
                   </div>

                   {/* DESKTOP: 3 Images Vertically (Tidak Bertumpuk/Not Stacked) */}
                   <div className="hidden md:flex flex-col gap-6 h-full">
                       {/* Foto Kategori Fruits */}
                       <div className="relative h-[250px] rounded-sm overflow-hidden shadow-lg border border-stone-200 group">
                          <img src={categoryImages.fruits} alt="Fruits" className="w-full h-full object-cover transition-opacity duration-500" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent pointer-events-none opacity-95"></div>
                          
                          <div className="absolute bottom-4 right-4 z-10">
                             <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-baseline gap-2">
                                <span className="text-red-500 font-serif font-light italic text-sm tracking-widest">
                                    {selectedLabels.fruits.adj}
                                </span>
                                <span className="text-red-100 font-serif font-thin text-sm tracking-widest uppercase">
                                    {selectedLabels.fruits.name}
                                </span>
                             </div>
                          </div>
                       </div>
                       
                       {/* Foto Kategori Vegetables */}
                       <div className="relative h-[250px] rounded-sm overflow-hidden shadow-lg border border-stone-200 group">
                          <img src={categoryImages.vegetables} alt="Vegetables" className="w-full h-full object-cover transition-opacity duration-500" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent pointer-events-none opacity-95"></div>
                          
                          <div className="absolute bottom-4 right-4 z-10">
                             <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-baseline gap-2">
                                <span className="text-red-500 font-serif font-light italic text-sm tracking-widest">
                                    {selectedLabels.vegetables.adj}
                                </span>
                                <span className="text-green-100 font-serif font-thin text-sm tracking-widest uppercase">
                                    {selectedLabels.vegetables.name}
                                </span>
                             </div>
                          </div>
                       </div>

                       {/* Foto Kategori Spices */}
                       <div className="relative h-[250px] rounded-sm overflow-hidden shadow-lg border border-stone-200 group">
                          <img src={categoryImages.spices} alt="Spices" className="w-full h-full object-cover transition-opacity duration-500" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent pointer-events-none opacity-95"></div>
                          
                          <div className="absolute bottom-4 right-4 z-10">
                             <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-baseline gap-2">
                                <span className="text-red-500 font-serif font-light italic text-sm tracking-widest">
                                    {selectedLabels.spices.adj}
                                </span>
                                <span className="text-yellow-100 font-serif font-thin text-sm tracking-widest uppercase">
                                    {selectedLabels.spices.name}
                                </span>
                             </div>
                          </div>
                       </div>
                   </div>

                </div>
                
                {/* 2. KOLOM KANAN (LIST) */}
                <div className="h-full">
                   
                   {/* --- TAMPILAN MOBILE: CUSTOM TAB SELECTION --- */}
                   <div className="md:hidden bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 flex flex-col">
                       {/* Mobile Tabs: Text Only, Aligned */}
                       <div className="flex justify-between items-center px-2 mb-6 border-b border-stone-200 pb-2">
                           {(['fruits', 'vegetables', 'spices'] as const).map((cat) => (
                               <button 
                                 key={cat}
                                 onClick={() => setMobileActiveCategory(cat)}
                                 className={`text-xs uppercase tracking-widest transition-all pb-1 ${
                                    mobileActiveCategory === cat 
                                      ? (cat === 'fruits' ? 'text-red-600 font-bold border-b-2 border-red-600' : 
                                         cat === 'vegetables' ? 'text-green-600 font-bold border-b-2 border-green-600' : 
                                         'text-yellow-500 font-bold border-b-2 border-yellow-500')
                                      : 'text-stone-400 font-light hover:text-stone-600'
                                 }`}
                               >
                                 {cat === 'spices' ? 'Spices' : cat}
                               </button>
                           ))}
                       </div>

                       {/* List Item: Vertical, Neat, Capsule */}
                       <div className="flex flex-col gap-2">
                           {allProducts[mobileActiveCategory].map((item, i) => {
                               const activeColor = 
                                   mobileActiveCategory === 'fruits' ? 'bg-red-600 border-red-600' :
                                   mobileActiveCategory === 'vegetables' ? 'bg-green-600 border-green-600' :
                                   'bg-yellow-500 border-yellow-500';
                                
                               const isActive = activeProduct === item;

                               return (
                                   <button 
                                     key={i} 
                                     onClick={() => handleProductClick(mobileActiveCategory, item)}
                                     className={`w-full py-2 px-4 rounded-full text-xs text-left transition-all border flex items-center gap-3 ${
                                        isActive 
                                            ? `${activeColor} text-white shadow-md` 
                                            : 'bg-white border-stone-100 text-stone-600 hover:border-stone-300'
                                     }`}
                                   >
                                     <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-white' : (
                                        mobileActiveCategory === 'fruits' ? 'bg-red-600' :
                                        mobileActiveCategory === 'vegetables' ? 'bg-green-600' :
                                        'bg-yellow-500'
                                     )}`}></div>
                                     {item}
                                   </button>
                               )
                           })}
                       </div>
                   </div>


                   {/* --- TAMPILAN DESKTOP: 3 KOTAK TERPISAH (SEJAJAR DENGAN FOTO) --- */}
                   <div className="hidden md:flex flex-col gap-6 h-full text-left">

                       {/* KOTAK 1: FRUITS (Height 250px) */}
                       <div className="h-[250px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-red-200 transition-colors">
                          <h4 className="flex items-center justify-start gap-3 font-serif text-2xl text-red-600 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10">
                             <Sprout size={24} /> Fruits
                          </h4>
                          <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                             {allProducts.fruits.map((item, i) => (
                                <li 
                                  key={i} 
                                  className={`text-sm flex items-center justify-start gap-2 cursor-pointer transition-all ${
                                      activeProduct === item ? 'text-red-600 font-bold' : 'text-stone-600 hover:text-red-600 hover:font-bold'
                                  }`}
                                  onClick={() => handleProductClick('fruits', item)}
                                >
                                   <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === item ? 'bg-red-600' : 'bg-red-600/50'}`}></div> {item}
                                </li>
                             ))}
                          </ul>
                       </div>

                       {/* KOTAK 2: VEGETABLES (Height 250px) */}
                       <div className="h-[250px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-green-200 transition-colors">
                          <h4 className="flex items-center justify-start gap-3 font-serif text-2xl text-green-600 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10">
                             <Carrot size={24} /> Vegetables
                          </h4>
                          <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                             {allProducts.vegetables.map((item, i) => (
                                <li 
                                  key={i} 
                                  className={`text-sm flex items-center justify-start gap-2 cursor-pointer transition-all ${
                                      activeProduct === item ? 'text-green-600 font-bold' : 'text-stone-600 hover:text-green-600 hover:font-bold'
                                  }`}
                                  onClick={() => handleProductClick('vegetables', item)}
                                >
                                   <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === item ? 'bg-green-600' : 'bg-green-600/50'}`}></div> {item}
                                </li>
                             ))}
                          </ul>
                       </div>

                       {/* KOTAK 3: SPICES (Height 250px) */}
                       <div className="h-[250px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-yellow-200 transition-colors">
                          <h4 className="flex items-center justify-start gap-3 font-serif text-2xl text-yellow-500 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10">
                             <Flower2 size={24} /> Spices & Flowers
                          </h4>
                          <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                             {allProducts.spices.map((item, i) => (
                                <li 
                                  key={i} 
                                  className={`text-sm flex items-center justify-start gap-2 cursor-pointer transition-all ${
                                      activeProduct === item ? 'text-yellow-600 font-bold' : 'text-stone-600 hover:text-yellow-500 hover:font-bold'
                                  }`}
                                  onClick={() => handleProductClick('spices', item)}
                                >
                                   <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === item ? 'bg-yellow-500' : 'bg-yellow-500/50'}`}></div> {item}
                                </li>
                             ))}
                          </ul>
                       </div>

                   </div>

                </div>
              </div>
           </div>
        </section>

        {/* SECTION 6: PARTNER */}
        <section className="py-12 md:py-32 bg-white text-stone-600 relative overflow-hidden">
           <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
              {/* WRAPPER BARU AGAR ANIMASI BERJALAN */}
              <div className="reveal-hidden">
                  <div className="w-16 h-1 bg-red-600 mb-4 md:mb-8 mx-auto shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif mb-4 md:mb-8 leading-tight text-green-700 drop-shadow-sm">
                     Partner <br/> <span className="italic text-red-600">With Us.</span>
                  </h2>
                  <p className="text-stone-600 text-lg md:text-2xl font-light mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                      We are looking forward to working with you to bring nature's finest to your market.
                  </p>
                  
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="group relative px-12 py-6 bg-green-600 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all overflow-hidden shadow-2xl hover:shadow-red-900/50 rounded-sm mx-auto flex items-center gap-4"
                  >
                      Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#021a10] text-white pt-24 pb-12 px-6 border-t border-white/5 relative z-10 reveal-hidden">
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
                  <h2 className="text-3xl font-serif text-green-700 mb-2">Get in Touch</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">We'd love to hear from you</p>
               </div>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Phone className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Phone / WhatsApp</h4>
                          <a href="tel:+62226016306" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 22 6016 306</a>
                          <a href="tel:+628176878166" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors">+62 817 687 8166</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Mail className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Emails</h4>
                          <a href="mailto:info@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors break-all">info@bkkemuliaan.com</a>
                          <a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="text-stone-600 font-light text-sm hover:text-red-600 block transition-colors break-all">Sales-marketing.2@bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <Globe className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Website</h4>
                          <a href="https://www.bkkemuliaan.com" target="_blank" rel="noreferrer" className="text-stone-600 font-light text-sm hover:text-red-600 transition-colors break-all">www.bkkemuliaan.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-sm border border-stone-200 group hover:border-red-200 transition-colors">
                      <MapPin className="text-green-600 shrink-0 mt-1" size={20} />
                      <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Our Locations</h4>
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
                      <h3 className="text-xl font-serif text-green-700 tracking-[0.2em] uppercase">BKK</h3>
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