import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  setIsContactOpen: (isOpen: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setIsContactOpen }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#021a10] text-white pt-24 pb-12 px-6 border-t border-white/5 relative z-10 reveal-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
        <div className="col-span-1">
           <a href="#" className="flex items-center gap-4 mb-8 group">
              <img src="/images/logo.png" alt="BKK Logo" className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                 <h2 className="text-4xl font-serif tracking-widest uppercase text-white">BKK</h2>
                 <p className="text-[9px] font-medium tracking-[0.3em] uppercase opacity-60">PT. Bintang Kiat Kemuliaan</p>
              </div>
           </a>
           <p className="text-stone-400 text-sm font-light leading-relaxed mb-2">{t.footer.tagline}</p>
           <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-2 mb-8">{t.footer.subTagline}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">{t.footer.officeTitle}</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
               <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
               <div>
                 <strong className="text-white block text-xs uppercase tracking-wide mb-1">{t.contact.office}</strong>
                 <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Sawit+Darangdan+No.+3,+Purwakarta,+West+Java+41163+-+Indonesia" target="_blank" rel="noreferrer" className="text-sm text-stone-300 font-light leading-relaxed hover:text-red-400 transition-colors block">
                   Jl. Sawit Darangdan No. 3, Purwakarta<br/>West Java 41163 - Indonesia
                 </a>
               </div>
            </div>
            <div className="flex gap-4">
               <MapPin className="text-green-600 shrink-0 mt-1" size={18} />
               <div>
                 <strong className="text-white block text-xs uppercase tracking-wide mb-1">{t.contact.warehouse}</strong>
                 <a href="https://www.google.com/maps/search/?api=1&query=Husein+Sastranegara+Airport,+Cargo+Park+C.49+Jl.+Padjajaran+No.+156,+Bandung,+West+Java+40174" target="_blank" rel="noreferrer" className="text-sm text-stone-300 font-light leading-relaxed hover:text-red-400 transition-colors block">
                   Husein Sastranegara Airport<br/>Cargo Park C.49 Jl. Padjajaran No. 156,<br/>Bandung, West Java 40174
                 </a>
               </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">{t.footer.contactTitle}</h4>
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-sm text-stone-300 font-light group"><Phone size={16} className="text-green-600 group-hover:text-white transition-colors" /><a href="tel:+62226016306" className="hover:text-red-400 transition-colors">+62 22 6016 306</a></div>
             <div className="flex items-center gap-3 text-sm text-stone-300 font-light group"><Phone size={16} className="text-green-600 group-hover:text-white transition-colors" /><a href="tel:+628176878166" className="hover:text-red-400 transition-colors">+62 817 687 8166</a></div>
             <div className="flex items-center gap-3 text-sm text-stone-300 font-light group mt-4"><Mail size={16} className="text-green-600 group-hover:text-white transition-colors" /><a href="mailto:info@bkkemuliaan.com" className="hover:text-red-400 transition-colors break-all">info@bkkemuliaan.com</a></div>
             <div className="flex items-center gap-3 text-sm text-stone-300 font-light group"><Mail size={16} className="text-green-600 group-hover:text-white transition-colors" /><a href="mailto:Sales-marketing.2@bkkemuliaan.com" className="hover:text-red-400 transition-colors break-all">Sales-marketing.2@bkkemuliaan.com</a></div>
          </div>
        </div>
        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-red-600">{t.footer.linksTitle}</h4>
           <ul className="space-y-4 text-sm text-stone-300 font-light">
             <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>{t.nav.about}</li>
             <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => document.getElementById('catalogue')?.scrollIntoView({behavior:'smooth'})}>{t.nav.product}</li>
             <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setIsContactOpen(true)}>{t.contact.title}</li>
           </ul>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 text-center md:text-left">
          © 2025 PT. Bintang Kiat Kemuliaan. <span className="hidden sm:inline">{t.footer.rights}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <a href="#" className="hover:text-red-500 transition-colors">{t.footer.privacy}</a>
          <a href="#" className="hover:text-red-500 transition-colors">{t.footer.terms}</a>
          <a href="#" className="hover:text-red-500 transition-colors">{t.footer.cookie}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;