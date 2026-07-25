import React, { useState } from 'react';
import { Heart, Sparkles, Music } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface WelcomeCoverProps {
  data: WeddingData;
  onOpen: () => void;
}

export const WelcomeCover: React.FC<WelcomeCoverProps> = ({ data, onOpen }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  const handleOpenClick = () => {
    setIsClosing(true);
    onOpen(); // Starts playing music & updates parent state
    setTimeout(() => {
      setIsDestroyed(true);
    }, 1000); // 1s matches the duration-1000 fade out
  };

  if (isDestroyed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden transition-all duration-1000 ease-in-out ${
        isClosing
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Photograph with Ken Burns Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: `url(${data.general.heroImage})`,
        }}
      />

      {/* Dark Overlay for Superior Legibility & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-black/60 to-stone-950/90 backdrop-blur-[2px]" />

      {/* Decorative Outer Border */}
      <div className="absolute inset-4 sm:inset-8 border border-[#B08D57]/30 rounded-3xl pointer-events-none" />

      {/* Central Card Content */}
      <div className="relative z-10 max-w-lg w-full text-center px-6 py-10 sm:py-12 rounded-3xl bg-stone-950/40 border border-white/10 backdrop-blur-md shadow-2xl text-white">
        
        {/* Monogram Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#DFCA92] mb-4 animate-pulse">
          <Heart className="w-6 h-6 fill-[#B08D57]" />
        </div>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#DFCA92] font-semibold mb-2">
          Nuestra Invitación de Boda
        </p>

        {/* Bride & Groom Names */}
        <h1 className="font-script text-5xl sm:text-6xl text-stone-100 my-4 leading-tight tracking-wide drop-shadow-lg">
          {data.general.brideName}
          <span className="block text-2xl sm:text-3xl font-serif gold-text my-1">&amp;</span>
          {data.general.groomName}
        </h1>

        {/* Floral Divider */}
        <div className="my-5 flex justify-center">
          <FloralDivider variant="ornate" className="max-w-xs opacity-80" />
        </div>

        {/* Date */}
        <p className="text-sm font-serif tracking-widest text-stone-200 uppercase mb-4">
          {data.general.dateDisplay} &bull; {data.general.locationCity}
        </p>

        {/* Elegant Quote */}
        <div className="my-6 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">
          <p className="italic text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
            "El amor no busca ser perfecto, busca ser real y compartirlo con quienes más amamos."
          </p>
        </div>

        {/* Big Action Button */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={handleOpenClick}
            className="group relative px-8 py-4 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#B08D57] via-[#C5A059] to-[#C87D55] text-stone-950 font-semibold text-base sm:text-lg tracking-wide shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 ring-4 ring-[#B08D57]/30 hover:ring-[#B08D57]/60"
          >
            <span className="text-xl">💍</span>
            <span className="font-bold">Abrir Invitación</span>
            <Sparkles className="w-5 h-5 text-stone-900 group-hover:rotate-12 transition-transform" />
          </button>

          <p className="text-[11px] text-stone-400 font-mono tracking-wider flex items-center gap-1.5 mt-1">
            <Music className="w-3 h-3 text-[#DFCA92]" />
            <span>Haz clic para iniciar con música de fondo</span>
          </p>
        </div>

      </div>
    </div>
  );
};
