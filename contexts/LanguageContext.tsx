import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Tipe Data untuk Bahasa
type Language = 'EN' | 'ID';

// 2. Kamus Kata (Dictionary) untuk Seluruh Website
const content = {
  EN: {
    // Header
    nav: {
      about: "About Us",
      global: "Global Reach",
      product: "Product",
      contact: "Contact",
    },
    // Contact Popup
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
    // Hero Section
    hero: {
      hotTag: "HOT",
      hotText: "Premium Mangosteen",
      titleTrusted: "Trusted",
      titleIndonesian: "Indonesian",
      titleSuffix: "Fresh Produce Exporter",
      description: "Bridging Indonesia's Finest Harvest to the Global Market. Proudly serving China, Singapore, Thailand, Malaysia, UAE, Bangladesh, and Canada.",
    },
    // Daftar Buah/Sayur (Untuk Running Text di Hero)
    commodities: {
      avocado: "AVOCADO",
      mango: "HARUMANIS MANGO",
      pineapple: "HONEY SWEET PINEAPPLE",
      mangosteen: "MANGOSTEEN",
      rockmelon: "ROCKMELON",
      snakefruit: "SALACCA (SNAKE HEAD)",
      watermelon: "WATERMELON",
      durian: "DURIAN",
      dragonfruit: "DRAGON FRUIT",
      frenchbeans: "FRENCH BEANS",
      capsicum: "CAPSICUM (BELL PEPPER)",
      sweetpotato: "HONEY SWEET POTATO",
      ginger: "ELEPHANT GINGER",
      potato: "POTATO",
      cinnamon: "CINNAMON",
      vanilla: "VANILLA",
      pepper: "BLACK PEPPER",
      clove: "CLOVE",
    }
  },
  ID: {
    // Header
    nav: {
      about: "Tentang Kami",
      global: "Jangkauan",
      product: "Produk",
      contact: "Kontak",
    },
    // Contact Popup
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
    // Hero Section
    hero: {
      hotTag: "TERLARIS",
      hotText: "Manggis Premium",
      titleTrusted: "Terpercaya",
      titleIndonesian: "Indonesia",
      titleSuffix: "Eksportir Hasil Bumi Segar",
      description: "Menghubungkan Hasil Panen Terbaik Indonesia ke Pasar Global. Melayani China, Singapura, Thailand, Malaysia, UAE, Bangladesh, dan Kanada.",
    },
    // Daftar Buah/Sayur (Terjemahan)
    commodities: {
      avocado: "ALPUKAT",
      mango: "MANGGA HARUMANIS",
      pineapple: "NANAS MADU",
      mangosteen: "MANGGIS",
      rockmelon: "MELON ROCK",
      snakefruit: "SALAK",
      watermelon: "SEMANGKA",
      durian: "DURIAN",
      dragonfruit: "BUAH NAGA",
      frenchbeans: "BUNCIS",
      capsicum: "PAPRIKA",
      sweetpotato: "UBI MADU",
      ginger: "JAHE GAJAH",
      potato: "KENTANG",
      cinnamon: "KAYU MANIS",
      vanilla: "VANILI",
      pepper: "LADA HITAM",
      clove: "CENGKEH",
    }
  }
};

// 3. Membuat Context
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof content['EN']; // t adalah singkatan dari 'translate'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 4. Provider Component (Pembungkus)
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

// 5. Custom Hook untuk mempermudah penggunaan di component lain
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};