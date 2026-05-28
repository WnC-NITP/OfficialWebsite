'use client';

import { useState } from 'react';
import faqs from '@/lib/data/faqs.json';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Got Questions?<br />
            We&apos;ve Got Answers
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'bg-[#111214] border-white/20' 
                    : 'bg-[#050505] border-white/5 hover:border-white/10 hover:bg-[#0A0A0C]'
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                {/* Question */}
                <div className="p-6 flex justify-between items-center gap-4">
                  <h3 className={`font-medium text-base ${isOpen ? 'text-white' : 'text-[#A1A6B4]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 flex items-center justify-center text-2xl font-light transition-colors ${
                    isOpen ? 'text-white' : 'text-[#A1A6B4]'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </div>
                </div>
                
                {/* Answer */}
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out origin-top ${
                    isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-[#8E939E] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
