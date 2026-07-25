import React from 'react';
import {
  Clock,
  Church,
  Camera,
  Wine,
  Scroll,
  Utensils,
  Sparkles,
  Music,
  Coffee,
  PartyPopper,
} from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface TimelineProps {
  data: WeddingData;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Church':
        return <Church className="w-5 h-5 text-[#B08D57]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#B08D57]" />;
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#B08D57]" />;
      case 'Scroll':
        return <Scroll className="w-5 h-5 text-[#B08D57]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#B08D57]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B08D57]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#B08D57]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#B08D57]" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-[#B08D57]" />;
      default:
        return <Clock className="w-5 h-5 text-[#B08D57]" />;
    }
  };

  return (
    <section id="cronograma" className="py-20 px-4 linen-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
            <Clock className="w-4 h-4 text-[#B08D57]" />
            <span>Itinerario del Día</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
            Cronograma de Eventos
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-light">
            Cada momento ha sido preparado con amor para compartirlo juntos.
          </p>
          <FloralDivider variant="branch" className="my-6" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-0">
          {/* Central Line Connector (Desktop centered, Mobile left-aligned) */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#B08D57]/20 via-[#C5A059]/50 to-[#B08D57]/20" />

          <div className="space-y-10 sm:space-y-12">
            {data.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.time + item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon Circle */}
                  <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-12 h-12 rounded-full bg-[#FDFBF7] border-2 border-[#B08D57] shadow-md flex items-center justify-center transition-transform hover:scale-110">
                    {getIcon(item.icon)}
                  </div>

                  {/* Event Card Box */}
                  <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="glass rounded-3xl p-6 shadow-sm border border-[#E8E2D9] hover:shadow-md transition-all group relative">
                      {/* Badge Time */}
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#B08D57] text-white text-xs font-mono font-medium tracking-wider mb-3">
                        {item.time}
                      </span>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-800 group-hover:text-[#B08D57] transition-colors">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-[#6B6B6B] text-xs sm:text-sm mt-2 font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
