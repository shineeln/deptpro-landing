
import React, { useState, useRef, useEffect } from 'react';
import { 
  FileUp, 
  Workflow, 
  MessageSquare, 
  FileText, 
  BarChart3,
  ChevronRight,
  Database,
  ArrowRight
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

interface InteractiveFlowSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const InteractiveFlowSection: React.FC<InteractiveFlowSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  const [activeStep, setActiveStep] = useState(0);

  const flowIcons = [
    <FileUp size={24} />,
    <Workflow size={24} />,
    <MessageSquare size={24} />,
    <FileText size={24} />,
    <BarChart3 size={24} />
  ];

  const flowPreviews = [
    <PreviewCommandCenter lang={lang} theme={theme} />,
    <div className="flex flex-col items-center justify-center h-full p-6 md:p-8">
      <div className={`w-full max-w-sm p-6 md:p-8 rounded-[2rem] border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl`}>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white"><Workflow size={20}/></div>
          <h4 className="font-black uppercase tracking-widest text-[10px] md:text-xs">Auto-Allocation AI</h4>
        </div>
        <div className="space-y-4 md:space-y-6">
          {[
            { n: 'Agent Bayaraa', l: 124, b: '1.2B' },
            { n: 'Agent Sarnai', l: 124, b: '1.2B' },
            { n: 'Agent Enkh', l: 124, b: '1.2B' }
          ].map((a, i) => (
            <div key={i} className="flex justify-between items-center pb-3 md:pb-4 border-b border-slate-800/10 last:border-0">
               <span className="text-xs font-bold">{a.n}</span>
               <div className="flex gap-4">
                 <span className="text-[9px] md:text-[10px] font-black text-slate-500">{a.l} L</span>
                 <span className="text-[9px] md:text-[10px] font-black text-blue-500">{a.b}</span>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8 pt-4">
           <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-blue-600 animate-pulse w-full"></div>
           </div>
           <p className="text-[8px] font-black text-slate-500 mt-2 text-center uppercase tracking-tighter">AI Load Balancing Active</p>
        </div>
      </div>
    </div>,
    <PreviewBorrower360 theme={theme} />,
    <PreviewLegalPipeline theme={theme} />,
    <PreviewPerformance theme={theme} />
  ];

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16 md:mb-24 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">
              {t.flow.tag}
            </div>
            <h2 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.flow.title}
            </h2>
            <p className={`text-base md:text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.flow.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: Interactive Step Cards */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 relative">
            {/* Glowing Dotted Line */}
            <div className="absolute left-6 md:left-8 top-10 bottom-10 w-px border-l-2 border-dashed border-slate-800/30 hidden lg:block -z-0">
              <div 
                className="absolute w-px bg-blue-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                style={{ top: 0, height: `${(activeStep / (flowIcons.length - 1)) * 100}%` }}
              ></div>
            </div>

            {t.flow.steps.map((step, i) => (
              <div 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={`relative z-10 p-6 md:p-8 rounded-[2rem] border cursor-pointer transition-all duration-500 group
                  ${activeStep === i 
                    ? (isDark ? 'bg-slate-900/50 border-blue-500/30 shadow-2xl scale-[1.01]' : 'bg-white border-blue-500/20 shadow-xl scale-[1.01]') 
                    : (isDark ? 'bg-transparent border-slate-900/50 grayscale opacity-40 hover:opacity-70 hover:grayscale-0' : 'bg-transparent border-slate-200 grayscale opacity-40 hover:opacity-70 hover:grayscale-0')
                  }`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0
                    ${activeStep === i 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                      : (isDark ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-400')}`}>
                    {React.cloneElement(flowIcons[i] as React.ReactElement, { size: 20 })}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                       <Database size={10} className="text-blue-500" />
                       <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-500 truncate">{step.path}</span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-black mb-2 md:mb-3 transition-colors ${activeStep === i ? (isDark ? 'text-white' : 'text-slate-900') : 'text-slate-500'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-medium leading-relaxed transition-opacity duration-300 ${activeStep === i ? (isDark ? 'text-slate-400' : 'text-slate-600') : 'hidden'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Mockup Preview */}
          <div className="lg:col-span-7 sticky top-32 hidden lg:block">
            <div className={`relative rounded-[2.5rem] md:rounded-[3rem] border p-8 md:p-12 overflow-hidden transition-all duration-700 min-h-[550px] md:min-h-[600px] flex items-center
              ${isDark ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200 shadow-2xl shadow-blue-900/5'}`}>
              
              {/* Background Accents */}
              <div className="absolute inset-0 grid-bg opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

              {/* Dynamic Content */}
              <div key={activeStep} className="relative z-10 w-full animate-content-entrance">
                {flowPreviews[activeStep]}
              </div>

              {/* Status Bar */}
              <div className={`absolute bottom-0 left-0 right-0 py-3 md:py-4 px-8 md:px-10 border-t flex justify-between items-center text-[10px] font-black uppercase tracking-widest
                ${isDark ? 'bg-slate-900/50 border-slate-800 text-slate-500' : 'bg-slate-50/80 border-slate-100 text-slate-400'}`}>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> System Ready</span>
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {t.flow.steps[activeStep].label}</span>
                </div>
                <button className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                   Next Phase <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
