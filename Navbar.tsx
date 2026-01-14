
import React from 'react';
import { ChevronDown, Sun, Moon } from 'lucide-react';
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
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-panel py-3">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">D</div>
          <span className={`text-lg font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <div className="hover:text-blue-500 cursor-pointer flex items-center gap-1" onMouseEnter={() => setMegaMenu(true)}>
            {t.nav.product} <ChevronDown size={12}/>
          </div>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.why}</a>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center p-0.5 rounded-lg border ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-100'}`}>
            <button onClick={() => setLang('mn')} className={`px-2 py-1 text-[9px] font-bold rounded-md ${lang === 'mn' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}>MN</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 text-[9px] font-bold rounded-md ${lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}>EN</button>
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-lg border ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-yellow-400' : 'border-slate-200 bg-white text-slate-600'}`}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg">{t.nav.demo}</button>
        </div>
      </div>

      <div className={`absolute top-full left-0 right-0 glass-panel border-y border-slate-800 transition-all overflow-hidden ${megaMenu ? 'max-h-[500px] py-10 opacity-100' : 'max-h-0 opacity-0'}`} onMouseLeave={() => setMegaMenu(false)}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8">
          {Object.keys(i18n.en.megaMenu).map(key => (
             <div key={key} className="group cursor-pointer">
                <h4 className="text-xs font-black uppercase text-blue-500 mb-1">{(t as any).megaMenu[key].title}</h4>
                <p className="text-[10px] text-slate-500">{(t as any).megaMenu[key].desc}</p>
             </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
