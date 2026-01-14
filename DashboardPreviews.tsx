
import React from 'react';
import { 
  BarChart3, 
  History, 
  Target, 
  Gavel, 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  MessageCircle, 
  Award 
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { i18n, Language } from './i18n';

interface PreviewProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PreviewCommandCenter: React.FC<PreviewProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  const chartData = [
    { name: 'Normal', value: 8500 }, { name: 'Caution', value: 1200 },
    { name: 'Substandard', value: 800 }, { name: 'Doubtful', value: 400 },
    { name: 'Bad', value: 200 },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', color: 'text-red-500' },
          { label: t.stats.today, value: 1.2, suffix: 'M', prefix: '$', color: 'text-emerald-500' },
          { label: t.stats.rate, value: 42, suffix: '%', color: 'text-blue-500' },
          { label: t.stats.risk, value: 8.2, suffix: 'M', prefix: '$', color: isDark ? 'text-white' : 'text-slate-900' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 md:p-5 rounded-xl border transition-all ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className={`text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
            <div className={`text-xl md:text-2xl font-black ${stat.color}`}>
               {stat.prefix}{stat.value}{stat.suffix}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <div className={`lg:col-span-8 p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 md:mb-6 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <BarChart3 size={14} className="text-blue-500"/> MIGRATION ANALYSIS
          </h4>
          <div className="h-40 md:h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)"} />
                <XAxis dataKey="name" stroke={isDark ? "#64748b" : "#475569"} fontSize={9} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                   cursor={{ fill: 'transparent' }}
                   contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', border: 'none', borderRadius: '12px', fontSize: '11px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                   {chartData.map((entry, index) => (
                      <Cell key={index} fill={index === 0 ? '#10b981' : index > 2 ? '#ef4444' : '#3b82f6'} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
           <div className={`p-4 md:p-6 rounded-2xl border h-full ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 md:mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>CALLPRO LOAD</h4>
              <div className="space-y-4 md:space-y-5">
                 {[ { l: 'Direct Dial', v: 84 }, { l: 'Mass SMS', v: 92 }, { l: 'Recordings', v: 61 } ].map((a, i) => (
                   <div key={i}>
                      <div className={`flex justify-between text-[9px] md:text-[10px] font-bold uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}><span>{a.l}</span><span>{a.v}%</span></div>
                      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}><div className="h-full bg-blue-500" style={{ width: `${a.v}%` }}></div></div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const PreviewBorrower360: React.FC<PreviewProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className={`p-4 md:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-3 md:gap-4">
           <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/10">D</div>
           <div>
              <div className={`text-base md:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Damdinbazar.B</div>
              <div className="text-[9px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">POLARIS ID: 9021</div>
           </div>
        </div>
        <div className="flex gap-2">
           <div className="px-3 py-1 bg-red-500/10 text-red-500 text-[8px] md:text-[10px] font-black rounded-full border border-red-500/20 uppercase tracking-widest">High Risk</div>
           <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] md:text-[10px] font-black rounded-full border border-emerald-500/20 uppercase tracking-widest">Action Required</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
         <div className={`p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><History size={14}/> ACTIONS</h4>
            <div className="space-y-3 md:space-y-4">
               {[
                 { act: 'Outbound call', res: 'Connected - 1:42s', time: '2h ago' },
                 { act: 'Mass SMS Triggered', res: 'Delivered', time: '1d ago' },
                 { act: 'Payment Commitment', res: '2.5M MNT', time: '3d ago' }
               ].map((log, i) => (
                 <div key={i} className={`flex justify-between items-center border-b pb-3 last:border-0 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <div>
                       <div className={`text-[10px] md:text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{log.act}</div>
                       <div className="text-[8px] md:text-[10px] text-slate-500 font-medium uppercase mt-0.5">{log.res}</div>
                    </div>
                    <div className="text-[8px] md:text-[10px] terminal-text font-bold text-slate-400">{log.time}</div>
                 </div>
               ))}
            </div>
         </div>
         <div className={`p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Target size={14}/> RISK FUND</h4>
            <div className="flex items-center justify-center py-4">
               <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                     <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="8" fill="transparent" className={isDark ? "text-slate-800" : "text-slate-100"} />
                     <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="264" strokeDashoffset="132" className="text-red-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>25%</span>
                     <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Reserve</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export const PreviewLegalPipeline: React.FC<PreviewProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div>
      <div className="flex items-center justify-between mb-6 md:mb-8">
         <h4 className={`text-[10px] md:text-xs font-black uppercase flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Gavel size={16} className="text-blue-500"/> DOCUMENTS</h4>
         <button className="text-[10px] font-black text-blue-500 flex items-center gap-1.5 hover:gap-2 transition-all">GENERATE ALL <ChevronRight size={12}/></button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
         {[
           { stage: 'Notices', count: 124, color: 'bg-blue-400' },
           { stage: 'Invoices', count: 82, color: 'bg-blue-500' },
           { stage: 'Court Filing', count: 45, color: 'bg-red-500' },
           { stage: 'Resolved', count: 312, color: 'bg-emerald-500' }
         ].map((s, i) => (
           <div key={i} className={`p-4 md:p-5 rounded-xl border text-center transition-all hover:scale-105 ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`w-2 h-2 rounded-full mx-auto mb-2 md:mb-3 ${s.color}`}></div>
              <div className={`text-lg md:text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.count}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{s.stage}</div>
           </div>
         ))}
      </div>
    </div>
  );
};

export const PreviewSMSDashboard: React.FC<PreviewProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
         <div className="lg:col-span-4 space-y-4">
            <div className={`p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
               <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Integrations</h4>
               <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
                     <Zap size={20}/>
                  </div>
                  <div>
                     <div className={`text-base md:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>CallPro</div>
                     <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">LIVE</div>
                  </div>
               </div>
            </div>
         </div>
         <div className={`lg:col-span-8 p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><MessageCircle size={16} className="text-blue-500"/> MASS CHANNELS</h4>
            <div className="space-y-3 md:space-y-4">
               {[
                 { channel: 'Voice', to: 'Batch #801', msg: 'Automated voice notice...', status: 'SENT' },
                 { channel: 'SMS', to: 'Batch #902', msg: 'Urgent reminder regarding account...', status: 'OPEN' }
               ].map((log, i) => (
                  <div key={i} className={`flex gap-3 md:gap-4 border-b pb-3 md:pb-4 last:border-0 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                     <div className="text-[8px] md:text-[10px] font-black px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded h-fit">{log.channel}</div>
                     <div className="flex-1">
                        <span className={`text-[10px] md:text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>{log.to}</span>
                        <p className={`text-[9px] md:text-[11px] italic mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>"{log.msg}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export const PreviewPerformance: React.FC<PreviewProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const data = [
    { name: 'Bayaraa', recovery: 82000, target: 90000 },
    { name: 'Sarnai', recovery: 95000, target: 90000 },
    { name: 'Enkh', recovery: 64000, target: 90000 },
    { name: 'Nomin', recovery: 112000, target: 90000 },
  ];
  return (
    <div>
      <div className={`p-4 md:p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
         <h4 className={`text-[10px] md:text-xs font-black uppercase mb-4 md:mb-6 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Award size={16} className="text-blue-500"/> LEADERBOARD</h4>
         <div className="h-48 md:h-56">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} layout="vertical" margin={{ left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={10} fontBold={true} stroke={isDark ? "#64748b" : "#475569"} width={60} />
                  <Bar dataKey="recovery" radius={[0, 4, 4, 0]}>
                     {data.map((entry, index) => (
                        <Cell key={index} fill={entry.recovery >= entry.target ? '#10b981' : '#3b82f6'} />
                     ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};
