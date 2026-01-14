
import React from 'react';
import { Shield, Cpu } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface FooterProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] p-16 md:p-32 bg-blue-600 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10"></div>
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">{t.finalCta.title}</h2>
            <p className="text-base md:text-xl text-blue-50 max-w-xl mx-auto mb-12">{t.finalCta.subtitle}</p>
            <button className="bg-white text-blue-600 font-black py-4 px-12 rounded-xl text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-transform">{t.finalCta.cta}</button>
          </Reveal>
        </div>
      </section>
      
      <footer className={`py-12 border-t ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-black text-white text-xs">D</div>
            <span className="text-sm font-black uppercase tracking-widest">DEBTPRO</span>
          </div>
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">© 2024 TND DEBTPRO. MADE IN MONGOLIA</p>
          <div className="flex gap-8">
             <span className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-500"><Shield size={12}/> ISO 27001</span>
             <span className="flex items-center gap-1 text-[9px] font-black uppercase text-slate-500"><Cpu size={12}/> STABLE KERNEL</span>
          </div>
        </div>
      </footer>
    </>
  );
};
