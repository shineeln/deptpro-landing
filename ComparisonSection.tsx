
import React from 'react';
import { FileSpreadsheet, Rocket, XCircle, CheckCircle2 } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal, ExcelChaosAnimation, DebtProOrderAnimation } from './CommonUI';

interface ComparisonSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  
  return (
    <section className={`py-24 md:py-32 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
       <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal>
             <div className="text-center mb-16 md:mb-24">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">{t.excelSection.tag}</div>
                <h2 className={`text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.excelSection.title}</h2>
                <p className={`text-base md:text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.subtitle}</p>
             </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 relative">
             {/* VS Badge */}
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-16 h-16 rounded-full bg-blue-600 text-white text-sm font-black items-center justify-center shadow-2xl border-4 ${isDark ? 'border-slate-950' : 'border-white'}`}>VS</div>
             
             <Reveal direction="right">
                <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all h-full ${isDark ? 'bg-slate-900/20 border-red-500/10' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-100/50'}`}>
                   <ExcelChaosAnimation />
                   <div className="mt-8">
                      <h3 className={`text-xl md:text-2xl font-black mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}><FileSpreadsheet className="text-red-600 dark:text-red-500" size={24}/> {t.excelSection.excel.title}</h3>
                      <p className={`text-sm mb-6 md:mb-8 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.excel.description}</p>
                      <ul className="space-y-3 md:space-y-4">
                         {t.excelSection.excel.items.map((item, idx) => (
                            <li key={idx} className={`flex items-start gap-3 text-xs md:text-sm font-bold ${isDark ? 'text-slate-500' : 'text-slate-600'}`}><XCircle size={16} className="text-red-600 dark:text-red-500 mt-0.5 shrink-0"/> {item}</li>
                         ))}
                      </ul>
                   </div>
                </div>
             </Reveal>
             
             <Reveal direction="left">
                <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all h-full ${isDark ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50/50 border-blue-200 shadow-xl shadow-blue-100/20'}`}>
                   <DebtProOrderAnimation />
                   <div className="mt-8">
                      <h3 className={`text-xl md:text-2xl font-black mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}><Rocket className="text-blue-500" size={24}/> {t.excelSection.debtpro.title}</h3>
                      <p className={`text-sm mb-6 md:mb-8 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{t.excelSection.debtpro.description}</p>
                      <ul className="space-y-3 md:space-y-4">
                         {t.excelSection.debtpro.items.map((item, idx) => (
                            <li key={idx} className={`flex items-start gap-3 text-xs md:text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/> {item}</li>
                         ))}
                      </ul>
                   </div>
                </div>
             </Reveal>
          </div>
          
          <Reveal>
             <div className={`rounded-[2rem] md:rounded-[2.5rem] border overflow-hidden overflow-x-auto no-scrollbar ${isDark ? 'bg-slate-900/10 border-slate-800' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200/50'}`}>
                <table className="w-full text-left border-collapse min-w-[600px]">
                   <thead>
                      <tr className={isDark ? 'bg-slate-900/50' : 'bg-slate-50'}>
                         <th className={`px-6 md:px-8 py-4 md:py-6 text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Feature</th>
                         <th className="px-6 md:px-8 py-4 md:py-6 text-[10px] font-black uppercase tracking-widest text-red-600">Legacy Excel</th>
                         <th className="px-6 md:px-8 py-4 md:py-6 text-[10px] font-black uppercase tracking-widest text-blue-600">DebtPro OS</th>
                      </tr>
                   </thead>
                   <tbody className="text-xs md:text-sm font-bold">
                      {t.excelSection.table.features.map((feature, i) => (
                         <tr key={i} className={`border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                            <td className={`px-6 md:px-8 py-4 md:py-5 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{feature}</td>
                            <td className={`px-6 md:px-8 py-4 md:py-5 ${isDark ? 'text-red-500/70' : 'text-red-600/80'}`}>{t.excelSection.table.excelValues[i]}</td>
                            <td className="px-6 md:px-8 py-4 md:py-5 text-blue-600 flex items-center gap-2">
                               <CheckCircle2 size={14} className="text-emerald-500"/>
                               {t.excelSection.table.debtproValues[i]}
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </Reveal>
       </div>
    </section>
  );
};
