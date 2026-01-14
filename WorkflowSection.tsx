
import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Scale, 
  Gavel, 
  ShieldCheck, 
  BadgeDollarSign,
  ArrowRight,
  Check,
  Clock,
  X,
  Star
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface WorkflowSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const stages = [
    { key: 'call', icon: <Phone size={24} />, color: 'blue' },
    { key: 'sms', icon: <MessageSquare size={24} />, color: 'blue' },
    { key: 'visit', icon: <MapPin size={24} />, color: 'amber' },
    { key: 'legal', icon: <Scale size={24} />, color: 'indigo' },
    { key: 'court', icon: <Gavel size={24} />, color: 'red' },
    { key: 'bailiff', icon: <ShieldCheck size={24} />, color: 'emerald' },
    { key: 'recovery', icon: <BadgeDollarSign size={24} />, color: 'emerald' },
  ];

  const statuses = [
    { key: 'success', icon: <Check size={12} />, color: 'emerald' },
    { key: 'pending', icon: <Clock size={12} />, color: 'blue' },
    { key: 'failed', icon: <X size={12} />, color: 'red' },
    { key: 'promised', icon: <Star size={12} />, color: 'amber' },
  ];

  return (
    <section className={`py-32 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">
              {t.workflow.tag}
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.workflow.title}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.workflow.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Main Pipeline Track */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 overflow-hidden hidden lg:block">
            <div className={`w-full h-full ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}></div>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-emerald-400 animate-[reveal_4s_infinite]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {stages.map((stage, i) => (
              <Reveal key={stage.key} delay={i * 150} direction="up" className="group">
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 mb-6 relative
                    ${isDark 
                      ? 'bg-slate-900 border border-slate-800 shadow-2xl group-hover:border-blue-500/50' 
                      : 'bg-white border border-slate-200 shadow-xl group-hover:border-blue-500/50'}`}>
                    
                    {/* Pulsing Aura */}
                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-20 animate-ping bg-${stage.color}-500`}></div>
                    
                    <div className={`transition-colors duration-500 ${isDark ? 'text-slate-300' : 'text-slate-600'} group-hover:text-blue-500`}>
                      {stage.icon}
                    </div>

                    {/* Stage Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-blue-600/20">
                      0{i + 1}
                    </div>
                  </div>

                  <h4 className={`text-sm font-black uppercase tracking-widest text-center mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {(t.workflow.stages as any)[stage.key]}
                  </h4>

                  <div className={`h-1 w-12 rounded-full mb-4 hidden lg:block ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className={`h-full bg-${stage.color}-500 group-hover:w-full transition-all duration-700`} style={{ width: '0%' }}></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Legend / Status Indicators */}
        <Reveal delay={1000}>
          <div className={`mt-24 p-8 rounded-[2.5rem] border flex flex-wrap justify-center gap-12 transition-all
            ${isDark ? 'bg-slate-900/20 border-slate-900' : 'bg-slate-50 border-slate-100'}`}>
            {statuses.map((status) => (
              <div key={status.key} className="flex items-center gap-3 group cursor-help">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110
                  ${status.color === 'emerald' ? 'bg-emerald-500 shadow-emerald-500/20' : 
                    status.color === 'blue' ? 'bg-blue-500 shadow-blue-500/20' : 
                    status.color === 'red' ? 'bg-red-500 shadow-red-500/20' : 
                    'bg-amber-500 shadow-amber-500/20'}`}>
                  {status.icon}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-600'} group-hover:text-blue-500 transition-colors`}>
                  {(t.workflow.status as any)[status.key]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
