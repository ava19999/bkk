import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'ID';

// Struktur Data Produk agar TypeScript tidak bingung
interface ProductSpec {
  label: string;
  value: string;
}

interface ProductData {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  portfolioUrl: string;
  specsTitle: string;
  specs: ProductSpec[];
  packagingDetails: ProductSpec[];
  qualityControl?: string[];
  orderInfo: ProductSpec[];
  images: string[];
}

interface PopularProductsData {
  mangosteen: ProductData;
  salacca: ProductData;
  jasmine: ProductData;
}

const content = {
  EN: {
    nav: {
      about: "About Us",
      global: "Global Reach",
      product: "Product",
      contact: "Contact",
    },
    booking: {
      labelCommodity: "Commodity",
      labelDestination: "Destination",
      labelVolume: "Volume",
      labelQty: "Qty",
      placeholderSelect: "Select",
      placeholderVolume: "0",
      btnQuote: "Request Quote",
      alert: "Please select a commodity and destination.",
      cats: { fruits: "FRUITS", vegetables: "VEGETABLES", spices: "SPICES" }
    },
    popularCard: {
        header: "Popular Indonesia Commodity",
        portfolioBtn: "CLICK OFFICIAL PORTFOLIO",
        specsTitle: "Product Detail",
        packagingTitle: "Packaging & Export Standard",
        qcTitle: "Quality Control Points",
        orderTitle: "Detail Order",
        placeholderDest: "Destination Country",
        placeholderVol: "Volume (MT)",
        emailSubject: "Quote Request",
        emailIntro: "Hello BKK Team,",
        emailReq: "I would like to request a quotation for:",
        emailComm: "Commodity",
        emailDest: "Destination",
        emailVol: "Volume",
        emailThanks: "Thank you.",
        clickDetail: "Detail" // UBAH DISINI
    },
    // --- DATA PRODUK LENGKAP (BAHASA INGGRIS) ---
    popularProducts: {
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
        images: [
          "/images/popular/48cbbd1b8072032c0c3b6441cddbe9e1.jpg", 
          encodeURI("/images/popular/Adventure Instagram Post_20250206_114851_0000.png"), 
          encodeURI("/images/buah/manggis/2a0990b6987bd640d14d85c5cf40c222.jpg")
        ]
      },
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
        qualityControl: undefined,
        orderInfo: [
          { label: "Min Order", value: "1000 kg (1 MT)" },
          { label: "Availability", value: "All Year Round" },
          { label: "Lead Time", value: "1 week" }
        ],
        images: [
          encodeURI("/images/buah/salak/0d34951d7917a30bc40ad39a12a11b86.jpg"),
          encodeURI("/images/buah/salak/26cd2d3889fecf0db7d48da0e56c6ef6.jpg"),
          encodeURI("/images/buah/salak/92f2c8cfecbcb42657e3aa442dd4043d.jpg")
        ]
      },
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
          encodeURI("/images/bumbu & bunga/bunga melati/8513c1f6f28394f2df0ac15cfc9250a6.jpg"),
          encodeURI("/images/bumbu & bunga/bunga melati/abd0d39a6aa29c23baafcfb304e0b5ac.jpg"),
          encodeURI("/images/bumbu & bunga/bunga melati/d878c8ad6781452f3e540539244f828f.jpg")
        ]
      }
    },
    mangosteen: {
      badge: "Popular Product",
      titleMain: "Mangosteen",
      titleSub: "The Queen of Fruits",
      description: "Indonesia's Superfood Commodity. Known for its sweet, juicy white flesh and deep purple rind, harvested at the peak of perfection.",
      feat1Title: "Fresh & Traceable",
      feat1Desc: "Directly sourced from registered farmers with transparent tracking from harvest to shipment.",
      feat2Title: "International Standard",
      feat2Desc: "GACC certified packaging house ensuring global export quality compliance.",
      feat3Title: "Reliable Supply",
      feat3Desc: "Consistent volume availability during harvest seasons to meet your market demands.",
      formTitle: "Get a Quotation",
      inputDest: "Select Destination",
      inputVol: "Volume (MT)",
      btnRequest: "Request Quote"
    },
    hero: {
      hotTag: "HOT",
      hotText: "Premium Mangosteen",
      titleTrusted: "Trusted",
      titleIndonesian: "Indonesian",
      titleSuffix: "Fresh Produce Exporter",
      description: "Bridging Indonesia's Finest Harvest to the Global Market. Proudly serving China, Singapore, Thailand, Malaysia, UAE, Bangladesh, and Canada.",
    },
    history: {
      label: "Our History",
      title: "Established in 2013, legalized in 2016.",
      subtitle: "Indonesia's premier exporter.",
      description: "PT. Bintang Kiat Kemuliaan (BKK) is dedicated to delivering the finest fresh fruits, vegetables, and flowers to the global market. We prioritize quality, consistency, and integrity in every shipment we make to the world.",
      gaccTitle: "GACC Registered",
      gaccDesc: "Our packaging house is legally registered at GACC (Reg No. KEMTAN RI PH-32-73-0018-0418) for Mangosteen and Salacca, ensuring strict global quality standards."
    },
    vision: {
      label: "Our Vision",
      text: "\"To be the most trusted exporter for fruits, vegetables, and flowers.\"",
      subText: "Through a firm commitment and life-long integrity that we provide to every customer.",
      missionTitle: "Our Mission",
      missionSub: "Honesty & Commitment",
      missionDesc: "To cooperate with all stakeholders based on honesty, providing best services such as:",
      points: [
        { title: "Competitive Prices", desc: "Best market value." },
        { title: "Precise Delivery", desc: "On-time logistics." },
        { title: "Finest Goods", desc: "Premium quality produce." }
      ]
    },
    values: {
      label: "Core Values",
      title: "Why Work With Us?",
      cards: [
        { title: "Trust", desc: "We build your trust by giving excellent quality of products and services. These have made us grow over the decades." },
        { title: "Commitment", desc: "We stand on a firm commitment of being the most trusted and developed exporter for Indonesian fresh fruits and vegetables." },
        { title: "Integrity", desc: "We uphold noble values rather than winning sectoral gain. We believe in fair businesses for everyone." }
      ]
    },
    stats: {
      label: "Global Reach",
      title1: "Connecting",
      title2: "Indonesian Harvests",
      title3: "to the World.",
      description: "We uphold our decision-making process based on noble values rather than winning sectoral gain. We firmly believe in the importance of fair businesses for everyone.",
      items: {
        countries: "Export Countries",
        clients: "Happy Clients",
        clientsSub: "Trusting us annually.",
        capacity: "Monthly Capacity",
        capacitySub: "For each commodity.",
        certified: "Certified",
        certifiedSub: "Registered Packaging House."
      }
    },
    products: {
      label: "Our Goods",
      title: "Product Catalogue",
      subtitle: "Explore our premium selection of 23 commodities.",
      cats: { fruits: "Fruits", vegetables: "Vegetables", spices: "Spices & Flowers" },
      adjectives: ['Sensational', 'Premium', 'Popular', 'Exquisite', 'Fresh Harvest', 'Top-Tier', 'Finest', 'Signature', 'Selected', 'Organic']
    },
    partner: {
      title: "Partner With Us.",
      description: "We are looking forward to working with you to bring nature's finest to your market.",
      btn: "Contact Sales"
    },
    footer: {
      tagline: "Trust, Commitment, Integrity.",
      subTagline: "Fruits, Vegetables, and Flowers Exporter",
      officeTitle: "Office Addresses",
      contactTitle: "Contact Us",
      linksTitle: "Quick Links",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
      rights: "All Rights Reserved."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      phone: "Phone / WhatsApp",
      email: "Emails",
      website: "Website",
      location: "Our Locations",
      office: "Main Office:",
      warehouse: "Operational Warehouse:",
    },
    commodities: {
      'Avocado': "Avocado",
      'Harumanis Mango': "Harumanis Mango",
      'Honey Sweet Pineapple': "Honey Sweet Pineapple",
      'Honey Pineapple': "Honey Pineapple",
      'Mangosteen': "Mangosteen",
      'Rockmelon': "Rockmelon",
      'Salacca': "Salacca (Snake Head)",
      'Watermelon': "Watermelon",
      'Durian': "Durian",
      'Dragon Fruit': "Dragon Fruit",
      'French Beans': "French Beans",
      'Capsicum': "Capsicum (Bell Pepper)",
      'Honey Sweet Potato': "Honey Sweet Potato",
      'Elephant Ginger': "Elephant Ginger",
      'Young Ginger': "Young Ginger",
      'Potato': "Potato",
      'Sweet Potato': "Sweet Potato",
      'Watercress': "Watercress",
      'Cinnamon': "Cinnamon",
      'Vanilla': "Vanilla",
      'Black Pepper': "Black Pepper",
      'Clove': "Clove",
      'Jasmine Flower': "Jasmine Flower",
      'White Pepper': "White Pepper"
    }
  },
  ID: {
    nav: {
      about: "Tentang Kami",
      global: "Jangkauan",
      product: "Produk",
      contact: "Kontak",
    },
    booking: {
      labelCommodity: "Komoditas",
      labelDestination: "Tujuan",
      labelVolume: "Volume",
      labelQty: "Jml",
      placeholderSelect: "Pilih",
      placeholderVolume: "0",
      btnQuote: "Minta Penawaran",
      alert: "Mohon pilih komoditas dan tujuan.",
      cats: { fruits: "BUAH", vegetables: "SAYURAN", spices: "REMPAH" }
    },
    popularCard: {
        header: "Komoditas Populer Indonesia",
        portfolioBtn: "LIHAT PORTOFOLIO RESMI",
        specsTitle: "Detail Produk",
        packagingTitle: "Standar Kemasan & Ekspor",
        qcTitle: "Poin Kontrol Kualitas",
        orderTitle: "Detail Pesanan",
        placeholderDest: "Negara Tujuan",
        placeholderVol: "Volume (MT)",
        emailSubject: "Permintaan Penawaran",
        emailIntro: "Halo Tim BKK,",
        emailReq: "Saya ingin meminta penawaran untuk:",
        emailComm: "Komoditas",
        emailDest: "Tujuan",
        emailVol: "Volume",
        emailThanks: "Terima kasih.",
        clickDetail: "Detail" // UBAH DISINI
    },
    // --- DATA PRODUK LENGKAP (BAHASA INDONESIA - TERJEMAHAN) ---
    popularProducts: {
      mangosteen: {
        id: 'mangosteen',
        name: "Manggis Premium",
        subTitle: "MANGGIS INDONESIA PREMIUM UNTUK PASAR GLOBAL",
        description: "Manggis (Garcinia mangostana L.) - Ratu Segala Buah. Dikenal dengan daging putih manis berair dan kulit ungu pekat, dipanen pada tingkat kematangan sempurna.",
        portfolioUrl: "/pdf/mangosteen.pdf", 
        specsTitle: "DETAIL PRODUK",
        specs: [
          { label: "Varietas", value: "Kaligesing Superior" },
          { label: "Grade", value: "Grade A Super (Purple Majesty)" },
          { label: "Ukuran", value: "80-100g/pcs (Grade A)" },
          { label: "Warna Kulit", value: "Ungu Tua Pekat" },
          { label: "Daging Buah", value: "Putih murni, tekstur lembut" },
          { label: "Kematangan", value: "Dipanen pada kematangan optimal" },
          { label: "Toleransi", value: "5% (Kelopak Lengkap), SP1 = 0% Cacat" },
          { label: "Grading 3A", value: "13-16 biji (Cek Ukuran Tangan)" },
          { label: "Grading 2A", value: "17-19 biji (Cek Ukuran Tangan)" },
          { label: "Cacat SP2", value: "30% cacat (Min 3 Kelopak)" },
          { label: "Cacat SP3", value: "Hingga 40-100% cacat (Min 2 Kelopak)" },
          { label: "Catatan", value: "Kelopak & Tangkai Hijau Segar" }
        ],
        qualityControl: [
          "Pemeriksaan Pra-panen: Pengawasan kebun 30 hari sebelum panen",
          "Penyortiran bertahap & proses seleksi ketat"
        ],
        packagingDetails: [
          { label: "Tipe", value: "Keranjang Plastik (4H) / Kotak Karton" },
          { label: "Kode HS", value: "08045" },
          { label: "Dimensi", value: "46 x 36 x 15-450" },
          { label: "Berat Bersih", value: "7 kg/keranjang" },
          { label: "Material", value: "Kertas dalam, busa lembab, Kantong Plastik HD" },
          { label: "Fitur", value: "Ventilasi anti-kondensasi" },
          { label: "Custom", value: "Tersedia Kemasan Custom" }
        ],
        orderInfo: [
          { label: "Min Order", value: "500 kg" },
          { label: "Ketersediaan", value: "Okt, Des, Jan, Feb, Mar, Apr" },
          { label: "Waktu Proses", value: "1-2 minggu (tergantung musim/tujuan)" }
        ],
        images: [
          "/images/popular/48cbbd1b8072032c0c3b6441cddbe9e1.jpg", 
          encodeURI("/images/popular/Adventure Instagram Post_20250206_114851_0000.png"), 
          encodeURI("/images/buah/manggis/2a0990b6987bd640d14d85c5cf40c222.jpg")
        ]
      },
      salacca: {
        id: 'salacca',
        name: "Salak Segar",
        subTitle: "SALAK PONDOH INDONESIA UNTUK EKSPOR",
        description: "Salak Pondoh Segar dari Indonesia. Dikenal dengan kulit coklat mengkilap dan daging putih kekuningan yang manis dan renyah.",
        portfolioUrl: "/pdf/salacca.pdf",
        specsTitle: "SPESIFIKASI TEKNIS",
        specs: [
            { label: "Varietas", value: "Salak Pondoh" },
            { label: "Asal", value: "Indonesia" },
            { label: "Kode HS", value: "08109010" },
            { label: "Ukuran Buah", value: "Panjang 4-7 cm, diameter 3-5 cm" },
            { label: "Berat", value: "Sekitar 80-180 g / buah" },
            { label: "Warna Kulit", value: "Coklat tua mengkilap" },
            { label: "Warna Daging", value: "Putih kekuningan" },
            { label: "Kelembaban", value: "Sekitar 78 %" },
            { label: "Umur Simpan", value: "7-10 hari (Ruang), hingga 3 minggu (Kulkas)" }
        ],
        packagingDetails: [
            { label: "Tipe", value: "Keranjang Plastik" },
            { label: "Berat", value: "5-10 kg / kotak" },
            { label: "Dimensi", value: "46 x 36 x 15-450" },
            { label: "Material", value: "Plastik + Kertas Dalam" },
            { label: "Label", value: "Nama Produk, Kode HS, dll" }
        ],
        qualityControl: undefined,
        orderInfo: [
          { label: "Min Order", value: "1000 kg (1 MT)" },
          { label: "Ketersediaan", value: "Sepanjang Tahun" },
          { label: "Waktu Proses", value: "1 minggu" }
        ],
        images: [
          encodeURI("/images/buah/salak/0d34951d7917a30bc40ad39a12a11b86.jpg"),
          encodeURI("/images/buah/salak/26cd2d3889fecf0db7d48da0e56c6ef6.jpg"),
          encodeURI("/images/buah/salak/92f2c8cfecbcb42657e3aa442dd4043d.jpg")
        ]
      },
      jasmine: {
        id: 'jasmine',
        name: "Bunga Melati Segar",
        subTitle: "MELATI SAMBAC INDONESIA MURNI UNTUK EKSPOR",
        description: "Kuncup Melati Sambac segar, dipanen saat fajar untuk menjaga aroma manis yang kuat. Penting untuk campuran teh, wewangian kelas atas, dan rangkaian bunga religius.",
        portfolioUrl: "/pdf/jasmine.pdf",
        specsTitle: "DETAIL PRODUK & SPESIFIKASI FISIK",
        specs: [
            { label: "Varietas", value: "Jasminum sambac" },
            { label: "Asal", value: "Indonesia" },
            { label: "Kode HS", value: "06031900" },
            { label: "Bentuk", value: "Kuncup bunga utuh" },
            { label: "Warna", value: "Putih krem dengan kuning alami" },
            { label: "Aroma", value: "Melati Hebat, Kuat & Tahan Lama" },
            { label: "Ukuran", value: "Rata-rata diameter 0,5 - 1 cm" },
            { label: "Kadar Air", value: "≤ 10%" },
            { label: "Kemurnian", value: "≥ 99% (Tanpa tangkai/daun)" },
            { label: "Kandungan", value: "Minyak atsiri kualitas tinggi" },
            { label: "Tipe A", value: "Bunga Melati (Dengan Kepala)" },
            { label: "Tipe B", value: "Melati Gundul (Tanpa Kepala)" },
            { label: "Garland S", value: "Kecil / Gemuk Kecil (FS/FSS)" },
            { label: "Garland M", value: "Sedang / Sedang Plus (M+)" },
            { label: "Lainnya", value: "Rangkaian Pisang (BG), Bola Melati" }
        ],
        qualityControl: [
          "Memilih bunga segar berkualitas dengan hati-hati",
          "Panen satu kali: langsung dikemas dan siap kirim"
        ],
         packagingDetails: [
            { label: "Tipe", value: "Kotak Styrofoam" },
            { label: "Dimensi", value: "52 x 37 x 34 cm" },
            { label: "Berat Bersih", value: "9 kg / kotak" },
            { label: "Material", value: "Kertas + Kantong Plastik Standar (Kontrol Kelembaban)" },
            { label: "Pendingin", value: "Termasuk Es" }
        ],
        orderInfo: [
          { label: "Min Order", value: "100 kg (Kargo Udara)" },
          { label: "Ketersediaan", value: "Panen Setiap Hari" },
          { label: "Waktu Proses", value: "2-3 Hari (Hanya Kargo Udara)" }
        ],
        images: [
          encodeURI("/images/bumbu & bunga/bunga melati/8513c1f6f28394f2df0ac15cfc9250a6.jpg"),
          encodeURI("/images/bumbu & bunga/bunga melati/abd0d39a6aa29c23baafcfb304e0b5ac.jpg"),
          encodeURI("/images/bumbu & bunga/bunga melati/d878c8ad6781452f3e540539244f828f.jpg")
        ]
      }
    },
    mangosteen: {
      badge: "Produk Populer",
      titleMain: "Manggis",
      titleSub: "Ratu Segala Buah",
      description: "Komoditas Superfood Indonesia. Dikenal dengan daging putih manis berair dan kulit ungu pekat, dipanen pada tingkat kematangan sempurna.",
      feat1Title: "Segar & Terlacak",
      feat1Desc: "Bersumber langsung dari petani terdaftar dengan pelacakan transparan dari panen hingga pengiriman.",
      feat2Title: "Standar Internasional",
      feat2Desc: "Rumah kemas bersertifikat GACC memastikan kepatuhan kualitas ekspor global.",
      feat3Title: "Pasokan Terpercaya",
      feat3Desc: "Ketersediaan volume yang konsisten selama musim panen untuk memenuhi permintaan pasar Anda.",
      formTitle: "Dapatkan Penawaran",
      inputDest: "Pilih Tujuan",
      inputVol: "Volume (MT)",
      btnRequest: "Minta Penawaran"
    },
    hero: {
      hotTag: "TERLARIS",
      hotText: "Manggis Premium",
      titleTrusted: "Eksportir",           
      titleIndonesian: "Produk Segar",     
      titleSuffix: "Terpercaya Di Indonesia", 
      description: "Menghubungkan Hasil Panen Terbaik Indonesia ke Pasar Global. Melayani China, Singapura, Thailand, Malaysia, UAE, Bangladesh, dan Kanada.",
    },
    history: {
      label: "Sejarah Kami",
      title: "Didirikan tahun 2013, diresmikan tahun 2016.",
      subtitle: "Eksportir utama Indonesia.",
      description: "PT. Bintang Kiat Kemuliaan (BKK) berdedikasi untuk mengirimkan buah, sayur, dan bunga segar terbaik ke pasar global. Kami mengutamakan kualitas, konsistensi, dan integritas dalam setiap pengiriman.",
      gaccTitle: "Terdaftar di GACC",
      gaccDesc: "Rumah kemas kami terdaftar secara legal di GACC (No Reg. KEMTAN RI PH-32-73-0018-0418) untuk Manggis dan Salak, memastikan standar kualitas global yang ketat."
    },
    vision: {
      label: "Visi Kami",
      text: "\"Menjadi eksportir paling terpercaya untuk buah, sayuran, dan bunga.\"",
      subText: "Melalui komitmen teguh dan integritas seumur hidup yang kami berikan kepada setiap pelanggan.",
      missionTitle: "Misi Kami",
      missionSub: "Kejujuran & Komitmen",
      missionDesc: "Bekerja sama dengan semua pemangku kepentingan berdasarkan kejujuran, memberikan layanan terbaik seperti:",
      points: [
        { title: "Harga Kompetitif", desc: "Nilai pasar terbaik." },
        { title: "Pengiriman Tepat", desc: "Logistik tepat waktu." },
        { title: "Produk Terbaik", desc: "Hasil bumi kualitas premium." }
      ]
    },
    values: {
      label: "Nilai Inti",
      title: "Mengapa Bekerja Sama Dengan Kami?",
      cards: [
        { title: "Kepercayaan", desc: "Kami membangun kepercayaan Anda dengan memberikan kualitas produk dan layanan yang sangat baik. Ini membuat kami berkembang selama beberapa dekade." },
        { title: "Komitmen", desc: "Kami berdiri di atas komitmen teguh untuk menjadi eksportir buah dan sayuran segar Indonesia yang paling terpercaya dan berkembang." },
        { title: "Integritas", desc: "Kami menjunjung tinggi nilai-nilai mulia daripada memenangkan keuntungan sektoral. Kami percaya pada bisnis yang adil bagi semua orang." }
      ]
    },
    stats: {
      label: "Jangkauan Global",
      title1: "Menghubungkan",
      title2: "Hasil Panen Indonesia",
      title3: "ke Dunia.",
      description: "Kami menjunjung tinggi proses pengambilan keputusan berdasarkan nilai-nilai mulia. Kami sangat percaya pada pentingnya bisnis yang adil bagi semua orang.",
      items: {
        countries: "Negara Ekspor",
        clients: "Klien Bahagia",
        clientsSub: "Mempercayai kami setiap tahun.",
        capacity: "Kapasitas Bulanan",
        capacitySub: "Untuk setiap komoditas.",
        certified: "Bersertifikat",
        certifiedSub: "Rumah Kemas Terdaftar."
      }
    },
    products: {
      label: "Produk Kami",
      title: "Katalog Produk",
      subtitle: "Jelajahi pilihan premium kami dari 23 komoditas.",
      cats: { fruits: "Buah", vegetables: "Sayuran", spices: "Rempah & Bunga" },
      adjectives: ['Sensational', 'Premium', 'Populer', 'Eksklusif', 'Panen Segar', 'Tingkat Atas', 'Terbaik', 'Khas', 'Pilihan', 'Organik']
    },
    partner: {
      title: "Bermitra Dengan Kami.",
      description: "Kami menantikan kerjasama dengan Anda untuk membawa hasil alam terbaik ke pasar Anda.",
      btn: "Hubungi Penjualan"
    },
    footer: {
      tagline: "Kepercayaan, Komitmen, Integritas.",
      subTagline: "Eksportir Buah, Sayur, dan Bunga",
      officeTitle: "Alamat Kantor",
      contactTitle: "Hubungi Kami",
      linksTitle: "Tautan Cepat",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      cookie: "Kebijakan Cookie",
      rights: "Hak Cipta Dilindungi."
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami ingin mendengar dari Anda",
      phone: "Telepon / WhatsApp",
      email: "Email",
      website: "Situs Web",
      location: "Lokasi Kami",
      office: "Kantor Pusat:",
      warehouse: "Gudang Operasional:",
    },
    commodities: {
      'Avocado': "Alpukat",
      'Harumanis Mango': "Mangga Harumanis",
      'Honey Sweet Pineapple': "Nanas Madu",
      'Honey Pineapple': "Nanas Madu",
      'Mangosteen': "Manggis",
      'Rockmelon': "Melon Rock",
      'Salacca': "Salak",
      'Watermelon': "Semangka",
      'Durian': "Durian",
      'Dragon Fruit': "Buah Naga",
      'French Beans': "Buncis",
      'Capsicum': "Paprika",
      'Honey Sweet Potato': "Ubi Madu",
      'Elephant Ginger': "Jahe Gajah",
      'Young Ginger': "Jahe Muda",
      'Potato': "Kentang",
      'Sweet Potato': "Ubi Jalar",
      'Watercress': "Selada Air",
      'Cinnamon': "Kayu Manis",
      'Vanilla': "Vanili",
      'Black Pepper': "Lada Hitam",
      'Clove': "Cengkeh",
      'Jasmine Flower': "Bunga Melati",
      'White Pepper': "Lada Putih"
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof content['EN'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'ID' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};