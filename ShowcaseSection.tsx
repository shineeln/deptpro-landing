
import React, { useState, useEffect } from 'react';
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
  Network,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  Send,
  Bell,
  Check,
  MoreHorizontal
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface ShowcaseSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

const SMSAutomationAnimation: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [activeItems, setActiveItems] = useState([0, 1, 2]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItems(prev => prev.map(item => (item + 1) % 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const queueItems = [
    { name: 'Damdin.B', status: 'Delivered', time: 'Just now', color: 'emerald' },
    { name: 'Suren.D', status: 'Delivered', time: '1s ago', color: 'emerald' },
    { name: 'Bolor.E', status: 'Pending', time: 'Sending...', color: 'blue' },
    { name: 'Anar.M', status: 'Queued', time: 'In queue', color: 'slate' },
    { name: 'Tsetseg.B', status: 'Queued', time: 'In queue', color: 'slate' },
  ];

  return (
    <div className={`relative w-full h-[400px] flex flex-col p-6 md:p-8 rounded-[3rem] border overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      {/* Header of the mini-dashboard */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <Bell size={20} className="animate-pulse" />
          </div>
          <div>
            <h4 className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Mass SMS Engine</h4>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">System Online</span>
            </div>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full border text-[10px] font-black ${isDark ? 'bg-slate-950/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
          99.9% SUCCESS RATE
        </div>
      </div>

      {/* Message Queue Visual */}
      <div className="flex-1 space-y-3 relative z-10">
        {queueItems.map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-700 transform ${
              activeItems.includes(i) ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-40 scale-95'
            } ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                item.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : 
                item.color === 'blue' ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-500/10 text-slate-500'
              }`}>
                {item.color === 'emerald' ? <Check size={16} /> : <Clock size={16} className="animate-spin-slow" />}
              </div>
              <div>
                <div className={`text-xs font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{item.name}</div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">{item.status} • {item.time}</div>
              </div>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full ${
               item.color === 'emerald' ? 'bg-emerald-500' : 
               item.color === 'blue' ? 'bg-blue-500 animate-pulse' : 'bg-slate-700'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 -right-10 opacity-10 pointer-events-none">
        <MessageSquare size={200} className="text-blue-500" />
      </div>
    </div>
  );
};

// Helper Icon for the queue
const Clock: React.FC<{ size: number, className?: string }> = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Borrower 360 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <Reveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
                <Users size={16} className="text-emerald-500"/>
                <span className="text-xs font-black tracking-widest uppercase text-emerald-500">Asset & Linkage 360°</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'mn' ? 'Харилцагч ба Барьцаа хөрөнгө' : 'Borrower & Collateral 360°'}
              </h2>
              <p className={`text-lg mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {lang === 'mn' 
                  ? 'Зээлдэгч, хамтран зээлдэгч болон барьцаа хөрөнгийн мэдээллийг нэг дор төвлөрүүлж, CallPro-оор холбогдох боломж.' 
                  : 'Centralize main borrower, co-borrower, and collateral details. Access family links and work info instantly via one interface.'}
              </p>
              <div className="space-y-7">
                {[
                  { icon: <ShieldCheck className="text-blue-500"/>, title: lang === 'mn' ? 'Барьцаа хөрөнгө' : 'Collateral View', desc: lang === 'mn' ? 'Автомашин, үл хөдлөх хөрөнгийн дэлгэрэнгүй' : 'Detailed car, real estate, and asset logs' },
                  { icon: <Target className="text-emerald-500"/>, title: lang === 'mn' ? 'CallPro Интеграц' : 'CallPro Integration', desc: lang === 'mn' ? 'Системээс шууд залгаж, бүртгэх' : 'Click-to-call direct from the borrower card' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-900' : 'bg-white shadow-sm'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-base font-black uppercase tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h4>
                      <p className={`text-sm mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative p-8 rounded-[3rem] border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-xl'} dashboard-card`}>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className={`p-8 rounded-2xl mb-6 ${isDark ? 'bg-slate-950/50' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white">B</div>
                  <div>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Bat-Erdene.G</h3>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mt-1">Polaris ID: 802991 • Premium</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className={`p-5 rounded-xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Risk Category</p>
                    <p className="text-xl font-black text-red-500">Substandard</p>
                  </div>
                  <div className={`p-5 rounded-xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Action Track</p>
                    <p className={`text-xl font-black ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>3 Contacts</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-0.5 bg-blue-500 h-10 relative left-3"></div>
                  <div className={`flex-1 text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="text-slate-500 uppercase text-[10px] mr-1">CallPro • </span> Outbound call successfully recorded
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-0.5 bg-slate-400 h-10 relative left-3"></div>
                  <div className={`flex-1 text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="text-slate-500 uppercase text-[10px] mr-1">DocGen • </span> Notice of Default #902 Printed
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SMS Automation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <Reveal direction="right" className="order-2 lg:order-1">
              <SMSAutomationAnimation isDark={isDark} />
           </Reveal>

           <Reveal direction="left" className="order-1 lg:order-2">
             <div>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                 <Zap size={16} className="text-blue-500"/>
                 <span className="text-xs font-black tracking-widest uppercase text-blue-500">{t.showcase.sms.impact}</span>
               </div>
               <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 {t.showcase.sms.title}
               </h2>
               <p className={`text-lg mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                 {t.showcase.sms.benefit}
               </p>
               <div className="grid grid-cols-2 gap-5">
                  {[
                    { l: 'Delivery Success', v: '99.9%' },
                    { l: 'Automation Rate', v: '100%' }
                  ].map((stat, i) => (
                    <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
                       <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.l}</div>
                       <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.v}</div>
                    </div>
                  ))}
               </div>
             </div>
           </Reveal>
        </div>

        {/* Smart Allocation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right" delay={200} className="order-2 lg:order-1">
            <div className={`relative p-10 rounded-[3rem] border overflow-hidden ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
              <div className="absolute inset-0 grid-bg opacity-20"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mb-14 animate-float">
                  <Layers size={40} className="text-white"/>
                </div>
                
                <div className="flex justify-between w-full max-w-md relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-px h-10 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  {[
                    { color: 'bg-emerald-500', name: 'Collection A' },
                    { color: 'bg-blue-500', name: 'Collection B' },
                    { color: 'bg-purple-500', name: 'Legal Team' }
                  ].map((agent, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className={`w-14 h-14 rounded-xl ${agent.color}/10 border border-${agent.color}/20 flex items-center justify-center relative`}>
                        <div className={`w-3 h-3 rounded-full ${agent.color} animate-ping absolute`}></div>
                        <UserCheck size={24} className={agent.color.replace('bg-', 'text-')}/>
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-500">{agent.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                <Workflow size={16} className="text-blue-500"/>
                <span className="text-xs font-black tracking-widest uppercase text-blue-500">{t.showcase.allocation.impact}</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.showcase.allocation.title}
              </h2>
              <p className={`text-lg mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {t.showcase.allocation.benefit}
              </p>
              <div className={`p-8 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Network size={24} className="text-emerald-500"/>
                  </div>
                  <h4 className={`text-base font-black uppercase tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Dynamic Portfolio Balancing</h4>
                </div>
                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  {lang === 'mn' 
                    ? 'Зээлийг дүнгээр эсвэл тоогоор ажилтнуудад тэнцүү хуваарилж, өр төлүүлэлтийн ачааллыг тэнцвэржүүлнэ.'
                    : 'Balance agent workload by automatically routing portfolios based on loan counts or total balance criteria.'}
                </p>
                <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <div className="h-full bg-blue-500" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
