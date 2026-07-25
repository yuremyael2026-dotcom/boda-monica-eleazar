import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';

interface HeroProps {
  data: WeddingData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
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
          style={{ animationDuration: '20s' }}
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-stone-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white flex flex-col items-center justify-center">
        {/* Subtle Ornamental Top Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-xs sm:text-sm tracking-widest uppercase text-amber-100">
          <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
          <span>{data.general.tagline}</span>
          <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
        </div>

        {/* Bride & Groom Names */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white drop-shadow-lg mb-2 leading-tight">
          <span className="block font-serif text-[#FDFBF7]">
            {data.general.brideName}
          </span>
          <span className="block font-script text-3xl sm:text-5xl md:text-6xl text-[#B08D57] my-1 sm:my-3 italic">
            &amp;
          </span>
          <span className="block font-serif text-[#FDFBF7]">
            {data.general.groomName}
          </span>
        </h1>

        {/* Date Display */}
        <div className="mt-6 mb-10 flex flex-col items-center">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mb-4" />
          <p className="text-lg sm:text-2xl font-light tracking-widest uppercase text-amber-50/90 font-serif">
            {data.general.dateDisplay}
          </p>
          <p className="text-xs sm:text-sm tracking-widest text-stone-200 uppercase mt-1">
            {data.general.locationCity}
          </p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mt-4" />
        </div>

        {/* CTA Button */}
        <a
          href="#historia"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B08D57] text-white font-medium text-sm sm:text-base tracking-wider uppercase shadow-lg transition-all duration-300 hover:bg-[#9A7232] hover:shadow-[0_0_25px_rgba(176,141,87,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 border border-white/20"
        >
          <span>Conoce los detalles de nuestra boda</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </a>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#contador"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest text-stone-200 font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-[#B08D57] transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-[#B08D57] animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
};
