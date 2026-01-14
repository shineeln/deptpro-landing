
import React from 'react';
import { Mail, Phone, User, Building, Send, CheckCircle2 } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface ContactSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
  submitted: boolean;
  isSubmitting: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, theme, submitted, isSubmitting, handleFormSubmit }) => {
  const t = i18n[lang];
  
  return (
    <section id="contact" className={`py-24 transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div>
              <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">Partnership</h3>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1]">{t.contactSection.title}</h2>
              <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed">{t.contactSection.subtitle}</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6"><div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center shadow-inner"><Mail size={24}/></div><div><div className="text-[10px] font-black uppercase text-slate-400 mb-1">Email us</div><div className="text-lg font-bold">contact@tnd.mn</div></div></div>
                <div className="flex items-center gap-6"><div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center shadow-inner"><Phone size={24}/></div><div><div className="text-[10px] font-black uppercase text-slate-400 mb-1">Call sales</div><div className="text-lg font-bold">+976 7700-1122</div></div></div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
             <div className={`p-8 md:p-12 rounded-[3rem] border relative overflow-hidden dashboard-card ${theme === 'dark' ? 'bg-slate-900/30' : 'bg-white'}`}>
               {submitted ? (
                 <div className="py-20 text-center animate-slide-up">
                   <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl"><CheckCircle2 size={40}/></div>
                   <h3 className="text-2xl font-black mb-4">{t.contactSection.success}</h3>
                 </div>
               ) : (
                 <form onSubmit={handleFormSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{t.contactSection.name}</label>
                       <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                         <input required placeholder={t.contactSection.placeholders.name} className={`w-full pl-12 pr-4 py-3.5 rounded-xl border outline-none text-sm transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-400'}`} />
                       </div>
                     </div>
                     <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{t.contactSection.org}</label>
                       <div className="relative">
                         <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                         <input required placeholder={t.contactSection.placeholders.org} className={`w-full pl-12 pr-4 py-3.5 rounded-xl border outline-none text-sm transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-400'}`} />
                       </div>
                     </div>
                   </div>
                   <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all uppercase text-xs tracking-widest">
                     {isSubmitting ? <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"/> : <>{t.contactSection.submit} <Send size={16}/></>}
                   </button>
                 </form>
               )}
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
