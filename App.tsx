
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Workflow, 
  Scale, 
  MessageSquare, 
  Lock, 
  CheckCircle2, 
  ChevronRight, 
  Users, 
  TrendingUp, 
  AlertCircle,
  LayoutDashboard,
  Plus,
  Sun,
  Moon,
  ArrowRight,
  ChevronDown,
  Zap,
  History,
  Target,
  Bell,
  Cpu,
  Eye,
  Activity,
  BarChart3,
  FileCode,
  Layers,
  Search,
  Database,
  Globe
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

// --- Types & Translations ---

type Language = 'mn' | 'en';
type Theme = 'light' | 'dark';

const i18n = {
  mn: {
    nav: {
      product: 'Бүтээгдэхүүн',
      solutions: 'Шийдэл',
      why: 'Яагаад DebtPro',
      customers: 'Харилцагчид',
      pricing: 'Үнэ',
      resources: 'Нөөцүүд',
      faq: 'FAQ',
      demo: 'Демо авах',
    },
    megaMenu: {
      allocation: { title: 'Ухаалаг хуваарилалт', desc: 'AI алгоритмаар ажилтны ачаалал тэнцвэржүүлнэ.' },
      borrower: { title: 'Зээлдэгч 360°', desc: 'Зээлдэгчийн 100% түүх болон эрсдэлийн зураглал.' },
      workflow: { title: 'Collection Engine', desc: 'Төлүүлэлтийн автомат процесс, шатлал удирдах.' },
      legal: { title: 'Хууль & Актив', desc: 'Шүүх, шийдвэр гүйцэтгэх процессыг бүрэн хянах.' },
      sms: { title: 'SMS Автоматжуулалт', desc: 'Олон сувагт сануулах мессеж, загвар удирдах.' },
      dashboards: { title: 'Хяналтын самбар', desc: 'Бодит хугацааны KPI болон аналитик.' },
      risk: { title: 'Эрсдэл & Нөөц', desc: 'Эрсдэлийн ангилал, нөөц сан тооцоолол.' },
      documents: { title: 'Баримт бичиг', desc: 'Автомат нэхэмжлэх, нэхэмжлэл үүсгэх.' },
      audit: { title: 'Audit Trail', desc: 'Үйлдэл бүрийг бүртгэх банкны түвшний лог.' }
    },
    hero: {
      tag: 'NPL УДИРДЛАГЫН ИРЭЭДҮЙ',
      title: 'Зээл төлүүлэлтийг нэг цэгээс удирдах cockpit',
      subtitle: 'DebtPro бол Банк, ББСБ болон төлүүлэлтийн багуудад зориулсан "Mission-Critical" үйлдлийн систем юм. Төлүүлэлтийн хурдаа 40% хүртэл нэмэгдүүл.',
      cta: 'Демо авах',
      secondary: 'Шууд турших'
    },
    stats: {
      npl: 'Нийт ХХ',
      today: 'Өнөөдөр төлөгдсөн',
      rate: 'Амжилтын хувь',
      risk: 'Эрсдэлийн төвшин'
    },
    showcase: {
      allocation: {
        title: 'Ухаалаг Хуваарилалт',
        benefit: 'Ажилтнуудын ачааллыг 100% тэнцвэржүүлнэ.',
        impact: '37% Өсөлт'
      },
      routing: {
        title: '60+ Хоногийн Чиглүүлэлт',
        benefit: 'Мэргэшсэн багуудад зээлийг автоматаар шилжүүлнэ.',
        impact: '2.4x Хурд'
      },
      lockin: {
        title: 'Lock-in Логик',
        benefit: 'Ажилтнууд зээлдэгчийг "солих" боломжгүй систем.',
        impact: 'Бүрэн хяналт'
      }
    },
    faq: {
      title: 'Түгээмэл асуултууд',
      items: [
        { q: 'Систем хэрхэн ажилладаг вэ?', a: 'DebtPro нь таны зээлийн багцыг автоматаар шинжилж, хамгийн тохиромжтой төлүүлэлтийн сувгийг (Call, SMS, Field, Legal) сонгодог.' },
        { q: 'Аюулгүй байдал хэр найдвартай вэ?', a: 'Бид банкны түвшний AES-256 шифрлэлт болон ISO 27001 стандартын дагуу дата аюулгүй байдлыг хангадаг.' },
        { q: 'Бусад системтэй холбогдож чадах уу?', a: 'Тийм, бид API-ээр дамжуулан дурын Core Banking болон бусад банкны системүүдтэй холбогдох боломжтой.' }
      ]
    },
    finalCta: {
      title: 'Эрсдэлээ орлого болго.',
      subtitle: 'Зээлийн багцаа эрүүлжүүлж, капиталын эргэлтээ сайжруул. Бид танд тусална.',
      cta: 'Демо захиалах'
    }
  },
  en: {
    nav: {
      product: 'Product',
      solutions: 'Solutions',
      why: 'Why DebtPro',
      customers: 'Customers',
      pricing: 'Pricing',
      resources: 'Resources',
      faq: 'FAQ',
      demo: 'Book a Demo',
    },
    megaMenu: {
      allocation: { title: 'Smart Allocation', desc: 'AI-driven balanced case distribution among agents.' },
      borrower: { title: 'Borrower 360°', desc: 'Unified profile with risk heatmap and action history.' },
      workflow: { title: 'Collection Engine', desc: 'Automated recovery triggers and stage management.' },
      legal: { title: 'Legal & Assets', desc: 'Full-cycle court and collateral asset tracking.' },
      sms: { title: 'SMS Automation', desc: 'Omnichannel sequences with smart template system.' },
      dashboards: { title: 'Dashboards', desc: 'Real-time analytics and command-level KPI views.' },
      risk: { title: 'Risk & Provision', desc: 'Advanced class calculations and provision modeling.' },
      documents: { title: 'Documents', desc: 'Automated generation of legal notices and claims.' },
      audit: { title: 'Audit Trail', desc: 'Bank-grade activity logging for total transparency.' }
    },
    hero: {
      tag: 'THE FUTURE OF NPL MANAGEMENT',
      title: 'The command cockpit for your recovery operation.',
      subtitle: 'DebtPro is the mission-critical operating system for Banks and NBFIs. Increase recovery efficiency by up to 40% using AI-driven logic.',
      cta: 'Request Demo',
      secondary: 'Live Preview'
    },
    stats: {
      npl: 'Total NPL',
      today: 'Collected Today',
      rate: 'Success Rate',
      risk: 'Risk Level'
    },
    showcase: {
      allocation: {
        title: 'Smart Allocation',
        benefit: 'Balances agent workload using proprietary algorithms.',
        impact: '37% Uplift'
      },
      routing: {
        title: '60+ Day Routing',
        benefit: 'Advanced stage loans automatically routed to elite units.',
        impact: '2.4x Speed'
      },
      lockin: {
        title: 'Account Lock-in',
        benefit: 'Prevents agent crossover and ensures accountability.',
        impact: 'Zero Leakage'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does the system work?', a: 'DebtPro analyzes your portfolio and dynamically assigns cases to the best recovery channel (Call, SMS, Field, Legal) using AI scoring.' },
        { q: 'How secure is the data?', a: 'We employ bank-grade AES-256 encryption and follow strict ISO 27001 standards for total data protection.' },
        { q: 'Can it integrate with core banking?', a: 'Yes, our platform provides robust REST APIs for seamless integration with legacy and modern core banking systems.' }
      ]
    },
    finalCta: {
      title: 'Turn Risk into Recovered Revenue.',
      subtitle: 'Stop letting bad debt drain your capital. Deploy DebtPro and start managing recovery with surgical precision.',
      cta: 'Book a Demo'
    }
  }
};

