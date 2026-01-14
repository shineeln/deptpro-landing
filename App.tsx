
import React, { useState, useEffect } from 'react';
import { Language } from './i18n';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ComparisonSection } from './ComparisonSection';
import { WorkflowSection } from './WorkflowSection';
import { ShowcaseSection } from './ShowcaseSection';
import { ContactSection } from './ContactSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [megaMenu, setMegaMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}>
      
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        setTheme={setTheme} 
        megaMenu={megaMenu} 
        setMegaMenu={setMegaMenu} 
      />

      <main>
        <Hero 
          lang={lang} 
          theme={theme} 
          activeSlide={activeSlide} 
          setActiveSlide={setActiveSlide} 
        />

        <ComparisonSection lang={lang} theme={theme} />

        <WorkflowSection lang={lang} theme={theme} />

        <ShowcaseSection lang={lang} theme={theme} />

        <ContactSection 
          lang={lang} 
          theme={theme} 
          submitted={submitted} 
          isSubmitting={isSubmitting} 
          handleFormSubmit={handleFormSubmit} 
        />

        <FAQSection lang={lang} theme={theme} />
      </main>

      <Footer lang={lang} theme={theme} />
    </div>
  );
};

export default App;
