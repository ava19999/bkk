import { LogisticsService, Advantage } from './types';

// --- DATA SERVICES (Tetap) ---
export const SERVICES: LogisticsService[] = [
  {
    id: 'fruit-mangosteen',
    name: 'Mangosteen',
    type: 'PREMIUM FRUIT',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'SEASONAL',
    tags: ['Tropical', 'Queen of Fruits', 'Fresh']
  },
  {
    id: 'fruit-mango',
    name: 'Harumanis Mango',
    type: 'PREMIUM FRUIT',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'SEASONAL',
    tags: ['Sweet', 'Aromatic', 'Juicy']
  },
  {
    id: 'spice-vanilla',
    name: 'Planifolia Vanilla',
    type: 'SPICES',
    image: 'https://images.unsplash.com/photo-1606132766345-565451e5e054?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'DRIED / BEANS',
    tags: ['Aromatic', 'Baking', 'Premium']
  },
  {
    id: 'veg-ginger',
    name: 'Elephant Ginger',
    type: 'VEGETABLES',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200',
    startingPrice: 'FRESH / WASHED',
    tags: ['Medicinal', 'Spicy', 'Root']
  }
];

// --- DATA ADVANTAGES (Tetap) ---
export const ADVANTAGES: Advantage[] = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through transparent and reliable export practices.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Quality',
    description: 'GACC registered packaging house ensuring global standards.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000'
  }
];

