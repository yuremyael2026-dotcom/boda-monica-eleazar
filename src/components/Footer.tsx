import React from 'react';
import { Heart, Download } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface FooterProps {
  data: WeddingData;
  onOpenPdfModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenPdfModal }) => {
  return (
    <footer className="relative bg-stone-900 text-white pt-20 pb-12 px-4 overflow-hidden border-t border-[#B08D57]/20">
      {/* Background Subtle Photo Vignette */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={data.general.footerImage}
          alt="Fotografía de cierre de la pareja"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/90 to-stone-900/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Couple Photo Circle Frame */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#B08D57] p-1 shadow-2xl mb-8 group hover:scale-105 transition-transform">
          <img
            src={data.general.footerImage}
            alt={`${data.general.brideName} & ${data.general.groomName}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Closing Thank You Text */}
        <h3 className="font-serif text-2xl sm:text-4xl text-[#FDFBF7] font-light leading-relaxed max-w-2xl px-4 italic mb-4">
          "Gracias por formar parte de este momento tan importante en nuestras vidas."
        </h3>

        <FloralDivider variant="simple" className="my-4" />

        <p className="font-serif text-3xl sm:text-4xl text-[#B08D57] font-light my-2 tracking-wide">
          Con cariño,<br />
          {data.general.brideName.split(' ')[0]} &amp; {data.general.groomName.split(' ')[0]}
        </p>

        <p className="text-xs tracking-widest text-stone-400 uppercase mt-4">
          {data.general.dateDisplay} • {data.general.locationCity}
        </p>

        {onOpenPdfModal && (
          <div className="mt-8">
            <button
              onClick={onOpenPdfModal}
              className="px-6 py-3 rounded-full bg-[#B08D57] hover:bg-[#9A7232] text-white text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 shadow-lg border border-white/20"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Descargar Invitación PDF</span>
            </button>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-stone-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 {data.general.coupleTitle}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 gold-text text-xs">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
            <span>para nuestra boda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
