import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Maximize2, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';
import { LightboxModal } from './LightboxModal';

interface HistoryGalleryProps {
  data: WeddingData;
}

export const HistoryGallery: React.FC<HistoryGalleryProps> = ({ data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const photos = data.gallery;

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const nextCarousel = () => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevCarousel = () => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="historia" className="py-20 px-4 linen-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
            <Camera className="w-4 h-4 text-[#B08D57]" />
            <span>Galería Fotográfica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
            Nuestra Historia
          </h2>
          <p className="text-[#6B6B6B] text-sm sm:text-base font-light">
            Retratos de amor que atesoran los mejores momentos de nuestra sesión juntos.
          </p>

          <FloralDivider variant="ornate" className="my-6" />

          {/* Toggle View Mode Button */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                viewMode === 'grid'
                  ? 'bg-[#B08D57] text-white shadow-sm'
                  : 'bg-white/80 text-stone-600 border border-[#E8E2D9] hover:bg-stone-100'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Mosaico</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                viewMode === 'carousel'
                  ? 'bg-[#B08D57] text-white shadow-sm'
                  : 'bg-white/80 text-stone-600 border border-[#E8E2D9] hover:bg-stone-100'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Carrusel</span>
            </button>
          </div>
        </div>

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#E8E2D9]"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest gold-text font-mono">
                    Fotografía #{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-normal mb-1">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-stone-300 font-light italic">
                      {item.caption}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-2 text-xs gold-text uppercase tracking-widest">
                    <Maximize2 className="w-4 h-4 text-[#B08D57]" />
                    <span>Ver en pantalla completa</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel View Mode */}
        {viewMode === 'carousel' && (
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D9] group">
              <img
                src={photos[activePhotoIndex].url}
                alt={photos[activePhotoIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="font-serif text-3xl font-light text-[#FDFBF7]">
                  {photos[activePhotoIndex].title}
                </h3>
                {photos[activePhotoIndex].caption && (
                  <p className="text-sm text-stone-200 mt-1 font-light italic">
                    {photos[activePhotoIndex].caption}
                  </p>
                )}
                <button
                  onClick={() => openLightbox(activePhotoIndex)}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest gold-text hover:text-white transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Ampliar fotografía</span>
                </button>
              </div>

              {/* Prev / Next Carousel Controls */}
              <button
                onClick={prevCarousel}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
                title="Fotografía anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCarousel}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
                title="Siguiente fotografía"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto pb-2 no-scrollbar">
              {photos.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    activePhotoIndex === idx
                      ? 'border-[#B08D57] scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal Component */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={photos}
          currentIndex={activePhotoIndex}
          onIndexChange={(newIdx) => setActivePhotoIndex(newIdx)}
        />
      </div>
    </section>
  );
};
