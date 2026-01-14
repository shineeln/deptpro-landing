
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
  
  return (
    <section className={`py-32 relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
       <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal>
             <div className="text-center mb-24">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">{t.excelSection.tag}</div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">{t.excelSection.title}</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">{t.excelSection.subtitle}</p>
             </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-20 h-20 rounded-full bg-blue-600 text-white font-black items-center justify-center shadow-2xl border-4 border-slate-950">VS</div>
             <Reveal direction="right">
                <div className={`p-10 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900/20 border-red-500/10' : 'bg-slate-50 border-slate-200 shadow-xl'}`}>
                   <ExcelChaosAnimation />
                   <div className="mt-8">
                      <h3 className="text-2xl font-black mb-4 flex items-center gap-3"><FileSpreadsheet className="text-red-500" size={28}/> {t.excelSection.excel.title}</h3>
                      <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">{t.excelSection.excel.description}</p>
                      <ul className="space-y-4">
                         {t.excelSection.excel.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-500"><XCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> {item}</li>
                         ))}
                      </ul>
                   </div>
                </div>
             </Reveal>
             <Reveal direction="left">
                <div className={`p-10 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50 border-blue-200 shadow-xl'}`}>
                   <DebtProOrderAnimation />
                   <div className="mt-8">
                      <h3 className="text-2xl font-black mb-4 flex items-center gap-3"><Rocket className="text-blue-500" size={28}/> {t.excelSection.debtpro.title}</h3>
                      <p className="text-sm opacity-60 mb-8 font-medium leading-relaxed">{t.excelSection.debtpro.description}</p>
                      <ul className="space-y-4">
                         {t.excelSection.debtpro.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs font-bold"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/> {item}</li>
                         ))}
                      </ul>
                   </div>
                </div>
             </Reveal>
          </div>
          <Reveal>
             <div className={`rounded-[2.5rem] border overflow-hidden ${theme === 'dark' ? 'bg-slate-900/10 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-slate-200/50'}`}>
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className={theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-50'}>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Feature</th>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-red-500">Legacy Excel</th>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-blue-600">DebtPro OS</th>
                      </tr>
                   </thead>
                   <tbody className="text-xs font-bold">
                      {t.excelSection.table.features.map((feature, i) => (
                         <tr key={i} className={`border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-50'}`}>
                            <td className="px-8 py-5 text-slate-400">{feature}</td>
                            <td className="px-8 py-5 text-red-500/70">{t.excelSection.table.excelValues[i]}</td>
                            <td className="px-8 py-5 text-blue-600 flex items-center gap-2">
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
