import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Ikon WhatsApp (SVG) untuk tampilan brand yang sesuai
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
             <div className="flex items-center gap-3 text-sm text-stone-300 font-light group"><WhatsAppIcon size={16} className="text-green-600 group-hover:text-white transition-colors" /><a href="https://wa.me/6285198782498" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">+62 851 9878 2498</a></div>
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