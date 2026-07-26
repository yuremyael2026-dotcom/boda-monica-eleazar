import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';
import qrSears from "../assets/images/qr-sears.png";
interface GiftRegistryProps {
  data: WeddingData;
}

export const GiftRegistry: React.FC<GiftRegistryProps> = ({ data }) => {
  const giftInfo = data.giftRegistry;

  return (
    <section id="regalos" className="py-20 px-4 linen-bg relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
          <Gift className="w-4 h-4 text-[#B08D57]" />
          <span>Muestra de Cariño</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
          {giftInfo.title}
        </h2>
        <p className="text-[#6B6B6B] text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          {giftInfo.subtitle}
        </p>

        <FloralDivider variant="ornate" className="my-6" />

        {/* Content Box */}
        <div className="flex justify-center max-w-md mx-auto mt-10">
          {/* QR Code Card */}
          <div className="glass rounded-3xl p-8 border border-[#E8E2D9] shadow-sm flex flex-col items-center justify-center bg-white/80 w-full">
            <div className="p-3 bg-white rounded-2xl shadow-inner border border-[#E8E2D9] mb-4 inline-block">
              <img
                src={giftInfo.qrCodeUrl || qrSears}
                alt="Código QR Mesa de Regalos"
                className="w-48 h-48 object-contain"
              />
            </div>
            <span className="text-xs uppercase tracking-widest gold-text font-bold mb-3">
              Escanea con tu celular
            </span>
            {giftInfo.externalRegistryUrl && (
              <a
                href={giftInfo.externalRegistryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-xs font-medium uppercase tracking-wider shadow-md"
              >
                <span>Ver Mesa de Regalos</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

