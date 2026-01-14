
import React from 'react';
import { 
  Users, 
  Workflow, 
  ShieldCheck, 
  ChevronRight, 
  PieChart, 
  UserCheck, 
  History, 
  Target,
  Layers,
  Zap,
  Network
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface ShowcaseSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Borrower 360 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <Reveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
                <Users size={14} className="text-emerald-500"/>
                <span className="text-[9px] font-black tracking-widest uppercase text-emerald-500">Centralized Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                {lang === 'mn' ? 'Зээлдэгчийн 360° нэгдсэн харагдац' : 'Borrower 360° Unified View'}
              </h2>
              <p className="text-lg text-slate-500 mb-10 font-medium leading-relaxed">
                {lang === 'mn' 
                  ? 'Зээлдэгчийн бүх түүх, харилцаа, зан төлөвийн өгөгдлийг нэг дороос харж, AI-д суурилсан дараагийн алхмын зөвлөмжийг ав.' 
                  : 'Get a complete picture of borrower history, communications, and behavioral data. Act on AI-driven recommendations for the best recovery outcome.'}
              </p>
              <div className="space-y-6">
                {[
                  { icon: <History className="text-blue-500"/>, title: lang === 'mn' ? 'Харилцааны түүх' : 'Communication Logs', desc: lang === 'mn' ? 'Бүх дуудлага, SMS, и-мэйлүүд нэг дор' : 'Every touchpoint tracked in real-time' },
                  { icon: <Target className="text-emerald-500"/>, title: lang === 'mn' ? 'Зан төлөвийн оноо' : 'Behavioral Scoring', desc: lang === 'mn' ? 'Төлөлт хийх магадлалыг AI тооцно' : 'ML models predict payment probability' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative p-8 rounded-[3rem] border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'} dashboard-card`}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Profile Card Mockup */}
              <div className={`p-6 rounded-2xl mb-6 ${isDark ? 'bg-slate-950/50' : 'bg-white shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white">B</div>
                  <div>
                    <h3 className="text-xl font-black">Bat-Erdene.G</h3>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Premium Account • #DEBT-9201</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Total Due</p>
                    <p className="text-lg font-black text-red-500">$12,450.00</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Risk Level</p>
                    <p className="text-lg font-black text-amber-500 uppercase">Critical</p>
                  </div>
                </div>
              </div>

              {/* Activity Timeline Mini */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-0.5 bg-blue-500 h-10 relative left-2.5"></div>
                  <div className="flex-1 text-[10px] font-bold">
                    <span className="text-slate-500">10:45 AM</span> • Automated SMS sent via DebtPro Trigger
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-0.5 bg-slate-800 h-10 relative left-2.5"></div>
                  <div className="flex-1 text-[10px] font-bold">
                    <span className="text-slate-500">Yesterday</span> • Field visit scheduled for Friday
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Smart Allocation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right" delay={200} className="order-2 lg:order-1">
            <div className={`relative p-10 rounded-[3rem] border overflow-hidden ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="absolute inset-0 grid-bg opacity-20"></div>
              
              {/* Distribution Animation Mock */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mb-12 animate-float">
                  <Layers size={32} className="text-white"/>
                </div>
                
                <div className="flex justify-between w-full max-w-sm relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-px h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  {[
                    { color: 'bg-emerald-500', name: 'Agent A' },
                    { color: 'bg-blue-500', name: 'Agent B' },
                    { color: 'bg-purple-500', name: 'Agent C' }
                  ].map((agent, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-xl ${agent.color}/10 border border-${agent.color}/20 flex items-center justify-center relative`}>
                        <div className={`w-3 h-3 rounded-full ${agent.color} animate-ping absolute`}></div>
                        <UserCheck size={20} className={agent.color.replace('bg-', 'text-')}/>
                      </div>
                      <span className="text-[8px] font-black uppercase text-slate-500">{agent.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                <Workflow size={14} className="text-blue-500"/>
                <span className="text-[9px] font-black tracking-widest uppercase text-blue-500">{t.showcase.allocation.impact}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                {t.showcase.allocation.title}
              </h2>
              <p className="text-lg text-slate-500 mb-10 font-medium leading-relaxed">
                {t.showcase.allocation.benefit}
              </p>
              <div className={`p-8 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Network size={20} className="text-emerald-500"/>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight">Dynamic Portfolio Balancing</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {lang === 'mn' 
                    ? 'Систем нь агент бүрийн ур чадвар, гүйцэтгэл дээр үндэслэн багцыг автоматаар хуваарилж, төлүүлэлтийн хурдыг нэмэгдүүлнэ.'
                    : 'The system automatically routes portfolios based on agent capacity, historical success rates, and skill tags to maximize recovery efficiency.'}
                </p>
                <div className="h-2 bg-slate-200/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 animate-[reveal_2s_infinite]" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
