import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    url: string;
    title?: string;
    caption?: string;
  }>;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    // Reset zoom when image changes
    setZoomLevel(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];

  const handlePrev = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onIndexChange((currentIndex + 1) % images.length);
  };

  const toggleZoom = () => {
    setZoomLevel(zoomLevel === 1 ? 1.8 : 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-xl transition-all duration-300">
      {/* Top Header Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3 text-white">
        <button
          onClick={toggleZoom}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          title={zoomLevel === 1 ? "Acercar (Zoom)" : "Alejar"}
        >
          {zoomLevel === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
        </button>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          title="Cerrar (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute top-5 left-6 z-50 text-white/80 font-mono text-xs uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95"
            title="Anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95"
            title="Siguiente"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}

      {/* Main Image Stage */}
      <div
        className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
          <img
            src={currentImg.url}
            alt={currentImg.title || 'Fotografía de la boda'}
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl transition-transform duration-300 cursor-zoom-in"
            style={{ transform: `scale(${zoomLevel})` }}
            onClick={toggleZoom}
          />

          {/* Caption & Title */}
          {(currentImg.title || currentImg.caption) && (
            <div className="mt-4 text-center text-white max-w-xl px-4">
              {currentImg.title && (
                <h4 className="font-serif text-xl sm:text-2xl text-[#DFCA92] font-semibold">
                  {currentImg.title}
                </h4>
              )}
              {currentImg.caption && (
                <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                  {currentImg.caption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
