import React, { useState } from 'react';
import {
  Hotel,
  Phone,
  MapPin,
  X,
  ChevronRight,
  Info,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface LodgingSectionProps {
  data: WeddingData;
}

export const LodgingSection: React.FC<LodgingSectionProps> = ({ data }) => {
  const [selectedVolcanicCard, setSelectedVolcanicCard] = useState<any | null>(null);

  const volcanicPark = data.lodging.options.volcanicPark;
  const hotelMagnolia = data.lodging.options.hotelMagnolia;
  const casonaDelCarmen = data.lodging.options.casonaDelCarmen;

  return (
    <section id="hospedaje" className="py-20 px-4 linen-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
            <Hotel className="w-4 h-4 text-[#B08D57]" />
            <span>Alojamiento Recomendado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
            {data.lodging.title}
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-light">
            {data.lodging.subtitle}
          </p>
          <FloralDivider variant="branch" className="my-6" />
        </div>

        {/* ================= OPTION 1: VOLCANIC PARK ================= */}
        <div className="mb-12">
          <div className="bg-stone-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-[#B08D57]/30 relative overflow-hidden mb-6">
            <div className="relative z-10 max-w-3xl space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#B08D57] text-white text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-2">
                  Opción 1
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light gold-text mb-1.5">
                  {volcanicPark.name}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {volcanicPark.description}
                </p>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                <Phone className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                <span className="font-medium text-stone-200">Teléfono:</span>
                <a
                  href={`tel:${volcanicPark.phoneRaw || '2226884767'}`}
                  className="text-[#DFCA92] font-semibold hover:underline"
                >
                  {volcanicPark.phone || '222 688 4767'}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-row items-center gap-2.5 flex-wrap sm:flex-nowrap">
                <a
                  href={`tel:${volcanicPark.phoneRaw || '2226884767'}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-[11px] sm:text-xs font-medium uppercase tracking-wider shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </a>
                <a
                  href={volcanicPark.reservationUrl || 'https://volcanicpark.com.mx/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#B08D57] text-[#DFCA92] rounded-full hover:bg-[#B08D57] hover:text-white transition-all text-[11px] sm:text-xs font-medium uppercase tracking-wider shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Reservar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Volcanic Park Accommodation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {volcanicPark.cards.map((card) => (
              <div
                key={card.id}
                className="glass rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E8E2D9] flex flex-col group bg-white/80"
              >
                <div className="relative h-36 sm:h-38 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3.5 font-serif text-lg font-light text-white drop-shadow">
                    {card.name}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-[#6B6B6B] text-xs font-light leading-relaxed mb-3">
                    {card.shortDescription}
                  </p>

                  <button
                    onClick={() => setSelectedVolcanicCard(card)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-[11px] sm:text-xs font-medium uppercase tracking-wider shadow-xs"
                  >
                    <span>Ver más detalles</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= OPTION 2 & 3: HOTEL LA MAGNOLIA & HOTEL LA CASONA DEL CARMEN ================= */}
        <div className="space-y-10">
          <div className="glass rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E8E2D9] flex flex-col md:flex-row gap-8 items-center bg-white/80">
            {/* Image */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img
                src={hotelMagnolia.image}
                alt={hotelMagnolia.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#B08D57] text-white text-xs font-medium uppercase tracking-wider">
                Opción 2
              </span>
              <h3 className="font-serif text-3xl font-light text-stone-800">
                {hotelMagnolia.name}
              </h3>
              <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">
                {hotelMagnolia.description}
              </p>

              <div className="pt-2 space-y-2 text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B08D57]" />
                  <span className="font-medium">Teléfono:</span>
                  <a
                    href={`tel:${hotelMagnolia.phoneRaw}`}
                    className="text-[#B08D57] font-semibold hover:underline"
                  >
                    {hotelMagnolia.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B08D57]" />
                  <span>{hotelMagnolia.address}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${hotelMagnolia.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-xs font-medium uppercase tracking-wider shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </a>
                <a
                  href={hotelMagnolia.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#B08D57] text-[#B08D57] rounded-full hover:bg-[#B08D57] hover:text-white transition-all text-xs font-medium uppercase tracking-wider shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Cómo llegar</span>
                </a>
              </div>
            </div>
          </div>

          {casonaDelCarmen && (
            <div className="glass rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E8E2D9] flex flex-col md:flex-row gap-8 items-center bg-white/80">
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img
                  src={casonaDelCarmen.image}
                  alt={casonaDelCarmen.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#B08D57] text-white text-xs font-medium uppercase tracking-wider">
                  Opción 3
                </span>
                <h3 className="font-serif text-3xl font-light text-stone-800">
                  {casonaDelCarmen.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">
                  {casonaDelCarmen.description}
                </p>

                <div className="pt-2 space-y-2 text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B08D57]" />
                    <span className="font-medium">Teléfono:</span>
                    <a
                      href={`tel:${casonaDelCarmen.phoneRaw}`}
                      className="text-[#B08D57] font-semibold hover:underline"
                    >
                      {casonaDelCarmen.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B08D57]" />
                    <span>{casonaDelCarmen.address}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:${casonaDelCarmen.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-xs font-medium uppercase tracking-wider shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar</span>
                  </a>
                  <a
                    href={casonaDelCarmen.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#B08D57] text-[#B08D57] rounded-full hover:bg-[#B08D57] hover:text-white transition-all text-xs font-medium uppercase tracking-wider shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Cómo llegar</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Volcanic Park Modal / Drawer */}
      {selectedVolcanicCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5DBC6] relative">
            <button
              onClick={() => setSelectedVolcanicCard(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#9A7B38] font-mono font-bold block mb-1">
              Volcanic Park
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
              {selectedVolcanicCard.name}
            </h3>

            {/* Photo Gallery inside Modal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedVolcanicCard.photos.map((pUrl: string, idx: number) => (
                <img
                  key={idx}
                  src={pUrl}
                  alt={selectedVolcanicCard.name}
                  className="w-full h-40 object-cover rounded-xl shadow-sm"
                />
              ))}
            </div>

            <div className="space-y-4 text-stone-700 text-sm font-light">
              <p className="leading-relaxed">{selectedVolcanicCard.fullDescription}</p>

              {selectedVolcanicCard.priceInfo && (
                <div className="p-4 rounded-xl bg-[#B08D57]/10 border border-[#B08D57]/20 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#B08D57] block text-xs uppercase tracking-wider">
                      Información de Reservación
                    </span>
                    <span className="text-xs sm:text-sm text-stone-700">
                      {selectedVolcanicCard.priceInfo}
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-2 text-sm text-stone-700">
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span className="font-medium">Teléfono:</span>
                <a
                  href={`tel:${volcanicPark.phoneRaw || '2226884767'}`}
                  className="text-[#B08D57] font-semibold hover:underline"
                >
                  {volcanicPark.phone || '222 688 4767'}
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <a
                  href={`tel:${volcanicPark.phoneRaw || '2226884767'}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B08D57] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#9A7232] transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </a>
                <a
                  href={volcanicPark.reservationUrl || 'https://volcanicpark.com.mx/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#B08D57] text-[#B08D57] rounded-full hover:bg-[#B08D57] hover:text-white transition-all text-xs uppercase tracking-wider font-medium shadow-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Reservar</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedVolcanicCard(null)}
                className="px-6 py-2.5 rounded-full bg-stone-800 text-white text-xs uppercase tracking-wider font-medium hover:bg-stone-900 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
