
import React from 'react';
import { i18n, Language } from './i18n';
import { Reveal, FAQItem } from './CommonUI';

interface FAQSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <Reveal><h2 className="text-3xl md:text-5xl font-black text-center mb-16">{t.faq.title}</h2></Reveal>
      {t.faq.items.map((f, i) => <Reveal key={i} delay={i * 100}><FAQItem q={f.q} a={f.a} theme={theme} /></Reveal>)}
    </section>
  );
};
