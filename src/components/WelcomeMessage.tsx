import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface WelcomeMessageProps {
  data: WeddingData;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ data }) => {
  return (
    <section className="py-16 sm:py-24 px-4 linen-bg relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Subtle Decorative Frame Card */}
        <div className="glass rounded-3xl p-8 sm:p-14 shadow-sm border border-[#E8E2D9] relative overflow-hidden">
          {/* Corner Floral Ornaments */}
          <div className="absolute top-4 left-4 text-[#B08D57]/30 pointer-events-none">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="currentColor">
              <path d="M0 0 C 15 0, 20 5, 20 20 C 5 20, 0 15, 0 0 Z" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 text-[#B08D57]/30 pointer-events-none rotate-90">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="currentColor">
              <path d="M0 0 C 15 0, 20 5, 20 20 C 5 20, 0 15, 0 0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 text-[#B08D57]/30 pointer-events-none -rotate-90">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="currentColor">
              <path d="M0 0 C 15 0, 20 5, 20 20 C 5 20, 0 15, 0 0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 text-[#B08D57]/30 pointer-events-none rotate-180">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="currentColor">
              <path d="M0 0 C 15 0, 20 5, 20 20 C 5 20, 0 15, 0 0 Z" />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#B08D57]" />
            <span>Bienvenidos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-6">
            Nuestra Celebración
          </h2>

          <FloralDivider variant="ornate" />

          {/* Heartfelt Quote */}
          <blockquote className="font-serif text-lg sm:text-2xl text-[#4A4A4A] italic font-light leading-relaxed my-6 px-2 sm:px-6">
            "{data.general.welcomeMessage}"
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex flex-col items-center justify-center gap-2">
            <p className="font-script text-3xl sm:text-4xl gold-text">
              {data.general.brideName} &amp; {data.general.groomName}
            </p>
            <span className="text-xs tracking-widest text-stone-500 uppercase">
              {data.general.dateDisplay}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
