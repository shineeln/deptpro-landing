
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
  AreaChart, 
  Area,
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
    { name: 'Mon', collected: 4000 }, { name: 'Tue', collected: 3000 },
    { name: 'Wed', collected: 5000 }, { name: 'Thu', collected: 2780 },
    { name: 'Fri', collected: 6890 }, { name: 'Sat', collected: 4390 },
    { name: 'Sun', collected: 8490 },
  ];

  return (
    <div className="animate-reveal">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', color: 'text-red-500' },
          { label: t.stats.today, value: 1.2, suffix: 'M', prefix: '$', color: 'text-emerald-500' },
          { label: t.stats.rate, value: 42, suffix: '%', color: 'text-blue-500' },
          { label: t.stats.risk, value: 8.2, color: isDark ? 'text-white' : 'text-slate-900' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-xl border transition-all ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
            <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
            <div className={`text-xl font-black ${stat.color}`}>
               {stat.prefix}{stat.value}{stat.suffix}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`lg:col-span-8 p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
          <h4 className="text-[9px] font-black uppercase text-slate-400 mb-6 flex items-center gap-2">
            <BarChart3 size={12} className="text-blue-500"/> RECOVERY VELOCITY
          </h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs><linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.03)" : "#f1f5f9"} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={8} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Area type="monotone" dataKey="collected" stroke="#3b82f6" fillOpacity={1} fill="url(#colorC)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
           <div className={`p-6 rounded-2xl border h-full ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
              <h4 className="text-[9px] font-black uppercase text-slate-400 mb-6">CHANNEL LOAD</h4>
              <div className="space-y-4">
                 {[ { l: 'Call', v: 84 }, { l: 'SMS', v: 92 }, { l: 'Field', v: 41 } ].map((a, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-[8px] font-bold text-slate-500 uppercase mb-1"><span>{a.l}</span><span>{a.v}%</span></div>
                      <div className="h-1 bg-slate-200/20 rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{ width: `${a.v}%` }}></div></div>
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
    <div className="animate-reveal flex flex-col gap-6">
      <div className={`p-6 rounded-2xl border flex items-center justify-between ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center font-black text-xl">D</div>
           <div>
              <div className="text-base font-black">Damdinbazar.B</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ID: 802991-A</div>
           </div>
        </div>
        <div className="flex gap-2">
           <div className="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-black rounded-full border border-red-500/20 uppercase tracking-widest">High Risk</div>
           <div className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[9px] font-black rounded-full border border-blue-500/20 uppercase tracking-widest">Active Call</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h4 className="text-[9px] font-black uppercase text-slate-400 mb-4 flex items-center gap-2"><History size={12}/> RECENT ACTIVITY</h4>
            <div className="space-y-4">
               {[
                 { act: 'Outbound call attempted', res: 'No answer', time: '2h ago' },
                 { act: 'SMS Reminder V3 sent', res: 'Delivered', time: '1d ago' },
                 { act: 'Legal notice generated', res: 'Pending', time: '3d ago' }
               ].map((log, i) => (
                 <div key={i} className="flex justify-between items-center border-b border-slate-800/20 pb-2 last:border-0">
                    <div>
                       <div className="text-[10px] font-bold">{log.act}</div>
                       <div className="text-[8px] text-slate-500 font-medium uppercase">{log.res}</div>
                    </div>
                    <div className="text-[8px] terminal-text font-bold text-slate-400">{log.time}</div>
                 </div>
               ))}
            </div>
         </div>
         <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h4 className="text-[9px] font-black uppercase text-slate-400 mb-4 flex items-center gap-2"><Target size={12}/> PREDICTIVE SCORE</h4>
            <div className="flex items-center justify-center py-4">
               <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                     <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200/20" />
                     <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="100" className="text-red-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-2xl font-black">72</span>
                     <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Scoring</span>
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
    <div className="animate-reveal">
      <div className="flex items-center justify-between mb-8">
         <h4 className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2"><Gavel size={14} className="text-blue-500"/> LEGAL STAGE TRACKING</h4>
         <button className="text-[9px] font-black text-blue-500 flex items-center gap-1">VIEW ALL <ChevronRight size={10}/></button>
      </div>
      <div className="grid grid-cols-4 gap-4">
         {[
           { stage: 'Drafting', count: 124, color: 'bg-slate-400' },
           { stage: 'Filed', count: 82, color: 'bg-blue-500' },
           { stage: 'In Process', count: 45, color: 'bg-amber-500' },
           { stage: 'Resolved', count: 312, color: 'bg-emerald-500' }
         ].map((s, i) => (
           <div key={i} className={`p-4 rounded-xl border text-center ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${s.color}`}></div>
              <div className="text-lg font-black">{s.count}</div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{s.stage}</div>
           </div>
         ))}
      </div>
    </div>
  );
};

export const PreviewSMSDashboard: React.FC<PreviewProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="animate-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         <div className="lg:col-span-4 space-y-4">
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
               <h4 className="text-[9px] font-black text-slate-400 mb-4 uppercase">Batch Status</h4>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                     <CheckCircle2 size={20}/>
                  </div>
                  <div>
                     <div className="text-lg font-black">98.2%</div>
                     <div className="text-[8px] font-bold text-slate-500 uppercase">DELIVERY RATE</div>
                  </div>
               </div>
            </div>
         </div>
         <div className={`lg:col-span-8 p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h4 className="text-[9px] font-black text-slate-400 mb-4 uppercase flex items-center gap-2"><MessageCircle size={14} className="text-blue-500"/> OMNI-CHANNEL LOGS</h4>
            <div className="space-y-4">
               {[
                 { channel: 'SMS', to: '+976 9911-XXXX', msg: 'Reminder: Loan payment due in 24h. Please pay at...', status: 'SENT', time: '10:14' },
                 { channel: 'EMAIL', to: 'bat@mail.mn', msg: 'Urgent: Notice of default regarding your account...', status: 'OPENED', time: '09:30' }
               ].map((log, i) => (
                  <div key={i} className="flex gap-4 border-b border-slate-800/10 pb-3 last:border-0">
                     <div className="text-[8px] font-black px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded h-fit">{log.channel}</div>
                     <div className="flex-1">
                        <span className="text-[10px] font-bold">{log.to}</span>
                        <p className="text-[9px] text-slate-500 italic">"{log.msg}"</p>
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
    <div className="animate-reveal">
      <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
         <h4 className="text-[9px] font-black uppercase text-slate-400 mb-6 flex items-center gap-2"><Award size={14} className="text-blue-500"/> RECOVERY LEADERBOARD</h4>
         <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} layout="vertical" margin={{ left: -20 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={10} fontWeight="bold" stroke="#64748b" />
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
