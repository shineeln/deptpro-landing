
import React from 'react';
import { Cpu, ArrowRight, Eye, ChevronLeft, ChevronRight, LayoutDashboard, Users, Scale, MessageSquare, TrendingUp } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

interface HeroProps {
  lang: Language;
  theme: 'light' | 'dark';
  activeSlide: number;
  setActiveSlide: (idx: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, theme, activeSlide, setActiveSlide }) => {
  const t = i18n[lang];

  const heroSlides = [
    { id: 'dashboard', icon: <LayoutDashboard size={14}/>, title: t.hero.carousel.dashboard, component: <PreviewCommandCenter lang={lang} theme={theme}/> },
    { id: 'profile', icon: <Users size={14}/>, title: t.hero.carousel.profile, component: <PreviewBorrower360 lang={lang} theme={theme}/> },
    { id: 'legal', icon: <Scale size={14}/>, title: t.hero.carousel.legal, component: <PreviewLegalPipeline lang={lang} theme={theme}/> },
    { id: 'sms', icon: <MessageSquare size={14}/>, title: t.hero.carousel.sms, component: <PreviewSMSDashboard lang={lang} theme={theme}/> },
    { id: 'performance', icon: <TrendingUp size={14}/>, title: t.hero.carousel.performance, component: <PreviewPerformance lang={lang} theme={theme}/> },
  ];

  return (
    <header className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="bloom top-0 left-1/2 -translate-x-1/2 opacity-30"></div>
      <div className="absolute inset-0 grid-bg -z-10"></div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-12">
        <Reveal>
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
              <Cpu size={14} className="text-blue-500 animate-spin-slow"/>
              <span className="text-xs font-black tracking-widest uppercase text-blue-500">{t.hero.tag}</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
             {lang === 'mn' ? <>Зээл төлүүлэлтийн <br /><span className="gradient-text">cockpit удирдлага.</span></> : <>The command <br /><span className="gradient-text">cockpit for recovery.</span></>}
           </h1>
           <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-medium">{t.hero.subtitle}</p>
           <div className="flex justify-center gap-4">
             <button className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl shadow-xl flex items-center gap-2 uppercase text-xs tracking-widest">{t.hero.cta} <ArrowRight size={18}/></button>
             <button className={`font-black py-4 px-8 rounded-xl border flex items-center gap-2 text-xs uppercase tracking-widest ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><Eye size={18} className="text-blue-500"/> {t.hero.secondary}</button>
           </div>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative w-full group">
         <div className={`dashboard-card rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden min-h-[550px] flex flex-col ${theme === 'dark' ? 'bg-slate-900/40' : 'bg-white/80 backdrop-blur-xl'}`}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 pb-6 border-b border-slate-800/20">
               {heroSlides.map((slide, idx) => (
                  <button key={slide.id} onClick={() => setActiveSlide(idx)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeSlide === idx ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-blue-500'}`}>
                     {slide.icon} {slide.title}
                  </button>
               ))}
            </div>
            <div className="flex-1 relative">{heroSlides[activeSlide].component}</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => setActiveSlide((activeSlide === 0 ? heroSlides.length - 1 : activeSlide - 1))} className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50'}`}><ChevronLeft size={20}/></button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => setActiveSlide((activeSlide === heroSlides.length - 1 ? 0 : activeSlide + 1))} className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50'}`}><ChevronRight size={20}/></button>
            </div>
         </div>
      </div>
    </header>
  );
};
