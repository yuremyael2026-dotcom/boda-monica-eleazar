import React from 'react';
import { MapPin, Church, Wine, Clock, Calendar } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface EventDetailsProps {
  data: WeddingData;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  return (
    <section id="detalles" className="py-20 px-4 linen-bg relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
            <MapPin className="w-4 h-4 text-[#B08D57]" />
            <span>¿Dónde y Cuándo?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
            Detalles de la Boda
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-light">
            Acompáñanos en los lugares seleccionados para celebrar nuestra unión.
          </p>
          <FloralDivider variant="ornate" className="my-6" />
        </div>

        {/* Details Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Ceremonia Religiosa */}
          <div className="glass rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E2D9] flex flex-col group">
            {/* Card Header Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={data.ceremony.image}
                alt={data.ceremony.placeName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#B08D57] text-white px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow">
                <Church className="w-3.5 h-3.5 text-[#DFCA92]" />
                <span>Misa</span>
              </div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FDFBF7]">
                  {data.ceremony.title}
                </h3>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white/80">
              <div className="space-y-4">
                <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-800">
                  {data.ceremony.placeName}
                </h4>

                <div className="flex items-start gap-3 text-[#6B6B6B] text-sm">
                  <Calendar className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-800 block">Fecha:</span>
                    <span>{data.ceremony.dateDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#6B6B6B] text-sm">
                  <Clock className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-800 block">Hora:</span>
                    <span>{data.ceremony.timeDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#6B6B6B] text-sm">
                  <MapPin className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-800 block">Ubicación:</span>
                    <span>{data.ceremony.address}</span>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D9]">
                <a
                  href={data.ceremony.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B08D57] text-[#B08D57] rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#B08D57] hover:text-white transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>CÓMO LLEGAR</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Recepción */}
          <div className="glass rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E2D9] flex flex-col group">
            {/* Card Header Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={data.reception.image}
                alt={data.reception.placeName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#B08D57] text-white px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow">
                <Wine className="w-3.5 h-3.5 text-[#DFCA92]" />
                <span>Fiesta</span>
              </div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FDFBF7]">
                  {data.reception.title}
                </h3>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white/80">
              <div className="space-y-4">
                <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-800">
                  {data.reception.placeName}
                </h4>

                <div className="flex items-start gap-3 text-[#6B6B6B] text-sm">
                  <Clock className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-800 block">Hora de inicio:</span>
                    <span>{data.reception.timeDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#6B6B6B] text-sm">
                  <MapPin className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-800 block">Dirección:</span>
                    <p>{data.reception.addressLine1}</p>
                    <p className="text-[#8B8273] text-xs mt-0.5">{data.reception.addressLine2}</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="mt-8 pt-6 border-t border-[#E8E2D9]">
                <a
                  href={data.reception.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B08D57] text-[#B08D57] rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#B08D57] hover:text-white transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>CÓMO LLEGAR</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
