
import React from 'react';
import { Shield, Cpu, ExternalLink } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface FooterProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] p-12 md:p-24 bg-gradient-to-br from-blue-600 to-blue-700 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute inset-0 grid-bg opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          
          <Reveal>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {t.finalCta.title}
            </h2>
            <p className="text-base md:text-xl text-blue-50 max-w-xl mx-auto mb-12 font-medium opacity-90">
              {t.finalCta.subtitle}
            </p>
            <button 
              onClick={() => scrollTo('contact')}
              className="group bg-white text-blue-600 font-black py-4 px-12 rounded-2xl text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-all hover:shadow-white/20 flex items-center gap-3 mx-auto"
            >
              {t.finalCta.cta}
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
      
      <footer className={`pt-20 pb-12 border-t transition-colors ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg group-hover:scale-110 transition-transform">D</div>
                <span className={`text-xl font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
              </div>
              <p className={`text-xs font-bold leading-relaxed max-w-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Банк, ББСБ-ын зээл төлүүлэлтийн процессыг цогцоор нь автоматжуулах "Enterprise-Grade" систем.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-widest transition-colors">
               <button onClick={() => scrollTo('product')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-500 transition-colors`}>{t.nav.product}</button>
               <button onClick={() => scrollTo('solutions')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-500 transition-colors`}>{t.nav.solutions}</button>
               <button onClick={() => scrollTo('why')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-500 transition-colors`}>{t.nav.why}</button>
               <button onClick={() => scrollTo('customers')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-500 transition-colors`}>{t.nav.customers}</button>
               <button onClick={() => scrollTo('faq')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-500 transition-colors`}>{t.nav.faq}</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Shield size={18}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>ISO 27001</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">Certified Security</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Cpu size={18}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Stable Kernel</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase">v4.2.0 Deploy</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? 'border-slate-900' : 'border-slate-100'}`}>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              © 2024 TND DEBTPRO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                 MADE IN MONGOLIA <span className="text-red-500 text-lg">🇲🇳</span>
               </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
