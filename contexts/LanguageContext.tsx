import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'ID';

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
      // Fruits
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
      // Veg
      'French Beans': "French Beans",
      'Capsicum': "Capsicum (Bell Pepper)",
      'Honey Sweet Potato': "Honey Sweet Potato",
      'Elephant Ginger': "Elephant Ginger",
      'Young Ginger': "Young Ginger",
      'Potato': "Potato",
      'Sweet Potato': "Sweet Potato",
      'Watercress': "Watercress",
      // Spices
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
      titleTrusted: "Terpercaya",
      titleIndonesian: "Indonesia",
      titleSuffix: "Eksportir Hasil Bumi Segar",
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
      adjectives: ['Sensasional', 'Premium', 'Populer', 'Eksklusif', 'Panen Segar', 'Tingkat Atas', 'Terbaik', 'Khas', 'Pilihan', 'Organik']
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
      // Buah
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
      // Sayur
      'French Beans': "Buncis",
      'Capsicum': "Paprika",
      'Honey Sweet Potato': "Ubi Madu",
      'Elephant Ginger': "Jahe Gajah",
      'Young Ginger': "Jahe Muda",
      'Potato': "Kentang",
      'Sweet Potato': "Ubi Jalar",
      'Watercress': "Selada Air",
      // Rempah
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