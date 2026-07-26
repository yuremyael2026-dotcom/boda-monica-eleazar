import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';

interface HeroProps {
  data: WeddingData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after 2.5 seconds automatically
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    // Or show content immediately if user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-stone-900"
    >
      {/* Background Image with Dark Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.general.heroImage}
          alt={`${data.general.brideName} y ${data.general.groomName}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          style={{ objectPosition: 'center center', animationDuration: '20s' }}
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-stone-950/60" />
      </div>

      {/* Hero Content - Fades in smoothly after 2.5s or on scroll */}
      <div
        className={`relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pt-12 pb-20 flex flex-col justify-between min-h-screen transition-all duration-1000 ease-out ${
          showContent
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        
        {/* Top Badge: ❤️ ¡NOS CASAMOS! */}
        <div className="flex justify-center sm:justify-start pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm tracking-widest uppercase text-amber-100 shadow-md">
            <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
            <span>{data.general.tagline}</span>
            <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
          </div>
        </div>

        {/* Central Blank Spacer to keep photo center completely clear */}
        <div className="flex-grow min-h-[30vh]" />

        {/* Bottom Right Area: Names, Date and CTA Button in lower right third (~65% height down screen) */}
        <div className="flex flex-col items-end text-right pb-10 sm:pb-16 self-end w-full">
          <div className="max-w-md w-full flex flex-col items-end text-right">
            {/* Bride & Groom Names */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white drop-shadow-xl mb-1 leading-tight">
              <span className="block font-serif text-[#FDFBF7]">
                {data.general.brideName}
              </span>
              <span className="block font-script text-2xl sm:text-4xl text-[#B08D57] my-0.5 sm:my-1 italic">
                &amp;
              </span>
              <span className="block font-serif text-[#FDFBF7]">
                {data.general.groomName}
              </span>
            </h1>

            {/* Date Display */}
            <div className="mt-3 mb-6 flex flex-col items-end text-right">
              <div className="h-[1px] w-20 bg-gradient-to-l from-[#B08D57] via-[#B08D57] to-transparent mb-2" />
              <p className="text-base sm:text-xl font-light tracking-widest uppercase text-amber-50/90 font-serif">
                {data.general.dateDisplay}
              </p>
              <p className="text-xs sm:text-sm tracking-widest text-stone-200 uppercase mt-0.5">
                {data.general.locationCity}
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#historia"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#B08D57] text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all duration-300 hover:bg-[#9A7232] hover:shadow-[0_0_25px_rgba(176,141,87,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 border border-white/20"
            >
              <span>Conoce los detalles de nuestra boda</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator - Fades in with content */}
      <a
        href="#contador"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-all duration-1000 ease-out cursor-pointer group ${
          showContent
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="text-[10px] uppercase tracking-widest text-stone-200 font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-[#B08D57] transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-[#B08D57] animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
};
