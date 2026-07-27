import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';

interface NavbarProps {
  data: WeddingData;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Historia', href: '#historia' },
    { name: 'Detalles', href: '#detalles' },
    { name: 'Cronograma', href: '#cronograma' },
    { name: 'Hospedaje', href: '#hospedaje' },
    { name: 'Mesa de Regalos', href: '#regalos' },
    { name: 'Asistencia', href: '#asistencia' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3'
          : 'bg-gradient-to-b from-black/50 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Couple Brand Monogram / Names */}
        <a
          href="#hero"
          className={`font-serif text-xl sm:text-2xl font-bold tracking-wider flex items-center gap-2 transition-colors ${
            scrolled ? 'text-[#B08D57]' : 'text-white'
          }`}
        >
          <span className="font-script text-2xl sm:text-3xl gold-text">
            {data.general.brideName.split(' ')[0]}
          </span>
          <Heart className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57] inline-block" />
          <span className="font-script text-2xl sm:text-3xl gold-text">
            {data.general.groomName.split(' ')[0]}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#B08D57] ${
                scrolled ? 'text-stone-700' : 'text-white/90 drop-shadow'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls: Music + Admin Panel */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleMusic}
            title={isPlayingMusic ? 'Pausar música' : 'Reproducir música'}
            className={`p-2 rounded-full transition-all flex items-center gap-2 text-xs font-medium px-3 border ${
              scrolled
                ? 'bg-white/80 hover:bg-[#B08D57]/10 text-stone-700 border-[#E8E2D9]'
                : 'bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-4 h-4 text-[#B08D57] animate-pulse" />
                <span className="hidden sm:inline">Música On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-stone-400" />
                <span className="hidden sm:inline">Música</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7]/98 backdrop-blur-xl border-b border-[#E8E2D9] px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 hover:text-[#B08D57] font-medium text-sm tracking-wider uppercase py-2 border-b border-stone-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
