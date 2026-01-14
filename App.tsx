
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
  Globe,
  FileSpreadsheet,
  AlertTriangle,
  ArrowDownCircle,
  Mail,
  Building,
  Phone,
  User,
  Send
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
    excelSection: {
      title: 'Одоо хүртэл Эксель ашигласаар байна уу?',
      subtitle: 'Зээлийн төлүүлэлт бол маш нарийн процесс. Эксель бол зүгээр л өгөгдөл оруулах талбар, харин DebtPro бол үр дүн авчрах "Machine" юм.',
      excel: {
        title: 'Уламжлалт арга (Excel)',
        items: ['Удаан, гар ажиллагаа ихтэй', 'Мэдээлэл алдагдах эрсдэл өндөр', 'Бодит цагийн хяналтгүй', 'Ажилтан солигдоход мэдээлэл тасардаг']
      },
      debtpro: {
        title: 'DebtPro OS',
        items: ['100% Автоматжуулалт', 'Банкны түвшний аюулгүй байдал', 'Бодит хугацааны KPI & Аналитик', 'Тасралтгүй үйл ажиллагаа']
      }
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
    contactSection: {
      title: 'Хамтран ажиллах хүсэлт илгээх',
      subtitle: 'Зээлийн төлүүлэлтийн процессоо дараагийн шатанд гаргахад бид бэлэн байна. Формыг бөглөж хүсэлтээ ирүүлнэ үү.',
      name: 'Бүтэн нэр',
      org: 'Байгууллагын нэр',
      phone: 'Утасны дугаар',
      email: 'И-мэйл хаяг',
      message: 'Таны зурвас',
      submit: 'Хүсэлт илгээх',
      success: 'Баярлалаа! Бид тантай удахгүй холбогдох болно.',
      placeholders: {
        name: 'Овог нэр',
        org: 'Банк эсвэл ББСБ-ын нэр',
        phone: '9911....',
        email: 'name@company.mn',
        message: 'Танд ямар хэрэгцээ шаардлага байгаа вэ?'
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
    excelSection: {
      title: 'Still stuck in Spreadsheet Hell?',
      subtitle: 'Loan recovery is a high-stakes operational challenge. Excel is for accounting, DebtPro is for high-performance recovery results.',
      excel: {
        title: 'Traditional Way (Excel)',
        items: ['Slow, manual data entry', 'High risk of human error', 'No real-time tracking', 'Data silos and agent crossover']
      },
      debtpro: {
        title: 'DebtPro OS',
        items: ['100% Automated triggers', 'Enterprise-grade security', 'Real-time KPI dashboards', 'Audit-ready operations']
      }
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
    contactSection: {
      title: 'Get Started',
      subtitle: 'Ready to elevate your recovery operations? Fill out the form and our team will be in touch shortly.',
      name: 'Full Name',
      org: 'Organization',
      phone: 'Phone Number',
      email: 'Email Address',
      message: 'Your Message',
      submit: 'Submit Request',
      success: 'Thank you! We have received your request and will contact you shortly.',
      placeholders: {
        name: 'Your Name',
        org: 'Bank or Financial Institution',
        phone: '+976 ....',
        email: 'name@organization.com',
        message: 'Tell us about your requirements...'
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

// --- Scroll Reveal Logic ---

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: 'translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
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
    <div className="dashboard-card rounded-[2rem] p-4 md:p-8 w-full max-w-6xl mx-auto shadow-2xl relative overflow-hidden group">
      <div className={`absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-700`}></div>
      
      {/* Cockpit Header */}
      <div className={`flex justify-between items-center mb-8 pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 text-[10px] font-black px-3 py-1.5 rounded-full border ${isDark ? 'bg-slate-900 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
            <Activity size={12} className="animate-pulse"/> {lang === 'mn' ? 'ONLINE' : 'SYSTEM ONLINE'}
          </div>
          <div className="hidden md:block text-[10px] terminal-text font-bold text-slate-500 tracking-wider">OP_KERNEL::V2.9.4</div>
        </div>
        <div className="flex items-center gap-3">
           <Bell size={16} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors"/>
           <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>ADM</div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', trend: '+2.4%', color: 'text-red-500' },
          { label: t.stats.today, value: 1240000, prefix: '$', trend: '+12%', color: 'text-emerald-500' },
          { label: t.stats.rate, value: 42, suffix: '%', trend: '+5.1%', color: 'text-blue-500' },
          { label: t.stats.risk, value: 8, suffix: '/10', trend: '-1.2%', color: isDark ? 'text-white' : 'text-slate-900' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-xl border transition-all duration-300 ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
            <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="flex items-baseline justify-between">
              <div className={`text-xl font-black ${stat.color}`}>
                <NumberTicker value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-[8px] font-black text-emerald-500">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`lg:col-span-8 p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <BarChart3 size={14} className="text-blue-500"/> {lang === 'mn' ? 'ГҮЙЦЭТГЭЛ' : 'VELOCITY'}
            </h4>
          </div>
          <div className="h-48 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.03)" : "#f1f5f9"} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} dy={5} fontWeight="bold" />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
                  contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', border: 'none', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', fontSize: '9px' }}
                />
                <Area type="monotone" dataKey="collected" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCollected)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
           <div className={`p-6 rounded-2xl border flex-1 flex flex-col justify-between ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                 {lang === 'mn' ? 'ҮЙЛДЛҮҮД' : 'ACTIONS'}
              </h4>
              <div className="space-y-4">
                 {[
                   { label: 'Outbound', val: 84, color: 'bg-blue-500' },
                   { label: 'SMS Batch', val: 92, color: 'bg-purple-500' },
                   { label: 'Legal Post', val: 41, color: 'bg-red-500' }
                 ].map((act, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-[9px] font-bold uppercase mb-1 text-slate-400">
                         <span>{act.label}</span>
                         <span className="text-blue-500">{act.val}%</span>
                      </div>
                      <div className="h-1 bg-slate-200/20 rounded-full overflow-hidden">
                         <div className={`h-full ${act.color} transition-all duration-1000`} style={{ width: `${act.val}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>
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
    <div className={`dashboard-card rounded-xl overflow-hidden mb-3 border transition-all duration-500 ${isOpen ? (isDark ? 'border-blue-500/40 scale-[1.01]' : 'border-blue-200 shadow-lg scale-[1.01]') : 'border-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center group"
      >
        <span className={`text-sm font-bold tracking-tight transition-colors ${isOpen ? 'text-blue-500' : (isDark ? 'text-slate-200' : 'text-slate-800')}`}>
          {q}
        </span>
        <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : (isDark ? 'bg-slate-800 text-slate-400 group-hover:bg-slate-700' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200')}`}>
          <ChevronDown size={14} />
        </div>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className={`px-6 pb-6 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              {a}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string, icon: React.ReactNode, placeholder: string, type?: string, theme: Theme }> = ({ label, icon, placeholder, type = 'text', theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
          {icon}
        </div>
        <input 
          type={type}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3.5 rounded-xl border outline-none transition-all text-sm font-medium ${isDark ? 'bg-slate-900/50 border-slate-800 focus:border-blue-600 text-white placeholder-slate-600' : 'bg-white border-slate-200 focus:border-blue-400 text-slate-900 placeholder-slate-400'}`}
        />
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = i18n[lang];
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.body;
    root.className = theme === 'dark' ? 'dark bg-slate-950 text-slate-200' : 'light bg-slate-50 text-slate-900';
  }, [theme]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const showcaseData = [
    { key: 'allocation', icon: <Workflow />, title: t.showcase.allocation.title, benefit: t.showcase.allocation.benefit, impact: t.showcase.allocation.impact },
    { key: 'routing', icon: <Target />, title: t.showcase.routing.title, benefit: t.showcase.routing.benefit, impact: t.showcase.routing.impact },
    { key: 'lockin', icon: <Lock />, title: t.showcase.lockin.title, benefit: t.showcase.lockin.benefit, impact: t.showcase.lockin.impact }
  ];

  const scrollCarousel = (direction: 'next' | 'prev') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500`}>
      
      {/* CINEMATIC NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 glass-panel py-4`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg">D</div>
            <span className={`text-lg font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div 
              className="hover:text-blue-500 cursor-pointer flex items-center gap-1 transition-colors relative py-2"
              onMouseEnter={() => setMegaMenu(true)}
            >
              {t.nav.product} <ChevronDown size={12} className={`transition-transform duration-300 ${megaMenu ? 'rotate-180 text-blue-500' : ''}`}/>
            </div>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.solutions}</a>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.why}</a>
            <a href="#" className="hover:text-blue-500 transition-colors">{t.nav.customers}</a>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center p-0.5 rounded-lg border ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-100'}`}>
              <button onClick={() => setLang('mn')} className={`px-2 py-1 text-[9px] font-bold rounded-md transition-all ${lang === 'mn' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}>MN</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 text-[9px] font-bold rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
            </div>
            
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg border transition-all ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-yellow-400 hover:border-slate-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all shadow-lg active:scale-95">
              {t.nav.demo}
            </button>
          </div>
        </div>

        {/* MEGA MENU EXPERIENCE */}
        <div 
           className={`absolute top-full left-0 right-0 glass-panel border-y border-slate-800 transition-all duration-500 ease-in-out overflow-hidden ${megaMenu ? 'max-h-[600px] opacity-100 py-12' : 'max-h-0 opacity-0 pointer-events-none'}`}
           onMouseLeave={() => setMegaMenu(false)}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
             {Object.entries(t.megaMenu).map(([key, item]) => {
               const menuItem = item as { title: string; desc: string };
               return (
                 <div key={key} className="group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                          {key === 'allocation' && <Workflow size={16}/>}
                          {key === 'borrower' && <Users size={16}/>}
                          {key === 'workflow' && <Zap size={16}/>}
                          {key === 'legal' && <Scale size={16}/>}
                          {key === 'sms' && <MessageSquare size={16}/>}
                          {key === 'dashboards' && <LayoutDashboard size={16}/>}
                          {key === 'risk' && <Target size={16}/>}
                          {key === 'documents' && <FileCode size={16}/>}
                          {key === 'audit' && <Shield size={16}/>}
                       </div>
                       <h4 className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{menuItem.title}</h4>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed ml-11">{menuItem.desc}</p>
                 </div>
               );
             })}
          </div>
        </div>
      </nav>

      {/* CINEMATIC HERO */}
      <header className="relative pt-32 md:pt-48 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="bloom top-0 left-1/2 -translate-x-1/2 opacity-40"></div>
        <div className="absolute inset-0 grid-bg -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center mb-16 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 animate-slide-up ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-inner' : 'bg-blue-50 border-blue-100'}`}>
            <Cpu size={14} className="text-blue-500 animate-spin-slow"/>
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-blue-500">{t.hero.tag}</span>
          </div>
          
          <h1 className={`text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1] animate-slide-up [animation-delay:200ms] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'mn' ? <>Зээл төлүүлэлтийн <br /><span className="gradient-text">cockpit удирдлага.</span></> : <>The command <br /><span className="gradient-text">cockpit for recovery.</span></>}
          </h1>
          
          <p className={`text-base md:text-xl max-w-2xl mx-auto mb-10 text-slate-500 font-medium leading-relaxed animate-slide-up [animation-delay:400ms]`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:600ms]">
            <button className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
              {t.hero.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`font-black py-4 px-8 rounded-xl transition-all border flex items-center gap-3 ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'}`}>
              <Eye size={20} className="text-blue-500"/> {t.hero.secondary}
            </button>
          </div>
        </div>

        <div className="px-6 relative z-10 animate-slide-up [animation-delay:800ms]">
          <DashboardPreview lang={lang} theme={theme} />
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <section className={`py-24 border-y transition-colors ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-5xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.excelSection.title}</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">{t.excelSection.subtitle}</p>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Reveal direction="right">
              <div className={`h-full p-8 md:p-12 rounded-[2rem] border ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                    <FileSpreadsheet size={24}/>
                  </div>
                  <h3 className={`text-xl font-black ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>{t.excelSection.excel.title}</h3>
                </div>
                <ul className="space-y-4">
                  {t.excelSection.excel.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-500 text-sm">
                      <AlertTriangle size={16} className="text-amber-500 flex-shrink-0"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className={`h-full p-8 md:p-12 rounded-[2rem] border border-blue-500/30 ${theme === 'dark' ? 'bg-blue-600/5' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Zap size={24}/>
                  </div>
                  <h3 className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`}>{t.excelSection.debtpro.title}</h3>
                </div>
                <ul className="space-y-4">
                  {t.excelSection.debtpro.items.map((item, idx) => (
                    <li key={idx} className={`flex items-center gap-3 text-sm font-bold ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURE CAROUSEL */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
           <Reveal>
              <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">Operating Intelligence</h3>
              <h2 className="text-3xl md:text-5xl font-black">{lang === 'mn' ? 'Үйлдлийн систем' : 'Operational Intelligence'}</h2>
           </Reveal>
           <Reveal delay={200}>
              <div className="flex gap-3">
                 <button onClick={() => scrollCarousel('prev')} className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}><ArrowRight className="rotate-180" size={20}/></button>
                 <button onClick={() => scrollCarousel('next')} className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}><ArrowRight size={20}/></button>
              </div>
           </Reveal>
        </div>

        <div ref={carouselRef} className="flex gap-6 px-6 md:px-[calc((100vw-1280px)/2)] scroll-snap-x overflow-x-auto no-scrollbar pb-12">
          {showcaseData.map((item, i) => (
            <div key={i} className="snap-item min-w-[280px] md:min-w-[400px] dashboard-card p-10 rounded-[2.5rem] group hover:border-blue-500/50">
               <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">{item.icon}</div>
                  <div className="text-[9px] font-black px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full uppercase tracking-widest">{item.impact}</div>
               </div>
               <h4 className="text-xl font-black mb-4">{item.title}</h4>
               <p className="text-sm text-slate-500 leading-relaxed mb-10">{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD GEN FORM SECTION */}
      <section className={`py-24 transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div>
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Partnership</h3>
                <h2 className={`text-4xl md:text-6xl font-black mb-10 leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.contactSection.title}</h2>
                <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed">{t.contactSection.subtitle}</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center shadow-inner">
                      <Mail size={24}/>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Email us</div>
                      <div className="text-lg font-bold">contact@tnd.mn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center shadow-inner">
                      <Phone size={24}/>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Call sales</div>
                      <div className="text-lg font-bold">+976 7700-1122</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className={`p-8 md:p-12 rounded-[3rem] border relative overflow-hidden dashboard-card ${theme === 'dark' ? 'bg-slate-900/20' : 'bg-white'}`}>
                {submitted ? (
                  <div className="py-20 text-center animate-slide-up">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-emerald-500/30">
                      <CheckCircle2 size={40}/>
                    </div>
                    <h3 className="text-2xl font-black mb-4">{t.contactSection.success}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField theme={theme} label={t.contactSection.name} icon={<User size={18}/>} placeholder={t.contactSection.placeholders.name} />
                      <InputField theme={theme} label={t.contactSection.org} icon={<Building size={18}/>} placeholder={t.contactSection.placeholders.org} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField theme={theme} label={t.contactSection.phone} icon={<Phone size={18}/>} placeholder={t.contactSection.placeholders.phone} />
                      <InputField theme={theme} label={t.contactSection.email} icon={<Mail size={18}/>} placeholder={t.contactSection.placeholders.email} type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{t.contactSection.message}</label>
                      <textarea 
                        rows={4}
                        placeholder={t.contactSection.placeholders.message}
                        className={`w-full p-4 rounded-xl border outline-none transition-all text-sm font-medium resize-none ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800 focus:border-blue-600 text-white placeholder-slate-600' : 'bg-white border-slate-200 focus:border-blue-400 text-slate-900 placeholder-slate-400'}`}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          {t.contactSection.submit} <Send size={18}/>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal><h2 className="text-3xl md:text-5xl font-black text-center mb-16">{t.faq.title}</h2></Reveal>
          <div className="space-y-4">
            {t.faq.items.map((faq, i) => (
              <Reveal key={i} delay={i * 100}><FAQItem q={faq.q} a={faq.a} theme={theme} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <Reveal>
               <div className={`relative p-12 md:p-24 rounded-[3rem] text-center overflow-hidden bg-blue-600`}>
                  <div className="absolute inset-0 grid-bg opacity-10"></div>
                  <div className="relative z-10">
                     <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1]">{t.finalCta.title}</h2>
                     <p className="text-base md:text-xl text-blue-50 max-w-2xl mx-auto mb-12 opacity-90">{t.finalCta.subtitle}</p>
                     <button className="bg-white text-blue-600 font-black py-4 px-12 rounded-xl shadow-2xl transition-all text-base uppercase tracking-widest active:scale-95">{t.finalCta.cta}</button>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* FOOTER */}
      <footer className={`pt-24 pb-12 border-t ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
               <div className="col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-lg">D</div>
                     <span className={`text-xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm max-w-xs mb-8 leading-relaxed font-medium">Modern loan recovery OS for professional risk and collection teams.</p>
               </div>
               <div><h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Platform</h4>
                  <ul className="space-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Allocation</li>
                     <li className="hover:text-blue-500 cursor-pointer">Legal Hub</li>
                     <li className="hover:text-blue-500 cursor-pointer">API Docs</li>
                  </ul>
               </div>
               <div><h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Trust</h4>
                  <ul className="space-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">Privacy</li>
                     <li className="hover:text-blue-500 cursor-pointer">Security</li>
                  </ul>
               </div>
               <div><h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-400">Company</h4>
                  <ul className="space-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                     <li className="hover:text-blue-500 cursor-pointer">About Us</li>
                     <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                  </ul>
               </div>
            </div>
            <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-widest text-slate-600 ${theme === 'dark' ? 'border-slate-900' : 'border-slate-100'}`}>
               <p>© 2024 TND DEBTPRO. MADE IN MONGOLIA</p>
               <div className="flex gap-10">
                  <span className="flex items-center gap-1"><Shield size={12}/> ISO 27001</span>
                  <span className="flex items-center gap-1"><Cpu size={12}/> STABLE KERNEL</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
