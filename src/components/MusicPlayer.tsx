import React, { useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { WeddingData } from '../data/weddingData';

interface MusicPlayerProps {
  data: WeddingData;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ data, isPlaying, onTogglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn('Audio play prevented by browser policy:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Hidden Audio element */}
      <audio
        ref={audioRef}
        src={data.audio.audioUrl}
        loop
        preload="auto"
      />

      {/* Floating Audio Badge Container */}
      <div className="group relative flex items-center">
        {/* Animated Equalizer Visualizer Bars when Playing */}
        {isPlaying && (
          <div className="absolute -top-10 right-0 bg-stone-900/90 text-white text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full shadow-lg border border-[#C5A059]/40 flex items-center gap-2 whitespace-nowrap animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{data.audio.songTitle}</span>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={onTogglePlay}
          className={`relative p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isPlaying
              ? 'bg-[#C5A059] text-stone-900 ring-4 ring-[#C5A059]/30 scale-105'
              : 'bg-stone-900 text-stone-100 hover:bg-stone-800 border border-[#C5A059]/50'
          }`}
          title={isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
          )}

          {/* Equalizer soundwave visual animation when playing */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFCA92] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5A6B53]"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
