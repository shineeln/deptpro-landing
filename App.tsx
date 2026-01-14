
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
  FileCode
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
      demo: 'Демо авах',
    },
    productMenu: [
      { id: 'allocation', title: 'Ухаалаг хуваарилалт', desc: 'AI-д суурилсан зээлийн хуваарилалт', icon: <Workflow size={16}/> },
      { id: 'borrower', title: 'Зээлдэгч 360°', desc: 'Зээлдэгчийн нэгдсэн түүх', icon: <Users size={16}/> },
      { id: 'workflow', title: 'Collection Engine', desc: 'Төлүүлэлтийн автомат процесс', icon: <Zap size={16}/> },
      { id: 'legal', title: 'Хууль & Актив', desc: 'Шүүх болон барьцаа хөрөнгө', icon: <Scale size={16}/> },
      { id: 'sms', title: 'SMS Автоматжуулалт', desc: 'Сануулах мессеж илгээлт', icon: <MessageSquare size={16}/> },
      { id: 'dashboard', title: 'Хяналтын самбар', desc: 'Бодит хугацааны KPI', icon: <LayoutDashboard size={16}/> },
    ],
    hero: {
      tag: 'NPL УДИРДЛАГЫН ИРЭЭДҮЙ',
      title: 'Зээл төлүүлэлтийн бүх процессыг нэг цэгээс',
      subtitle: 'DebtPro бол Банк, ББСБ болон төлүүлэлтийн агентлагуудад зориулсан "Mission-Critical" үйлдлийн систем юм.',
      cta: 'Демо авах',
      secondary: 'Шууд турших'
    },
    stats: {
      npl: 'Нийт ХХ',
      today: 'Өнөөдөр төлөгдсөн',
      rate: 'Амжилтын хувь',
      risk: 'Эрсдэлийн төвшин'
    },
    carousels: {
      operations: {
        title: 'Ухаалаг Үйл Ажиллагаа',
        subtitle: 'Бүх алхмыг автоматжуулж, гүйцэтгэлийг 40% хүртэл өсгө.',
        items: [
          { title: 'Автомат Хуваарилалт', desc: 'AI алгоритмаар зээлийг ажилтнуудад тэнцвэртэй хуваарилна.', kpi: '37% Өсөлт' },
          { title: '60+ Хоногийн Чиглүүлэлт', desc: 'Мэргэшсэн багуудад зээлийг автоматаар шилжүүлэх.', kpi: '2.4x Хурд' },
          { title: 'Хуулийн Хөдөлгүүр', desc: 'Шүүхийн нэхэмжлэх болон баримт бичгийн автоматжуулалт.', kpi: '0 Алдаа' }
        ]
      }
    },
    // Adding missing faq property for Mongolian
    faq: {
      items: [
        { q: 'Систем хэрхэн ажилладаг вэ?', a: 'DebtPro нь таны зээлийн багцыг автоматаар шинжилж, хамгийн тохиромжтой төлүүлэлтийн сувгийг сонгодог.' },
        { q: 'Аюулгүй байдал хэр найдвартай вэ?', a: 'Бид банкны түвшний AES-256 шифрлэлт болон олон шатлалт баталгаажуулалтыг ашигладаг.' },
        { q: 'Бусад системтэй холбогдож чадах уу?', a: 'Тийм, бид API-ээр дамжуулан дурын банкны систем болон Core-той холбогдох боломжтой.' }
      ]
    },
    finalCta: {
      title: 'Зээлийн багцаа эрүүлжүүл.',
      subtitle: 'Эрсдэлийг хяналтандаа авч, төлүүлэлтийн хурдаа нэмэгдүүл.',
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
      demo: 'Book a Demo',
    },
    productMenu: [
      { id: 'allocation', title: 'Smart Allocation', desc: 'AI-based loan case routing', icon: <Workflow size={16}/> },
      { id: 'borrower', title: 'Borrower 360°', desc: 'Unified debtor profile & history', icon: <Users size={16}/> },
      { id: 'workflow', title: 'Collection Engine', desc: 'Automated workflow triggers', icon: <Zap size={16}/> },
      { id: 'legal', title: 'Legal & Assets', icon: <Scale size={16}/>, desc: 'Court & collateral management' },
      { id: 'sms', title: 'SMS Automation', desc: 'Configurable reminder sequences', icon: <MessageSquare size={16}/> },
      { id: 'dashboard', title: 'Dashboards', desc: 'Real-time KPI visualization', icon: <LayoutDashboard size={16}/> },
    ],
    hero: {
      tag: 'THE FUTURE OF NPL MANAGEMENT',
      title: 'Run your recovery cockpit from a single screen.',
      subtitle: 'DebtPro is the mission-critical operating system for Banks, NBFIs, and professional recovery teams.',
      cta: 'Request Demo',
      secondary: 'Live Preview'
    },
    stats: {
      npl: 'Total NPL',
      today: 'Collected Today',
      rate: 'Success Rate',
      risk: 'Risk Level'
    },
    carousels: {
      operations: {
        title: 'Smart Operations',
        subtitle: 'Automate every touchpoint and boost recovery rates by up to 40%.',
        items: [
          { title: 'Smart Allocation', desc: 'AI-driven balanced case distribution among agents.', kpi: '37% Uplift' },
          { title: '60+ Routing', desc: 'Advanced stage loans routed to specialized units.', kpi: '2.4x Speed' },
          { title: 'Legal Engine', desc: 'Automated court filings and legal document generation.', kpi: 'Zero Errors' }
        ]
      }
    },
    // Adding missing faq property for English
    faq: {
      items: [
        { q: 'How does the system work?', a: 'DebtPro automatically analyzes your loan portfolio and selects the most efficient recovery channel using AI.' },
        { q: 'Is it secure?', a: 'We use bank-grade AES-256 encryption and multi-factor authentication to protect your data.' },
        { q: 'Can it integrate with other systems?', a: 'Yes, we provide robust APIs to integrate with any core banking system or legacy platform.' }
      ]
    },
    finalCta: {
      title: 'Turn Risk into Recovered Revenue.',
      subtitle: 'Stop letting bad debt drain your capital. Start managing recovery with surgical precision.',
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

    let totalMiliseconds = duration;
    let incrementTime = (totalMiliseconds / end) * 5;
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const FAQItem: React.FC<{ q: string; a: string; theme: Theme }> = ({ q, a, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`dashboard-card rounded-2xl overflow-hidden mb-4 border transition-all duration-300 ${isOpen ? (isDark ? 'border-blue-500/50 scale-[1.02]' : 'border-blue-200 shadow-xl scale-[1.02]') : 'border-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center group"
      >
        <span className={`text-sm font-bold tracking-tight transition-colors ${isOpen ? 'text-blue-500' : (isDark ? 'text-slate-200' : 'text-slate-900')}`}>
          {q}
        </span>
        <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : (isDark ? 'bg-slate-800 text-slate-400 group-hover:bg-slate-700' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200')}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className={`px-6 pb-6 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              {a}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-components ---

const DashboardPreview: React.FC<{ lang: Language, theme: Theme }> = ({ lang, theme }) => {
  const chartData = [
    { name: 'Mon', collected: 4000, npl: 2400 },
    { name: 'Tue', collected: 3000, npl: 1398 },
    { name: 'Wed', collected: 5000, npl: 9800 },
    { name: 'Thu', collected: 2780, npl: 3908 },
    { name: 'Fri', collected: 6890, npl: 4800 },
    { name: 'Sat', collected: 2390, npl: 3800 },
    { name: 'Sun', collected: 8490, npl: 4300 },
  ];

  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <div className="dashboard-card rounded-3xl p-4 md:p-8 w-full max-w-6xl mx-auto shadow-2xl relative overflow-hidden group">
      <div className={`absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
      
      {/* Cockpit Top Bar */}
      <div className={`flex justify-between items-center mb-10 pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-[9px] font-bold px-3 py-1.5 rounded-full border ${isDark ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
            <Activity size={12} className="animate-pulse"/> {lang === 'mn' ? 'СИСТЕМ: ИДЭВХТЭЙ' : 'SYSTEM: ONLINE'}
          </div>
          <div className="text-[10px] terminal-text font-bold text-slate-500">OP_CORE_V2.9 // NODE_UBN_01</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="hidden md:block w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-blue-500 w-3/4 animate-reveal"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', trend: '+2.4%', color: 'text-red-500' },
          { label: t.stats.today, value: 1200000, prefix: '$', trend: '+12%', color: 'text-emerald-500' },
          { label: t.stats.rate, value: 42, suffix: '%', trend: '+5.1%', color: 'text-blue-500' },
          { label: t.stats.risk, value: 8, suffix: '/10', trend: '-1.2%', color: isDark ? 'text-slate-100' : 'text-slate-900' },
        ].map((stat, i) => (
          <div key={i} className={`p-5 rounded-2xl border transition-all ${isDark ? 'bg-slate-900/40 border-slate-800 group-hover:border-slate-700' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
            <div className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.1em] mb-2">{stat.label}</div>
            <div className="flex items-baseline justify-between">
              <div className={`text-2xl font-black ${stat.color}`}>
                <NumberTicker value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`lg:col-span-8 p-6 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <BarChart3 size={14}/> {lang === 'mn' ? 'СЭРГЭЭЛТИЙН ГРАФИК' : 'RECOVERY PROJECTION'}
            </h4>
            <div className="flex gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
            </div>
          </div>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.05)" : "#f1f5f9"} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                  contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', border: `none`, borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                  itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="collected" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCollected)" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: isDark ? '#0f172a' : '#fff' }} activeDot={{ r: 8, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className={`p-6 rounded-2xl border flex flex-col justify-between ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
               <Zap size={14} className="text-blue-500"/> {lang === 'mn' ? 'ШУУД ҮЙЛДЛҮҮД' : 'REAL-TIME ACTIONS'}
            </h4>
            <div className="space-y-4">
              {[
                { label: 'Calls', value: 842, color: 'bg-blue-500' },
                { label: 'SMS', value: 1205, color: 'bg-purple-500' },
                { label: 'Legal', value: 42, color: 'bg-red-500' }
              ].map((stage, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] mb-2 uppercase font-bold text-slate-500">
                    <span>{stage.label}</span>
                    <span className="terminal-text text-blue-400">{stage.value}</span>
                  </div>
                  <div className={`h-1.5 w-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} rounded-full overflow-hidden`}>
                    <div className={`h-full ${stage.color} transition-all duration-1000`} style={{ width: `${(stage.value / 1500) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className={`mt-8 w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'}`}>
               {lang === 'mn' ? 'ТАЙЛАН ТАТАХ' : 'GENERATE FULL REPORT'}
            </button>
          </div>

          <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
             <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Shield size={20}/>
             </div>
             <div>
                <div className="text-[10px] font-bold uppercase text-blue-500 mb-0.5">BANK-GRADE SECURITY</div>
                <div className="text-[9px] text-slate-500">AES-256 ENCRYPTION ACTIVE</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sections ---

const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void, theme: Theme, setTheme: (t: Theme) => void }> = ({ lang, setLang, theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = i18n[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-600/30">D</div>
          <span className={`text-xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
          <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1.5">{t.nav.product} <ChevronDown size={12}/></a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.why}</a>
          <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.customers}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className={`flex items-center p-1 rounded-xl border ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
            <button onClick={() => setLang('mn')} className={`px-2.5 py-1 text-[9px] font-bold rounded-lg transition-all ${lang === 'mn' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>MN</button>
            <button onClick={() => setLang('en')} className={`px-2.5 py-1 text-[9px] font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
          </div>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2.5 rounded-xl border transition-all ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-yellow-400 hover:border-slate-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-xl shadow-blue-600/30 active:scale-95">
            {t.nav.demo}
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection: React.FC<{ lang: Language, theme: Theme }> = ({ lang, theme }) => {
  const t = i18n[lang];
  return (
    <header className="relative pt-44 md:pt-60 pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="bloom top-0 left-1/2 -translate-x-1/2 opacity-60"></div>
      <div className="absolute inset-0 grid-bg -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-24 relative z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 animate-slide-up ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-inner' : 'bg-blue-50 border-blue-100'}`}>
          <Cpu size={14} className="text-blue-500 animate-spin-slow"/>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-500">{t.hero.tag}</span>
        </div>
        
        <h1 className={`text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] animate-slide-up [animation-delay:200ms] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {lang === 'mn' ? <>Зээл төлүүлэлтийн <br /><span className="gradient-text">cockpit удирдлага.</span></> : <>The command <br /><span className="gradient-text">cockpit for recovery.</span></>}
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-14 text-slate-500 font-medium leading-relaxed animate-slide-up [animation-delay:400ms]`}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up [animation-delay:600ms]">
          <button className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/40 text-lg active:scale-95">
            {t.hero.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`font-black py-5 px-10 rounded-2xl transition-all border flex items-center gap-3 ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'}`}>
            <Eye size={20} className="text-blue-500"/> {t.hero.secondary}
          </button>
        </div>
      </div>

      <div className="px-6 md:px-0 relative z-10 animate-slide-up [animation-delay:800ms]">
        <DashboardPreview lang={lang} theme={theme} />
        
        {/* Cinematic Elements */}
        <div className="hidden lg:block absolute top-1/2 -left-20 -translate-y-1/2 p-6 glass-panel rounded-3xl border border-slate-800 shadow-2xl animate-float">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Alert Node</span>
           </div>
           <div className="space-y-3">
              <div className="h-1.5 w-32 bg-slate-800 rounded-full"></div>
              <div className="h-1.5 w-24 bg-slate-800 rounded-full opacity-50"></div>
           </div>
        </div>
        
        <div className="hidden lg:block absolute top-1/4 -right-10 p-6 glass-panel rounded-3xl border border-slate-800 shadow-2xl animate-float [animation-delay:1s]">
           <div className="text-blue-500 font-black text-2xl mb-1">94%</div>
           <div className="text-[9px] font-bold text-slate-500 uppercase">System Integrity</div>
        </div>
      </div>
    </header>
  );
};

const WorkflowSection: React.FC<{ lang: Language, theme: Theme }> = ({ lang, theme }) => {
  const steps = [
    { icon: <Bell size={24}/>, label: lang === 'mn' ? 'Сануулах' : 'Alert' },
    { icon: <MessageSquare size={24}/>, label: lang === 'mn' ? 'SMS' : 'SMS' },
    { icon: <Users size={24}/>, label: lang === 'mn' ? 'Уулзах' : 'Field' },
    { icon: <FileCode size={24}/>, label: lang === 'mn' ? 'Хууль' : 'Legal' },
    { icon: <Target size={24}/>, label: lang === 'mn' ? 'Шүүх' : 'Bailiff' },
    { icon: <CheckCircle2 size={24}/>, label: lang === 'mn' ? 'Төлөгдсөн' : 'Success' }
  ];
  
  return (
    <section className="py-24 overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 relative">
             {steps.map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex-1 flex flex-col items-center group">
                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center border-2 mb-6 transition-all duration-500 relative ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-500 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:-translate-y-2' : 'bg-white border-slate-100 text-slate-400 group-hover:border-blue-600 group-hover:text-blue-600 group-hover:-translate-y-2 shadow-sm'}`}>
                       <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity"></div>
                       {step.icon}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-center ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{step.label}</span>
                 </div>
                 {i < steps.length - 1 && (
                   <div className="hidden md:block flex-1 h-px relative">
                      <div className={`w-full h-px ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                      <div className="absolute inset-0 h-px bg-blue-500 w-0 group-hover:w-full transition-all duration-700 animate-reveal"></div>
                   </div>
                 )}
               </React.Fragment>
             ))}
          </div>
       </div>
    </section>
  );
};

const FeatureShowroom: React.FC<{ lang: Language, theme: Theme }> = ({ lang, theme }) => {
  const t = i18n[lang];
  return (
    <section className="py-32 relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-8">Feature Engine</h3>
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Automation <br />at Scale.</h2>
                <div className="space-y-12">
                   {t.carousels.operations.items.map((item, i) => (
                     <div key={i} className="group cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                           <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-500 flex items-center justify-center font-bold text-xs">{i+1}</div>
                           <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{item.title}</h4>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 ml-12">{item.desc}</p>
                        <div className="flex items-center gap-2 ml-12 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                           <TrendingUp size={14}/> Impact: {item.kpi}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="relative">
                <div className="bloom top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
                <div className="dashboard-card p-10 rounded-[3rem] border border-slate-800 relative z-10 overflow-hidden">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/30"><Workflow size={24}/></div>
                      <div>
                         <div className="text-sm font-bold uppercase tracking-widest">Case Allocation</div>
                         <div className="text-[10px] text-slate-500 font-mono">ACTIVE_ENGINE_ID: 9942</div>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-between group-hover:scale-[1.02] transition-transform">
                           <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
                              <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
                                 <div className={`h-full bg-blue-500 w-[${40 + i*15}%]`}></div>
                              </div>
                           </div>
                           <div className="text-[10px] font-bold text-blue-500">+14 Cases</div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-10 pt-10 border-t border-slate-800 flex justify-center">
                      <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                         <History size={16}/> LIVE PROCESSING: 4.2ms
                      </div>
                   </div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute -bottom-10 -right-10 p-6 glass-panel rounded-3xl border border-slate-800 shadow-2xl animate-float">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><CheckCircle2 size={20}/></div>
                      <div>
                         <div className="text-[10px] font-black uppercase text-slate-300">Target Reached</div>
                         <div className="text-[12px] font-bold text-emerald-500">$42,000</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [theme, setTheme] = useState<Theme>('dark');
  const t = i18n[lang];

  useEffect(() => {
    const root = window.document.body;
    root.className = theme === 'dark' ? 'dark bg-slate-950 text-slate-200' : 'light bg-slate-50 text-slate-900';
  }, [theme]);

  return (
    <div className={`min-h-screen selection:bg-blue-600 selection:text-white transition-all duration-300`}>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <main>
        <HeroSection lang={lang} theme={theme} />
        
        {/* LOGO STRIP */}
        <div className={`py-16 border-y ${theme === 'dark' ? 'border-slate-900 bg-slate-950' : 'border-slate-100 bg-white'}`}>
           <div className="max-w-7xl mx-auto px-6 overflow-hidden">
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:opacity-100 transition-opacity">
                 {['KHAAN BANK', 'GOLOMT BANK', 'TDB MONGOLIA', 'XAC BANK', 'CAPITRON'].map(logo => (
                   <span key={logo} className="text-xl font-black tracking-tighter whitespace-nowrap">{logo}</span>
                 ))}
              </div>
           </div>
        </div>

        <WorkflowSection lang={lang} theme={theme} />
        <FeatureShowroom lang={lang} theme={theme} />

        {/* FAQ SECTION */}
        <section className="py-32">
           <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-20">
                 <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Support</h3>
                 <h2 className="text-4xl md:text-6xl font-black">{lang === 'mn' ? 'Түгээмэл асуултууд' : 'FAQ'}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 {/* This was causing the error: t.faq did not exist */}
                 {t.faq.items.map((item, i) => (
                   <FAQItem key={i} q={item.q} a={item.a} theme={theme} />
                 ))}
              </div>
           </div>
        </section>

        {/* FINAL CINEMATIC CALL TO ACTION */}
        <section className="py-32 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className={`relative p-12 md:p-32 rounded-[4rem] text-center overflow-hidden shadow-2xl transition-all ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-700'}`}>
                 <div className="absolute inset-0 grid-bg opacity-20 -z-0"></div>
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]"></div>
                 <div className="relative z-10">
                    <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-tighter">{t.finalCta.title}</h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-16 font-medium leading-relaxed opacity-80">{t.finalCta.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                       <button className="bg-white text-blue-600 hover:bg-slate-50 font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all text-xl uppercase tracking-widest active:scale-95">
                          {lang === 'mn' ? 'ШУУД ДЕМО ЗАХИАЛАХ' : 'BOOK LIVE DEMO'}
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className={`pt-32 pb-12 transition-colors border-t ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
         <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-32">
               <div className="col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">D</div>
                     <span className={`text-xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
                  </div>
                  <p className="text-slate-500 text-sm max-w-sm mb-10 leading-relaxed font-medium">The intelligent operating system for professional recovery teams. High performance, zero compromise.</p>
                  <div className="flex gap-4">
                     {[1,2,3].map(i => <div key={i} className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}><Activity size={18} className="text-slate-400"/></div>)}
                  </div>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-slate-400">Platform</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Allocation</li>
                     <li className="hover:text-blue-500 cursor-pointer">Legal Engine</li>
                     <li className="hover:text-blue-500 cursor-pointer">Audit Logs</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-slate-400">Resources</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Security</li>
                     <li className="hover:text-blue-500 cursor-pointer">Documentation</li>
                     <li className="hover:text-blue-500 cursor-pointer">API Keys</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-slate-400">Company</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">About</li>
                     <li className="hover:text-blue-500 cursor-pointer">LinkedIn</li>
                     <li className="hover:text-blue-500 cursor-pointer">Privacy</li>
                  </ul>
               </div>
            </div>
            
            <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 ${theme === 'dark' ? 'border-slate-900' : 'border-slate-100'}`}>
               <p>© 2024 TND DEBTPRO // RECOVERY COCKPIT V2.9.0</p>
               <div className="flex gap-12">
                  <span className="flex items-center gap-2"><Shield size={12}/> COMPLIANCE READY</span>
                  <span className="flex items-center gap-2"><Cpu size={12}/> AI ENGINE: STABLE</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
