import React, { useRef, useState, useEffect } from 'react';
import { Sprout, Leaf, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HistorySection: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Gallery Images (Local)
  const galleryImages = [
    encodeURI("/images/about us/IMG-20250620-WA0002_edit_505128042216672.jpg"),
    encodeURI("/images/about us/IMG_2222.JPG"),
    encodeURI("/images/about us/IMG_2223.JPG"),
    encodeURI("/images/about us/IMG_2224.JPG"),
    encodeURI("/images/about us/IMG_2227.JPG"),
    encodeURI("/images/about us/IMG_2231.JPG"),
    encodeURI("/images/about us/IMG_2235.JPG"),
    encodeURI("/images/about us/IMG_2241.JPG"),
    encodeURI("/images/about us/IMG_2264.PNG"),
    encodeURI("/images/about us/IMG_2266.PNG"),
    encodeURI("/images/about us/Screenshot_20250723_132856.jpg")
  ];
  
  // Duplikasi 3x agar looping berjalan mulus (seamless)
  const displayGallery = [...galleryImages, ...galleryImages, ...galleryImages];

  // --- MOUSE EVENTS (DRAG) ---
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

  // Stop dragging saat mouse dilepas
  useEffect(() => {
    const handleGlobalMouseUp = () => { isDown.current = false; setIsGrabbing(false); };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  // --- ANIMASI AUTO SCROLL (Ini yang sebelumnya hilang) ---
  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    
    const animate = () => {
      if (scrollContainer) {
        // Jika user tidak sedang menahan klik (drag), jalankan auto scroll
        if (!isDown.current) {
           scrollContainer.scrollLeft += 1; // Kecepatan scroll
        }
        
        // Logika Infinite Loop
        const totalWidth = scrollContainer.scrollWidth;
        const oneSetWidth = totalWidth / 3; // Karena kita duplikasi 3x
        
        // Jika sudah scroll melewati set ke-2, kembalikan ke set ke-1 (seamless jump)
        if (scrollContainer.scrollLeft >= oneSetWidth * 2) {
            scrollContainer.scrollLeft -= oneSetWidth;
        } 
        // Jika di-drag mundur terlalu jauh
        else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-green-50 reveal-hidden text-left relative scroll-mt-24">
       <div className="px-6 max-w-6xl mx-auto mb-20 relative z-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none hidden lg:block"><Sprout size={400} className="text-green-100" /></div>
          <div className="flex justify-start mb-4"><Leaf size={24} className="text-red-600" /></div>
          <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{t.history.label}</p>
          
          <h2 className="text-3xl md:text-5xl font-serif text-green-700 leading-normal mb-16 pb-2 relative z-10">
            {t.history.title} <br/> <span className="italic text-red-600">{t.history.subtitle}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <p className="text-stone-600 leading-relaxed font-light text-xl">
              {t.history.description}
            </p>
            <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                 <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><CheckCircle2 size={24} /></div>
                 <div>
                    <h4 className="font-serif text-xl text-green-700 mb-2">{t.history.gaccTitle}</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">{t.history.gaccDesc}</p>
                 </div>
              </div>
            </div>
          </div>
       </div>

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
                           alt={`About Us Gallery ${index}`} 
                           className="w-full h-full object-cover pointer-events-none transition-all duration-700" 
                           draggable={false} 
                         />
                         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-900/80 to-transparent pointer-events-none opacity-80"></div>
                    </div>
                ))}
            </div>
            {/* Sembunyikan scrollbar native */}
            <style>{`.overflow-x-hidden::-webkit-scrollbar { display: none; }`}</style>
       </div>
    </section>
  );
};

export default HistorySection;