// --- DATA TESTIMONIALS (Tetap) ---
export const TESTIMONIALS = [
  {
    quote: "BKK consistently delivers the freshest mangosteens we have received in Shanghai.",
    author: "Chen Wei",
    position: "Shanghai Import Co.",
    avatar: "https://i.pravatar.cc/150?u=chen"
  },
  {
    quote: "Professional handling and excellent quality control for our vanilla shipments.",
    author: "Sarah Jenkins",
    position: "Global Spices UK",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

// --- DATA POPULAR PRODUCTS ---
export const POPULAR_PRODUCTS = {
    // 1. MANGOSTEEN
    mangosteen: {
      id: 'mangosteen',
      name: "Premium Mangosteen",
      subTitle: "PREMIUM INDONESIAN MANGOSTEEN FOR GLOBAL MARKETS",
      description: "Mangosteen (Garcinia mangostana L.) - The Queen of Fruits. Known for its sweet, juicy white flesh and deep purple rind, harvested at the peak of perfection.",
      
      portfolioUrl: "/pdf/mangosteen.pdf", 
      
      specsTitle: "PRODUCT DETAIL",
      specs: [
        { label: "Variety", value: "Kaligesing Superior" },
        { label: "Grade", value: "Grade A Super (Purple Majesty)" },
        { label: "Size", value: "80-100g/pcs (Grade A)" },
        { label: "Skin Color", value: "Dark purple" },
        { label: "Flesh", value: "Pure white, soft texture" },
        { label: "Maturity", value: "Harvested on optimal mature" },
        { label: "Tolerance", value: "5% (Complete Ear Leaves), SP1 = 0% Defect" },
        { label: "Grading 3A", value: "13-16 seeds (Hand Size Check)" },
        { label: "Grading 2A", value: "17-19 seeds (Hand Size Check)" },
        { label: "Defects SP2", value: "30% defect (Min 3 Ear Leaves)" },
        { label: "Defects SP3", value: "Up to 40-100% defect (Min 2 Ear Leaves)" },
        { label: "Note", value: "Fresh Green Ear Leaves & Stems" }
      ],
      qualityControl: [
        "Pre-harvest Check: Garden supervision 30 days before harvest",
        "Gradually sorting & strict selection process"
      ],
      packagingDetails: [
        { label: "Type", value: "Plastic Basket (4H) / Carton Box" },
        { label: "HS Code", value: "08045" },
        { label: "Dimensions", value: "46 x 36 x 15-450" },
        { label: "Net Weight", value: "7 kg/basket" },
        { label: "Material", value: "Inner paper, layer moistened foam, HD Plastic Bag" },
        { label: "Feature", value: "Anti-condensation ventilation" },
        { label: "Custom", value: "Available Custom Packaging" }
      ],
      orderInfo: [
        { label: "Min Order", value: "500 kg" },
        { label: "Availability", value: "Oct, Dec, Jan, Feb, Mar, Apr" },
        { label: "Lead Time", value: "1-2 weeks (depends on season/destination)" }
      ],
      // [PERUBAHAN DI SINI] 
      // Gambar lama dihapus total, diganti dengan path folder1, folder2, folder3 yang baru.
      images: [
        // GROUP 1: Slide Atas (folder1)
        [
            "/images/popular/mangosteen/folder1/1.jpg", 
            "/images/popular/mangosteen/folder1/2.jpg", 
            "/images/popular/mangosteen/folder1/3.jpeg" // Perhatikan .jpeg
        ],
        // GROUP 2: Slide Tengah (folder2)
        [
            "/images/popular/mangosteen/folder2/1.jpg",
            "/images/popular/mangosteen/folder2/2.jpg",
            "/images/popular/mangosteen/folder2/3.jpg",
            "/images/popular/mangosteen/folder2/4.jpg"
        ],
        // GROUP 3: Slide Bawah (folder3)
        [
            "/images/popular/mangosteen/folder3/1.png" // Perhatikan .png
        ]
      ]
    },

    // 2. SALACCA
    salacca: {
      id: 'salacca',
      name: "Fresh Salacca (Snake Fruit)",
      subTitle: "INDONESIAN PONDOH SALLACA FOR EXPORT",
      description: "Fresh Pondoh Sallaca from Indonesia. Known for its glossy brown skin and sweet, crunchy yellowish-white flesh.",
      
      portfolioUrl: "/pdf/salacca.pdf",

      specsTitle: "TECHNICAL SPECIFICATIONS",
      specs: [
          { label: "Variety", value: "Pondoh Sallaca" },
          { label: "Origin", value: "Indonesia" },
          { label: "HS Code", value: "08109010" },
          { label: "Fruit Size", value: "4-7 cm long, 3-5 cm diameter" },
          { label: "Weight", value: "Approx. 80-180 g / fruit" },
          { label: "Skin Color", value: "Dark glossy brown" },
          { label: "Flesh Color", value: "Yellowish - white" },
          { label: "Moisture", value: "Approx. 78 %" },
          { label: "Shelf Life", value: "7-10 days (Room), up to 3 weeks (Refrig)" }
      ],
      packagingDetails: [
          { label: "Type", value: "Plastic Basket" },
          { label: "Weight", value: "5-10 kg / box" },
          { label: "Dimensions", value: "46 x 36 x 15-450" },
          { label: "Material", value: "Plastic + Inner Paper" },
          { label: "Label", value: "Product Name, HS Code, etc" }
      ],
      orderInfo: [
        { label: "Min Order", value: "1000 kg (1 MT)" },
        { label: "Availability", value: "All Year Round" },
        { label: "Lead Time", value: "1 week" }
      ],
      images: [
        "/images/buah/salak/0d34951d7917a30bc40ad39a12a11b86.jpg",
        "/images/buah/salak/26cd2d3889fecf0db7d48da0e56c6ef6.jpg",
        "/images/buah/salak/92f2c8cfecbcb42657e3aa442dd4043d.jpg"
      ]
    },

    // 3. JASMINE
    jasmine: {
      id: 'jasmine',
      name: "Fresh Jasmine",
      subTitle: "PURE INDONESIAN JASMINE SAMBAC FOR EXPORT",
      description: "Fresh Jasmine Sambac buds, harvested at dawn to preserve their potent, sweet fragrance. Essential for tea blending, high-end perfumery, and religious garlands.",
      
      portfolioUrl: "/pdf/jasmine.pdf",

      specsTitle: "PRODUCT DETAIL & PHYSICAL SPECIFICATIONS",
      specs: [
          { label: "Variety", value: "Jasminum sambac" },
          { label: "Origin", value: "Indonesia" },
          { label: "HS Code", value: "06031900" },
          { label: "Form", value: "Intact flower buds" },
          { label: "Color", value: "Creige white with natural yellow" },
          { label: "Aroma", value: "Great Jasmine, Strong & Durable" },
          { label: "Size", value: "Avg diameter 0,5 - 1 cm" },
          { label: "Water Content", value: "≤ 10%" },
          { label: "Purity", value: "≥ 99% (No stems/leaves)" },
          { label: "Content", value: "High quality essential oil" },
          { label: "Type A", value: "Jasmine Flower (With Head)" },
          { label: "Type B", value: "Jasmine Bald (Headless)" },
          { label: "Garland S", value: "Small / Fat Small (FS/FSS)" },
          { label: "Garland M", value: "Medium / Medium Plus (M+)" },
          { label: "Other", value: "Banana Garland (BG), Garland Ball" }
      ],
      qualityControl: [
        "Carefully choosing quality fresh flowers",
        "One time harvest: immediately packed and ready to send"
      ],
       packagingDetails: [
          { label: "Type", value: "Styrofoam Box" },
          { label: "Dimensions", value: "52 x 37 x 34 cm" },
          { label: "Net Weight", value: "9 kg / box" },
          { label: "Material", value: "Paper + Standard Plastic Bag (Moisture Control)" },
          { label: "Cooling", value: "Ice Included" }
      ],
      orderInfo: [
        { label: "Min Order", value: "100 kg (Air Freight)" },
        { label: "Availability", value: "Daily Harvest" },
        { label: "Lead Time", value: "2-3 Days (Air Cargo Only)" }
      ],
      images: [
        "/images/bumbu & bunga/bunga melati/8513c1f6f28394f2df0ac15cfc9250a6.jpg",
        "/images/bumbu & bunga/bunga melati/abd0d39a6aa29c23baafcfb304e0b5ac.jpg",
        "/images/bumbu & bunga/bunga melati/d878c8ad6781452f3e540539244f828f.jpg"
      ]
    }
};