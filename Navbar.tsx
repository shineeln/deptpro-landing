
import React from 'react';
import { ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import { i18n, Language } from './i18n';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  megaMenu: boolean;
  setMegaMenu: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, megaMenu, setMegaMenu }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-panel py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">D</div>
          <span className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
        </div>
        
        <div className={`hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          <div className="hover:text-blue-500 cursor-pointer flex items-center gap-1.5" onMouseEnter={() => setMegaMenu(true)}>
            {t.nav.product} <ChevronDown size={14}/>
          </div>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.why}</a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.customers}</a>
        </div>

        <div className="flex items-center gap-5">
          {/* Enhanced Language Switcher */}
          <div className={`relative flex items-center p-1 rounded-full border transition-all ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-200 border-slate-300 shadow-inner'}`}>
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-600 rounded-full transition-all duration-300 ease-out shadow-md shadow-blue-600/20 ${lang === 'en' ? 'translate-x-full' : 'translate-x-0'}`}
            />
            <button 
              onClick={() => setLang('mn')} 
              className={`relative z-10 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${lang === 'mn' ? 'text-white' : isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-600 hover:text-slate-900'}`}
            >
              MN
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`relative z-10 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${lang === 'en' ? 'text-white' : isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-600 hover:text-slate-900'}`}
            >
              EN
            </button>
          </div>

          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className={`p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 ${isDark ? 'border-slate-800 bg-slate-900 text-yellow-400' : 'border-slate-300 bg-white text-slate-600 shadow-sm'}`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className={`hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95`}>
            {t.nav.demo}
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <div 
        className={`absolute top-full left-0 right-0 glass-panel border-y transition-all duration-500 overflow-hidden ${megaMenu ? 'max-h-[500px] py-12 opacity-100' : 'max-h-0 opacity-0'} ${isDark ? 'border-slate-800' : 'border-slate-200'}`} 
        onMouseLeave={() => setMegaMenu(false)}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-12">
          {Object.keys(i18n.en.megaMenu).map(key => (
             <div key={key} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Globe size={20}/>
                   </div>
                   <h4 className={`text-sm font-black uppercase tracking-widest transition-colors ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500`}>
                      {(t as any).megaMenu[key].title}
                   </h4>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{(t as any).megaMenu[key].desc}</p>
             </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
