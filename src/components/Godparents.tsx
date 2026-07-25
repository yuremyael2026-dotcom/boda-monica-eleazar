import React from 'react';
import { Heart, Sparkles, UserCheck } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface GodparentsProps {
  data: WeddingData;
}

export const Godparents: React.FC<GodparentsProps> = ({ data }) => {
  return (
    <section className="py-20 px-4 linen-bg relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
          <UserCheck className="w-4 h-4 text-[#B08D57]" />
          <span>Agradecimiento Especial</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
          Nuestros Padrinos
        </h2>
        <p className="text-[#6B6B6B] text-sm sm:text-base font-light max-w-lg mx-auto">
          Agradecemos de corazón a nuestras personas especiales que nos acompañan como testigos de nuestro amor.
        </p>

        <FloralDivider variant="ornate" className="my-6" />

        <div className="max-w-xl mx-auto my-8">
          {data.godparents.map((group) => (
            <div
              key={group.role}
              className="glass rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E8E2D9] relative overflow-hidden group hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[#B08D57]" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest gold-text font-semibold block mb-2">
                {group.role}
              </span>

              <div className="space-y-2 mt-4">
                {group.names.map((name) => (
                  <p
                    key={name}
                    className="font-serif text-2xl sm:text-3xl font-normal text-stone-800 tracking-wide"
                  >
                    {name}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D9] flex items-center justify-center gap-1.5 text-xs text-stone-500 font-light">
                <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
                <span>Guiando nuestro camino</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
