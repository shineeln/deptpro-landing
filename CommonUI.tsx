
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  FileSpreadsheet, 
  AlertCircle, 
  XCircle, 
  RefreshCw, 
  DatabaseZap 
} from 'lucide-react';

export const Reveal: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = "" }) => {
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
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  const directionClasses = { up: 'translate-y-6', left: 'translate-x-6', right: '-translate-x-6' };
  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${className} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const NumberTicker: React.FC<{ value: number; prefix?: string; suffix?: string; duration?: number }> = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
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

export const FAQItem: React.FC<{ q: string; a: string; theme: string }> = ({ q, a, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';
  return (
    <div className={`mb-4 rounded-2xl border transition-all duration-300 ${isDark ? 'border-slate-800 bg-slate-900/20' : 'border-slate-200 bg-white shadow-sm hover:shadow-md'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? 'text-blue-500' : isDark ? 'text-slate-200' : 'text-slate-900'}`}>{q}</span>
        <div className={`p-1 rounded-lg transition-all ${isOpen ? 'bg-blue-500/10 rotate-180' : 'bg-slate-500/5'}`}>
          <ChevronDown size={18} className={isOpen ? 'text-blue-500' : isDark ? 'text-slate-500' : 'text-slate-400'} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className={`px-6 text-sm font-medium leading-relaxed pt-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          {a}
        </p>
      </div>
    </div>
  );
};

export const ExcelChaosAnimation: React.FC = () => (
  <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
     <div className="absolute animate-float [animation-duration:3s] top-2 left-1/4 opacity-40"><FileSpreadsheet size={20} className="text-red-400"/></div>
     <div className="absolute animate-float [animation-duration:5s] bottom-2 right-1/4 opacity-40"><AlertCircle size={18} className="text-amber-500"/></div>
     <div className="absolute animate-float [animation-duration:4s] top-1/2 right-1/3 opacity-40"><XCircle size={16} className="text-red-500"/></div>
     <svg width="200" height="100" viewBox="0 0 200 100" fill="none" className="opacity-20">
        <path d="M10 50 Q 50 10 100 50 T 190 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M10 30 Q 80 80 190 20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M30 90 Q 100 20 170 90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
     </svg>
     <div className="z-10 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-red-500/20 shadow-xl">
        <FileSpreadsheet size={40} className="text-red-500 animate-pulse"/>
     </div>
  </div>
);

export const DebtProOrderAnimation: React.FC = () => (
  <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
     <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-full h-[1px] bg-blue-500 animate-[reveal_2s_infinite]"></div>
     </div>
     <div className="absolute animate-spin-slow opacity-20"><RefreshCw size={120} className="text-blue-400"/></div>
     <div className="z-10 bg-blue-600 p-4 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] animate-float">
        <DatabaseZap size={40} className="text-white"/>
     </div>
  </div>
);
