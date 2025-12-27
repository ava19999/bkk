import React, { useState } from 'react';
import { Sprout, Carrot, Flower2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductSection: React.FC = () => {
  const { t } = useLanguage();

  // --- STATE ---
  const [imageIndexes, setImageIndexes] = useState({
    fruits: 0,
    vegetables: 0,
    spices: 0
  });

  const [selectedLabels, setSelectedLabels] = useState({
      fruits: { adj: 'Sensational', name: 'Fruits' }, 
      vegetables: { adj: 'Premium', name: 'Vegetables' },
      spices: { adj: 'Exquisite', name: 'Spices & Flowers' }
  });

  const [activeProduct, setActiveProduct] = useState<string>('');
  const [mobileActiveCategory, setMobileActiveCategory] = useState<'fruits' | 'vegetables' | 'spices'>('fruits');

  // --- DATABASE GAMBAR (ARRAY) ---
  const productImagesMap: Record<string, string[]> = {
    // BUAH
    'Avocado': [
        encodeURI("/images/buah/alpukat/57797b0d2866fea382c3d3733e4a52ca.jpg"),
        encodeURI("/images/buah/alpukat/82b256f2eb90675b14621beb57436aaa.jpg")
    ],
    'Harumanis Mango': [
        encodeURI("/images/buah/mangga/058dd8710180392aba22f28e6be62a89.jpg"),
        encodeURI("/images/buah/mangga/6e90afdc6e5114186fc4bc48b8aaa225.jpg"),
        encodeURI("/images/buah/mangga/944fcc93eb2c18196c7254b01cac3d60.jpg")
    ],
    'Honey Pineapple': [
        encodeURI("/images/buah/nanas/bff552ba7a17a4cad1b5be6813e508ba.jpg"),
        encodeURI("/images/buah/nanas/d806a750fa99f788d52f03b7269ad0f9.jpg"),
        encodeURI("/images/buah/nanas/f34792a24db6df14d02d3e1f7bc42553.jpg")
    ],
    'Mangosteen': [
        encodeURI("/images/buah/manggis/04d24571d83174a6ce2b388889e0f9d7.jpg"),
        encodeURI("/images/buah/manggis/2a0990b6987bd640d14d85c5cf40c222.jpg"),
        encodeURI("/images/buah/manggis/490341710341566b001f04ed7f0a200e.jpg")
    ],
    'Rockmelon': [
        encodeURI("/images/buah/melon/7e95a52ef10c6c6e393cd601ebca9e38.jpg"),
        encodeURI("/images/buah/melon/9b826d603c2cbd62cd8b893ef83b314a.jpg"),
        encodeURI("/images/buah/melon/a645183f57e19d47bb15c2d43a89a738.jpg")
    ],
    'Salacca': [
        encodeURI("/images/buah/salak/0d34951d7917a30bc40ad39a12a11b86.jpg"),
        encodeURI("/images/buah/salak/26cd2d3889fecf0db7d48da0e56c6ef6.jpg"),
        encodeURI("/images/buah/salak/92f2c8cfecbcb42657e3aa442dd4043d.jpg")
    ],
    'Watermelon': [
        encodeURI("/images/buah/semangka/3ef69e4351a7b086f44fa5263ee2977b.jpg"),
        encodeURI("/images/buah/semangka/5e873430e9ed9d01ed776c74649fb645.jpg"),
        encodeURI("/images/buah/semangka/c81a24807bccc66982c36705cd98fa81.jpg")
    ],
    'Durian': [
        encodeURI("/images/buah/duren/1e693c9a491dac24ae9f00a383aff9f1.jpg"),
        encodeURI("/images/buah/duren/5f651ba99fe439b516d767983b90c26f.jpg"),
        encodeURI("/images/buah/duren/ac8fd3ab7ffcce03d2fd997bff890b52.jpg")
    ],
    'Dragon Fruit': [
        encodeURI("/images/buah/buah naga/4bd95663e59c77c62f6703d73a60c521.jpg"),
        encodeURI("/images/buah/buah naga/73c4177891144a5bc19111758c2a041c.jpg"),
        encodeURI("/images/buah/buah naga/a44168fda311aed29a192a1459741249.jpg"),
        encodeURI("/images/buah/buah naga/a916807a9386b5c46c9fd3d32f94d1a0.jpg")
    ],

    // SAYURAN
    'French Beans': [
        encodeURI("/images/sayur/buncis/518d4531d1abb9411eae70e10e8235fa.jpg"),
        encodeURI("/images/sayur/buncis/850e331b10c0ccb8b817653578081990.jpg"),
        encodeURI("/images/sayur/buncis/e3a61e99a207077dfddfdadaf9e9a79e.jpg")
    ],
    'Capsicum': [
        encodeURI("/images/sayur/paprika/03c63ab2ec2bb50492dada5c9d1169ad.jpg"),
        encodeURI("/images/sayur/paprika/4463abd43c91e22dcd0e94d783f9b846.jpg"),
        encodeURI("/images/sayur/paprika/9305f7f4057df3631dad7a21c6f35b8a.jpg")
    ],
    'Honey Sweet Potato': [
        encodeURI("/images/sayur/ubi manis/0e5c550ae486ca16fd9b9b695a857516.jpg"),
        encodeURI("/images/sayur/ubi manis/2aced6bcf163f5de33e516191f407a12.jpg"),
        encodeURI("/images/sayur/ubi manis/9d6f8ffe5090cee57d9ab013aed7cd2f.jpg")
    ],
    'Elephant Ginger': [
        encodeURI("/images/sayur/jahe gajah/Kiat-Sukses-Menanam-Jahe-Gajah-dalam-Karung.jpg"),
        encodeURI("/images/sayur/jahe gajah/jahe-3_169.jpg")
    ],
    'Young Ginger': [
        encodeURI("/images/sayur/jahe muda/27c2e119e1339e11a8fc278733dce845.jpg"),
        encodeURI("/images/sayur/jahe muda/a93a42a4f02a35ab9101e42b2378dc7d.jpg"),
        encodeURI("/images/sayur/jahe muda/cf42fa0a0c2942b22e5d5527565a6abb.jpg")
    ],
    'Potato': [
        encodeURI("/images/sayur/kentang/0e5b71533ae3892ef67e15253c03ac30.jpg"),
        encodeURI("/images/sayur/kentang/0fd4ef8215f3e17b3848954d61d00cda.jpg"),
        encodeURI("/images/sayur/kentang/d6cb2d13224dea9b7f5e5c65b016b45d.jpg")
    ],
    'Sweet Potato': [
        encodeURI("/images/sayur/ubi manis/0e5c550ae486ca16fd9b9b695a857516.jpg"),
        encodeURI("/images/sayur/ubi manis/2aced6bcf163f5de33e516191f407a12.jpg")
    ],
    'Watercress': [
        encodeURI("/images/sayur/selada air/279fb40f38964934f6565fabc995701d.jpg"),
        encodeURI("/images/sayur/selada air/2facda92003b9a42b0e820f381cb5903.jpg"),
        encodeURI("/images/sayur/selada air/eb44cc6ae30eb753eb23ddf7400dddfd.jpg")
    ],

    // BUMBU & BUNGA
    'Cinnamon': [
        encodeURI("/images/bumbu & bunga/kayu manis/02a8435a05981047a7ec7bbe36fe827e.jpg"),
        encodeURI("/images/bumbu & bunga/kayu manis/2ac296b402ffeafd7640719ef3732079.jpg"),
        encodeURI("/images/bumbu & bunga/kayu manis/46400a5d60a1b505f67a2b896db596d6.jpg")
    ],
    'Vanilla': [
        encodeURI("/images/bumbu & bunga/vanilla/87fbd0e9323eb66731206310a7a915e8.jpg"),
        encodeURI("/images/bumbu & bunga/vanilla/a34d75e6c966ccabd293afd0ce2ae0dd.jpg"),
        encodeURI("/images/bumbu & bunga/vanilla/eba73f0fcd2de098f5335cb75c755bad.jpg")
    ],
    'Black Pepper': [
        encodeURI("/images/bumbu & bunga/lada hitam/19a542014e0af63104fc4d23c25f0f74.jpg"),
        encodeURI("/images/bumbu & bunga/lada hitam/765e0b175f885dc21293fcbceb765fb6.jpg"),
        encodeURI("/images/bumbu & bunga/lada hitam/87ad3aa42b632a594aafc3604ca1db93.jpg")
    ],
    'Clove': [
        encodeURI("/images/bumbu & bunga/cengkeh/843bc78c8ba0a2f1a7fcc009c5e6fd23.jpg"),
        encodeURI("/images/bumbu & bunga/cengkeh/a4995ba3651946ba31636b707f4bac1c.jpg")
    ],
    'Jasmine Flower': [
        encodeURI("/images/bumbu & bunga/bunga melati/8513c1f6f28394f2df0ac15cfc9250a6.jpg"),
        encodeURI("/images/bumbu & bunga/bunga melati/abd0d39a6aa29c23baafcfb304e0b5ac.jpg"),
        encodeURI("/images/bumbu & bunga/bunga melati/d878c8ad6781452f3e540539244f828f.jpg")
    ],
    'White Pepper': [
        encodeURI("/images/bumbu & bunga/lada putih/8e6fa2cb26128426922fd7d93f8f9fc1.jpg"),
        encodeURI("/images/bumbu & bunga/lada putih/eb3710a07b7b30d8179d6e68c2e02454.jpg"),
        encodeURI("/images/bumbu & bunga/lada putih/fe333c4f5ea0cd04ab88875b33ee6415.jpg")
    ]
  };

  const defaultCategoryImages = {
    fruits: productImagesMap['Mangosteen'][0],
    vegetables: productImagesMap['French Beans'][0],
    spices: productImagesMap['Cinnamon'][0]
  };

  const [activeImages, setActiveImages] = useState({
    fruits: defaultCategoryImages.fruits ? [defaultCategoryImages.fruits] : [],
    vegetables: defaultCategoryImages.vegetables ? [defaultCategoryImages.vegetables] : [],
    spices: defaultCategoryImages.spices ? [defaultCategoryImages.spices] : []
  });

  const allProductKeys = {
    fruits: ['Avocado', 'Harumanis Mango', 'Honey Pineapple', 'Mangosteen', 'Rockmelon', 'Salacca', 'Watermelon', 'Durian', 'Dragon Fruit'],
    vegetables: ['French Beans', 'Capsicum', 'Honey Sweet Potato', 'Elephant Ginger', 'Young Ginger', 'Potato', 'Sweet Potato', 'Watercress'],
    spices: ['Cinnamon', 'Vanilla', 'Black Pepper', 'Clove', 'Jasmine Flower', 'White Pepper']
  };

  const getProdName = (key: string) => (t.commodities as any)[key] || key;

  // --- HANDLER KLIK PRODUK ---
  const handleProductClick = (category: 'fruits' | 'vegetables' | 'spices', productNameKey: string) => {
    setActiveProduct(productNameKey);
    setMobileActiveCategory(category);
    
    setImageIndexes(prev => ({ ...prev, [category]: 0 }));

    const newImages = productImagesMap[productNameKey] || [defaultCategoryImages[category]];
    
    setActiveImages(prev => ({ ...prev, [category]: newImages }));

    const randomAdjective = t.products.adjectives[Math.floor(Math.random() * t.products.adjectives.length)];
    const catName = category === 'fruits' ? t.products.cats.fruits : category === 'vegetables' ? t.products.cats.vegetables : t.products.cats.spices;
    
    setSelectedLabels(prev => ({
        ...prev,
        [category]: { adj: randomAdjective, name: catName }
    }));
  };

  // --- NAVIGASI CAROUSEL (Next/Prev) ---
  const nextImage = (category: 'fruits' | 'vegetables' | 'spices', e: React.MouseEvent) => {
    e.stopPropagation();
    const count = activeImages[category].length;
    if (count <= 1) return;
    setImageIndexes(prev => ({
        ...prev,
        [category]: (prev[category] + 1) % count
    }));
  };

  const prevImage = (category: 'fruits' | 'vegetables' | 'spices', e: React.MouseEvent) => {
    e.stopPropagation();
    const count = activeImages[category].length;
    if (count <= 1) return;
    setImageIndexes(prev => ({
        ...prev,
        [category]: (prev[category] - 1 + count) % count
    }));
  };

  // Komponen Helper untuk Menampilkan Kartu Gambar (Tinggi diubah jadi h-full agar responsif)
  const ImageCard = ({ category }: { category: 'fruits' | 'vegetables' | 'spices' }) => {
      const images = activeImages[category];
      const currentIndex = imageIndexes[category];
      const currentImage = images[currentIndex];
      const hasMultiple = images.length > 1;

      return (
        // PERUBAHAN: Menggunakan h-full agar mengikuti tinggi container induknya
        <div className="relative h-full rounded-sm overflow-hidden shadow-lg border border-stone-200 group">
            <img 
                src={currentImage} 
                alt={category} 
                className="w-full h-full object-cover transition-opacity duration-500" 
            />
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent pointer-events-none opacity-95"></div>
            
            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-baseline gap-2">
                <span className="text-red-500 font-serif font-light italic text-sm tracking-widest">{selectedLabels[category].adj}</span>
                <span className={`font-serif font-thin text-sm tracking-widest uppercase ${category === 'fruits' ? 'text-red-100' : category === 'vegetables' ? 'text-green-100' : 'text-yellow-100'}`}>
                    {category === 'fruits' ? t.products.cats.fruits : category === 'vegetables' ? t.products.cats.vegetables : t.products.cats.spices}
                </span>
                </div>
            </div>

            {hasMultiple && (
                <>
                    <button 
                        onClick={(e) => prevImage(category, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={(e) => nextImage(category, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                        {images.map((_, idx) => (
                            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'}`}></div>
                        ))}
                    </div>
                </>
            )}
        </div>
      );
  };

  return (
    <section id="catalogue" className="py-24 bg-white relative scroll-mt-24">
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
       <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6 reveal-hidden">
            <div className="mb-4 md:mb-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2">{t.products.label}</p>
              <h3 className="text-3xl md:text-5xl font-serif text-green-700">{t.products.title}</h3>
            </div>
            <div className="text-right"><p className="text-stone-500 text-sm font-light">{t.products.subtitle}</p></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 items-stretch reveal-hidden">
            
            {/* KOLOM KIRI (GAMBAR) */}
            <div className="h-full relative md:min-h-[400px]">
               
               {/* Mobile View */}
               <div className="md:hidden flex flex-col items-center justify-center mb-0">
                  <div className="w-full max-w-sm aspect-[4/3] relative">
                      <ImageCard category={mobileActiveCategory} />
                  </div>
               </div>

               {/* Desktop View: 3 Stacked Images */}
               <div className="hidden md:flex flex-col gap-6 h-full">
                   {/* PERUBAHAN: Pembungkus div diberi tinggi 350px */}
                   <div className="h-[350px]"><ImageCard category="fruits" /></div>
                   <div className="h-[350px]"><ImageCard category="vegetables" /></div>
                   <div className="h-[350px]"><ImageCard category="spices" /></div>
               </div>
            </div>

            {/* KOLOM KANAN (LIST PRODUK) */}
            <div className="h-full">
               
               {/* Mobile Tabs */}
               <div className="md:hidden bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 flex flex-col">
                   <div className="flex justify-between items-center px-2 mb-6 border-b border-stone-200 pb-2">
                       {(['fruits', 'vegetables', 'spices'] as const).map((cat) => (
                           <button key={cat} onClick={() => setMobileActiveCategory(cat)} className={`text-xs uppercase tracking-widest transition-all pb-1 ${mobileActiveCategory === cat ? 'text-red-600 font-bold border-b-2 border-red-600' : 'text-stone-400 font-light'}`}>
                             {t.products.cats[cat]}
                           </button>
                       ))}
                   </div>
                   <div className="flex flex-col gap-2">
                       {allProductKeys[mobileActiveCategory].map((key, i) => {
                           const isActive = activeProduct === key;
                           return (
                               <button key={i} onClick={() => handleProductClick(mobileActiveCategory, key)} className={`w-full py-2 px-4 rounded-full text-xs text-left transition-all border flex items-center gap-3 ${isActive ? 'bg-red-600 border-red-600 text-white shadow-md' : 'bg-white border-stone-100 text-stone-600'}`}>
                                 <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-white' : 'bg-red-600'}`}></div> {getProdName(key)}
                               </button>
                           )
                       })}
                   </div>
               </div>

               {/* Desktop List */}
               <div className="hidden md:flex flex-col gap-6 h-full text-left">
                   {/* FRUITS LIST - PERUBAHAN: Tinggi diubah jadi 350px */}
                   <div className="h-[350px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-red-200 transition-colors custom-scrollbar">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-red-600 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10"><Sprout size={24} /> {t.products.cats.fruits}</h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                         {allProductKeys.fruits.map((key, i) => (
                            <li key={i} className={`text-sm flex items-center gap-2 cursor-pointer transition-all ${activeProduct === key ? 'text-red-600 font-bold' : 'text-stone-600 hover:text-red-600'}`} onClick={() => handleProductClick('fruits', key)}>
                               <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === key ? 'bg-red-600' : 'bg-red-600/50'}`}></div> {getProdName(key)}
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* VEGETABLES LIST - PERUBAHAN: Tinggi diubah jadi 350px */}
                   <div className="h-[350px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-green-200 transition-colors custom-scrollbar">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-green-600 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10"><Carrot size={24} /> {t.products.cats.vegetables}</h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                         {allProductKeys.vegetables.map((key, i) => (
                            <li key={i} className={`text-sm flex items-center gap-2 cursor-pointer transition-all ${activeProduct === key ? 'text-green-600 font-bold' : 'text-stone-600 hover:text-green-600'}`} onClick={() => handleProductClick('vegetables', key)}>
                               <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === key ? 'bg-green-600' : 'bg-green-600/50'}`}></div> {getProdName(key)}
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* SPICES LIST - PERUBAHAN: Tinggi diubah jadi 350px */}
                   <div className="h-[350px] bg-stone-50 border border-stone-200 rounded-sm shadow-sm p-6 overflow-y-auto hover:border-yellow-200 transition-colors custom-scrollbar">
                      <h4 className="flex items-center gap-3 font-serif text-2xl text-yellow-500 mb-4 border-b border-stone-200 pb-2 sticky top-0 bg-stone-50 z-10"><Flower2 size={24} /> {t.products.cats.spices}</h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                         {allProductKeys.spices.map((key, i) => (
                            <li key={i} className={`text-sm flex items-center gap-2 cursor-pointer transition-all ${activeProduct === key ? 'text-yellow-600 font-bold' : 'text-stone-600 hover:text-yellow-600'}`} onClick={() => handleProductClick('spices', key)}>
                               <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeProduct === key ? 'bg-yellow-500' : 'bg-yellow-500/50'}`}></div> {getProdName(key)}
                            </li>
                         ))}
                      </ul>
                   </div>
               </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default ProductSection;