// --- Utilities ---

const NumberTicker: React.FC<{ value: number; prefix?: string; suffix?: string; duration?: number }> = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const increment = end / (duration / 20);
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// --- Sub-components ---

const DashboardPreview: React.FC<{ lang: Language, theme: Theme }> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  
  const chartData = [
    { name: 'Mon', collected: 4000, target: 4500 },
    { name: 'Tue', collected: 3000, target: 4800 },
    { name: 'Wed', collected: 5000, target: 5100 },
    { name: 'Thu', collected: 2780, target: 5500 },
    { name: 'Fri', collected: 6890, target: 5800 },
    { name: 'Sat', collected: 4390, target: 6000 },
    { name: 'Sun', collected: 8490, target: 6200 },
  ];

  return (
    <div className="dashboard-card rounded-[2.5rem] p-4 md:p-10 w-full max-w-6xl mx-auto shadow-2xl relative overflow-hidden group">
      <div className={`absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-1000`}></div>
      
      {/* Cockpit Header */}
      <div className={`flex justify-between items-center mb-10 pb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-[10px] font-black px-4 py-2 rounded-full border ${isDark ? 'bg-slate-900 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
            <Activity size={14} className="animate-pulse"/> {lang === 'mn' ? 'СИСТЕМ: ИДЭВХТЭЙ' : 'SYSTEM: ONLINE'}
          </div>
          <div className="hidden md:block text-[11px] terminal-text font-bold text-slate-500 tracking-wider">RECOVERY_KERNEL::V2.9.4 // UBN_CORE_NODE</div>
        </div>
        <div className="flex items-center gap-4">
           <Bell size={18} className="text-slate-500 hover:text-blue-500 cursor-pointer transition-colors"/>
           <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-white">OP</div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', trend: '+2.4%', color: 'text-red-500' },
          { label: t.stats.today, value: 1240000, prefix: '$', trend: '+12%', color: 'text-emerald-500' },
          { label: t.stats.rate, value: 42, suffix: '%', trend: '+5.1%', color: 'text-blue-500' },
          { label: t.stats.risk, value: 8, suffix: '/10', trend: '-1.2%', color: isDark ? 'text-white' : 'text-slate-900' },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border transition-all duration-500 ${isDark ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</div>
            <div className="flex items-baseline justify-between">
              <div className={`text-2xl font-black ${stat.color}`}>
                <NumberTicker value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className={`lg:col-span-8 p-8 rounded-3xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
              <BarChart3 size={16} className="text-blue-500"/> {lang === 'mn' ? 'СЭРГЭЭЛТИЙН ХУРД' : 'RECOVERY VELOCITY'}
            </h4>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Actual</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Target</span>
               </div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.03)" : "#f1f5f9"} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} fontWeight="bold" />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                  contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', border: 'none', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', fontSize: '10px' }}
                />
                <Area type="monotone" dataKey="collected" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCollected)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className={`p-8 rounded-3xl border h-full flex flex-col justify-between ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-2">
                 <Workflow size={16} className="text-blue-500"/> {lang === 'mn' ? 'ШУУД ҮЙЛДЛҮҮД' : 'ACTIVE ACTIONS'}
              </h4>
              <div className="space-y-6">
                 {[
                   { label: 'Outbound Calls', val: 84, color: 'bg-blue-500' },
                   { label: 'SMS Sequence', val: 92, color: 'bg-purple-500' },
                   { label: 'Legal Filings', val: 41, color: 'bg-red-500' }
                 ].map((act, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-400">
                         <span>{act.label}</span>
                         <span className="terminal-text text-blue-400">{act.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className={`h-full ${act.color} transition-all duration-1000 delay-300`} style={{ width: `${act.val}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>
              <button className={`mt-10 w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'}`}>
                 {lang === 'mn' ? 'БҮРЭН ТАЙЛАН ҮЗЭХ' : 'OPEN RECOVERY HUB'}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ q: string; a: string; theme: Theme }> = ({ q, a, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`dashboard-card rounded-2xl overflow-hidden mb-4 border transition-all duration-500 ${isOpen ? (isDark ? 'border-blue-500/40 scale-[1.01]' : 'border-blue-100 shadow-xl scale-[1.01]') : 'border-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center group"
      >
        <span className={`text-sm font-bold tracking-tight transition-colors ${isOpen ? 'text-blue-500' : (isDark ? 'text-slate-200' : 'text-slate-900')}`}>
          {q}
        </span>
        <div className={`p-3 rounded-xl transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : (isDark ? 'bg-slate-800 text-slate-400 group-hover:bg-slate-700' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200')}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className={`px-8 pb-8 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <div className={`pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              {a}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [theme, setTheme] = useState<Theme>('dark');
  const [megaMenu, setMegaMenu] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(0);
  const t = i18n[lang];

  useEffect(() => {
    const root = window.document.body;
    root.className = theme === 'dark' ? 'dark bg-slate-950 text-slate-200' : 'light bg-slate-50 text-slate-900';
  }, [theme]);

  const showcaseData = [
    { key: 'allocation', icon: <Workflow />, title: t.showcase.allocation.title, benefit: t.showcase.allocation.benefit, impact: t.showcase.allocation.impact },
    { key: 'routing', icon: <Target />, title: t.showcase.routing.title, benefit: t.showcase.routing.benefit, impact: t.showcase.routing.impact },
    { key: 'lockin', icon: <Lock />, title: t.showcase.lockin.title, benefit: t.showcase.lockin.benefit, impact: t.showcase.lockin.impact }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500`}>
      
      {/* CINEMATIC NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 glass-panel py-5`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-600/40">D</div>
            <span className={`text-xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <div 
              className="hover:text-blue-500 cursor-pointer flex items-center gap-2 transition-colors relative"
              onMouseEnter={() => setMegaMenu(true)}
            >
              {t.nav.product} <ChevronDown size={14} className={`transition-transform duration-300 ${megaMenu ? 'rotate-180 text-blue-500' : ''}`}/>
            </div>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.why}</a>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.customers}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center p-1 rounded-xl border ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-100'}`}>
              <button onClick={() => setLang('mn')} className={`px-3 py-1.5 text-[9px] font-black rounded-lg transition-all ${lang === 'mn' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>MN</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-[9px] font-black rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
            </div>
            
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl border transition-all ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-yellow-400 hover:border-slate-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/40 active:scale-95">
              {t.nav.demo}
            </button>
          </div>
        </div>

        {/* MEGA MENU EXPERIENCE */}
        <div 
           className={`absolute top-full left-0 right-0 glass-panel border-y border-slate-800 transition-all duration-700 ease-in-out overflow-hidden ${megaMenu ? 'max-h-[600px] opacity-100 py-16' : 'max-h-0 opacity-0 pointer-events-none'}`}
           onMouseLeave={() => setMegaMenu(false)}
        >
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-3 gap-x-12 gap-y-16">
             {Object.entries(t.megaMenu).map(([key, item]) => {
               // Fix: Cast item to expected type to avoid TS unknown errors
               const menuItem = item as { title: string; desc: string };
               return (
                 <div key={key} className="group cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                          {key === 'allocation' && <Workflow size={20}/>}
                          {key === 'borrower' && <Users size={20}/>}
                          {key === 'workflow' && <Zap size={20}/>}
                          {key === 'legal' && <Scale size={20}/>}
                          {key === 'sms' && <MessageSquare size={20}/>}
                          {key === 'dashboards' && <LayoutDashboard size={20}/>}
                          {key === 'risk' && <Target size={20}/>}
                          {key === 'documents' && <FileCode size={20}/>}
                          {key === 'audit' && <Shield size={20}/>}
                       </div>
                       <h4 className={`text-sm font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{menuItem.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed ml-14">{menuItem.desc}</p>
                 </div>
               );
             })}
          </div>
          <div className="max-w-7xl mx-auto px-10 mt-16 pt-10 border-t border-slate-800/50 flex justify-between items-center">
             <div className="flex gap-6">
                <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-widest">NEW: AI SCORING ENGINE</span>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest">STABLE RELEASE V2.9</span>
             </div>
             <button className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all">
                {lang === 'mn' ? 'СИСТЕМИЙГ БҮРЭН ҮЗЭХ' : 'EXPLORE FULL SYSTEM'} <ChevronRight size={14}/>
             </button>
          </div>
        </div>
      </nav>

      {/* CINEMATIC HERO */}
      <header className="relative pt-48 md:pt-64 pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="bloom top-0 left-1/2 -translate-x-1/2 opacity-60"></div>
        <div className="absolute inset-0 grid-bg -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-10 text-center mb-24 relative z-10">
          <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-10 animate-slide-up ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-inner' : 'bg-blue-50 border-blue-100'}`}>
            <Cpu size={16} className="text-blue-500 animate-spin-slow"/>
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-blue-500">{t.hero.tag}</span>
          </div>
          
          <h1 className={`text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.95] animate-slide-up [animation-delay:200ms] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'mn' ? <>Зээл төлүүлэлтийн <br /><span className="gradient-text">удирдлагын cockpit.</span></> : <>The command <br /><span className="gradient-text">cockpit for recovery.</span></>}
          </h1>
          
          <p className={`text-lg md:text-2xl max-w-3xl mx-auto mb-16 text-slate-500 font-medium leading-relaxed animate-slide-up [animation-delay:400ms]`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up [animation-delay:600ms]">
            <button className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-14 rounded-2xl transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-600/40 text-xl active:scale-95">
              {t.hero.cta} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button className={`font-black py-6 px-12 rounded-2xl transition-all border flex items-center gap-4 text-lg ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'}`}>
              <Eye size={24} className="text-blue-500"/> {t.hero.secondary}
            </button>
          </div>
        </div>

        <div className="px-6 md:px-0 relative z-10 animate-slide-up [animation-delay:800ms]">
          <DashboardPreview lang={lang} theme={theme} />
          
          {/* Floating Live Data Nodes */}
          <div className="hidden xl:block absolute top-1/2 -left-32 -translate-y-1/2 p-8 glass-panel rounded-[2rem] border border-slate-800 shadow-2xl animate-float">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">ALERT_NODE_01</span>
             </div>
             <div className="space-y-4">
                <div className="h-2 w-48 bg-slate-800 rounded-full"></div>
                <div className="h-2 w-32 bg-slate-800 rounded-full opacity-50"></div>
                <div className="h-2 w-40 bg-slate-800 rounded-full opacity-30"></div>
             </div>
          </div>
          
          <div className="hidden xl:block absolute bottom-1/4 -right-20 p-8 glass-panel rounded-[2rem] border border-slate-800 shadow-2xl animate-float [animation-delay:1.5s]">
             <div className="text-blue-500 font-black text-4xl mb-2">99.8%</div>
             <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">SYSTEM UPTIME</div>
          </div>
        </div>
      </header>

      {/* FEATURE CAROUSEL EXPERIENCE */}
      <section className="py-32 overflow-hidden bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-10 mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
           <div>
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Product Experience</h3>
              <h2 className="text-4xl md:text-6xl font-black">{lang === 'mn' ? 'Үйлдлийн систем' : 'Operational Intelligence'}</h2>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => setActiveShowcase(prev => Math.max(0, prev - 1))}
                className="w-16 h-16 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 transition-all active:scale-90"
              >
                <ArrowRight className="rotate-180" size={24}/>
              </button>
              <button 
                onClick={() => setActiveShowcase(prev => Math.min(showcaseData.length - 1, prev + 1))}
                className="w-16 h-16 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-900 transition-all active:scale-90"
              >
                <ArrowRight size={24}/>
              </button>
           </div>
        </div>

        <div className="flex gap-10 px-10 md:px-[calc((100vw-1280px)/2)] scroll-container overflow-x-auto no-scrollbar pb-20">
          {showcaseData.map((item, i) => (
            <div key={i} className={`feature-slide min-w-[350px] md:min-w-[500px] dashboard-card p-12 rounded-[3.5rem] group transition-all duration-700 ${activeShowcase === i ? 'border-blue-500/50 scale-100' : 'opacity-40 scale-95'}`}>
               <div className="flex justify-between items-start mb-16">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-black px-4 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-full uppercase tracking-widest border border-emerald-500/20">{item.impact}</div>
               </div>
               <h4 className="text-3xl font-black mb-6 tracking-tight">{item.title}</h4>
               <p className="text-lg text-slate-500 leading-relaxed mb-12 font-medium">{item.benefit}</p>
               <div className="pt-8 border-t border-slate-800 flex items-center gap-3 text-sm font-black text-slate-400 group-hover:text-blue-500 transition-colors">
                 {lang === 'mn' ? 'МОДУЛИЙГ ТУРШИХ' : 'LAUNCH MODULE'} <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
          ))}
          <div className="feature-slide min-w-[350px] md:min-w-[500px] border border-dashed border-slate-800 p-12 rounded-[3.5rem] flex flex-col items-center justify-center text-center opacity-30">
             <Plus size={48} className="text-slate-700 mb-6"/>
             <span className="text-sm font-black text-slate-600 uppercase tracking-[0.3em]">Coming Soon: AI Predictive Engine</span>
          </div>
        </div>
      </section>

      {/* SHOWROOM: BORROWER 360° */}
      <section className="py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5">
               <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-8">Data Cockpit</h3>
               <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.95]">Total visibility. <br />Zero gaps.</h2>
               
               <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">
                  {lang === 'mn' ? 'Зээлдэгчийн бүх мэдээлэл, түүх, барьцаа хөрөнгө болон дараагийн алхмыг нэг дороос хар.' : 'Every interaction, collateral detail, and predictive risk metric mapped into a single, unified borrower profile.'}
               </p>

               <div className="space-y-6">
                  {[
                    { id: 'history', icon: <History size={20}/>, title: lang === 'mn' ? 'Ажиллагааны түүх' : 'Action Audit History' },
                    { id: 'risk', icon: <Target size={20}/>, title: lang === 'mn' ? 'Эрсдэлийн зураглал' : 'Dynamic Risk Heatmap' },
                    { id: 'assets', icon: <Database size={20}/>, title: lang === 'mn' ? 'Актив удирдлага' : 'Asset & Collateral Tracking' }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-5 group cursor-pointer">
                       <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          {item.icon}
                       </div>
                       <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-500 transition-colors">{item.title}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-7 relative">
               <div className="bloom top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
               <div className="dashboard-card rounded-[3rem] p-8 md:p-12 relative z-10 overflow-hidden">
                  <div className="flex justify-between items-center mb-12 pb-8 border-b border-slate-800">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-slate-400 text-2xl">B</div>
                        <div>
                           <div className="text-xl font-black text-white">Bat-Erdene.M</div>
                           <div className="text-[11px] text-slate-500 terminal-text font-bold">ID: 80219-MN // RISK_CLASS: C-HIGH</div>
                        </div>
                     </div>
                     <div className="px-4 py-2 bg-red-500/10 text-red-500 text-[10px] font-black rounded-full border border-red-500/20">90+ DAYS OVERDUE</div>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="flex-1 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                           <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Exposure</div>
                           <div className="text-2xl font-black text-white">$42,800</div>
                        </div>
                        <div className="flex-1 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                           <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Collateral</div>
                           <div className="text-2xl font-black text-emerald-500">$64,000</div>
                        </div>
                     </div>
                     <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
                        <div className="flex justify-between items-center mb-6">
                           <span className="text-[11px] font-black text-blue-500 uppercase tracking-widest">Next Action Suggestion</span>
                           <Zap size={18} className="text-blue-500 animate-pulse"/>
                        </div>
                        <div className="text-sm font-bold text-slate-300 leading-relaxed">
                           AI suggests immediate Field Visit and Formal Seizure Notice generation based on payment abandonment patterns.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & AUDIT TRAIL */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-10">
           <div className={`p-12 md:p-24 rounded-[4rem] border border-slate-900 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05),_transparent)]`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                 <div>
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-10 shadow-2xl shadow-emerald-500/30">
                      <Lock size={32}/>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{lang === 'mn' ? 'Банкны түвшний аюулгүй байдал' : 'Bank-Grade Resilience.'}</h2>
                    <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed">DebtPro-ийн үйлдэл бүр лог болж хадгалагдах бөгөөд ажилтнуудын хандалт бүрийг хянах боломжтой.</p>
                    
                    <div className="grid grid-cols-2 gap-6">
                       {['ISO 27001', 'SOC2 READY', 'AES-256 BIT', 'RBAC CONTROL'].map((spec) => (
                         <div key={spec} className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                            <CheckCircle2 size={16} className="text-emerald-500"/> {spec}
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="dashboard-card p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/30 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-10">
                       <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                          <Eye size={16} className="text-blue-500"/> REAL-TIME AUDIT STREAM
                       </span>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div className="space-y-4">
                       {[
                         { user: 'Admin_Master', act: 'Viewed Borrower Profile #802', time: 'Just now' },
                         { user: 'Legal_Dept', act: 'Generated Seizure Notice', time: '2m ago' },
                         { user: 'Risk_Node', act: 'Recalculated Provision Portfolio', time: '10m ago' },
                         { user: 'Collector_04', act: 'Logged Inbound Call Attempt', time: '15m ago' }
                       ].map((log, i) => (
                         <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl flex justify-between items-center group hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                               <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:text-white group-hover:bg-blue-600 transition-all">{log.user[0]}</div>
                               <div className="text-[11px] font-bold text-slate-300">{log.act}</div>
                            </div>
                            <div className="text-[9px] text-slate-500 font-bold uppercase terminal-text">{log.time}</div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section id="faq" className="py-32 md:py-48">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-24">
             <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Support Hub</h3>
             <h2 className={`text-4xl md:text-7xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {t.faq.title}
             </h2>
          </div>
          <div className="space-y-6">
            {t.faq.items.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CINEMATIC CALL TO ACTION */}
      <section className="py-32 md:py-48 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-10">
            <div className={`relative p-20 md:p-40 rounded-[5rem] text-center overflow-hidden transition-all duration-1000 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-700'}`}>
               <div className="absolute inset-0 grid-bg opacity-20 -z-0"></div>
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]"></div>
               <div className="relative z-10">
                  <h2 className="text-5xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">{t.finalCta.title}</h2>
                  <p className="text-xl md:text-3xl text-blue-50 max-w-3xl mx-auto mb-20 font-medium leading-relaxed opacity-90">{t.finalCta.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                     <button className="bg-white text-blue-600 hover:bg-slate-50 font-black py-7 px-20 rounded-[2.5rem] shadow-2xl transition-all text-2xl uppercase tracking-[0.1em] active:scale-95">
                        {lang === 'mn' ? 'ШУУД ДЕМО ЗАХИАЛАХ' : 'WATCH LIVE DEMO'}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ENTERPRISE FOOTER */}
      <footer className={`pt-32 pb-16 transition-colors border-t ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
         <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-20 mb-32">
               <div className="col-span-2">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl">D</div>
                     <span className={`text-2xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
                  </div>
                  <p className="text-slate-500 text-base max-w-md mb-12 leading-relaxed font-medium">The intelligent operating system for mission-critical recovery operations. Recover faster, control better, and manage risk with surgical precision.</p>
                  <div className="flex gap-6">
                     {[1,2,3].map(i => <div key={i} className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}><Activity size={24} className="text-slate-400"/></div>)}
                  </div>
               </div>
               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400">Platform</h4>
                  <ul className="space-y-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Allocation Engine</li>
                     <li className="hover:text-blue-500 cursor-pointer">Legal Workflows</li>
                     <li className="hover:text-blue-500 cursor-pointer">Audit Visibility</li>
                     <li className="hover:text-blue-500 cursor-pointer">API Reference</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400">Governance</h4>
                  <ul className="space-y-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Data Residency</li>
                     <li className="hover:text-blue-500 cursor-pointer">Compliance</li>
                     <li className="hover:text-blue-500 cursor-pointer">Security Certs</li>
                     <li className="hover:text-blue-500 cursor-pointer">Audit Logs</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400">Connect</h4>
                  <ul className="space-y-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Enterprise Sales</li>
                     <li className="hover:text-blue-500 cursor-pointer">LinkedIn</li>
                     <li className="hover:text-blue-500 cursor-pointer">Support Hub</li>
                     <li className="hover:text-blue-500 cursor-pointer">Status</li>
                  </ul>
               </div>
            </div>
            
            <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ${theme === 'dark' ? 'border-slate-900' : 'border-slate-100'}`}>
               <p>© 2024 TND DEBTPRO // RECOVERY COCKPIT V2.9.4 // MADE IN MONGOLIA</p>
               <div className="flex gap-16">
                  <span className="flex items-center gap-2"><Shield size={14}/> ISO 27001 SECURE</span>
                  <span className="flex items-center gap-2"><Globe size={14}/> BANKING COMPLIANT</span>
                  <span className="flex items-center gap-2"><Cpu size={14}/> AI ENGINE STABLE</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
