import React, { useState, useEffect } from 'react';
import { initialWeddingData, WeddingData } from './data/weddingData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { WelcomeMessage } from './components/WelcomeMessage';
import { HistoryGallery } from './components/HistoryGallery';
import { EventDetails } from './components/EventDetails';
import { Timeline } from './components/Timeline';
import { Godparents } from './components/Godparents';
import { LodgingSection } from './components/LodgingSection';
import { GiftRegistry } from './components/GiftRegistry';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { AdminConfigModal } from './components/AdminConfigModal';
import { WelcomeCover } from './components/WelcomeCover';

export default function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(() => {
    try {
      const saved = localStorage.getItem('wedding_invitation_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          ceremony: { ...parsed.ceremony, placeName: initialWeddingData.ceremony.placeName, image: initialWeddingData.ceremony.image },
          reception: { ...parsed.reception, image: initialWeddingData.reception.image },
          gallery: initialWeddingData.gallery,
          audio: initialWeddingData.audio,
          lodging: initialWeddingData.lodging,
          giftRegistry: initialWeddingData.giftRegistry,
          parents: initialWeddingData.parents,
        };
      }
    } catch (e) {
      console.warn('Could not read saved wedding data from localStorage:', e);
    }
    return initialWeddingData;
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleUpdateData = (newData: WeddingData) => {
    setWeddingData(newData);
    try {
      localStorage.setItem('wedding_invitation_config', JSON.stringify(newData));
    } catch (e) {
      console.warn('Failed to save wedding data to localStorage:', e);
    }
  };

  const handleResetData = () => {
    setWeddingData(initialWeddingData);
    try {
      localStorage.removeItem('wedding_invitation_config');
    } catch (e) {
      console.warn('Failed to remove wedding data from localStorage:', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] linen-bg text-[#4A4A4A] font-sans selection:bg-[#B08D57]/20 selection:text-[#B08D57]">
      {/* Fixed Header Navigation */}
      <Navbar
        data={weddingData}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={() => setIsPlayingMusic(!isPlayingMusic)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Portada / Hero */}
        <Hero data={weddingData} />

        {/* Cuenta Regresiva */}
        <Countdown data={weddingData} />

        {/* Mensaje de Bienvenida */}
        <WelcomeMessage data={weddingData} />

        {/* Nuestra Historia / Galería */}
        <HistoryGallery data={weddingData} />

        {/* Detalles de la Boda (Misa y Recepción) */}
        <EventDetails data={weddingData} />

        {/* Cronograma de Eventos */}
        <Timeline data={weddingData} />

        {/* Padrinos */}
        <Godparents data={weddingData} />

        {/* Opciones de Hospedaje */}
        <LodgingSection data={weddingData} />

        {/* Mesa de Regalos */}
        <GiftRegistry data={weddingData} />

        {/* Información de Invitados (RSVP WhatsApp) */}
        <RSVPForm data={weddingData} />
      </main>

      {/* Pie de Página */}
      <Footer
        data={weddingData}
      />

      {/* Floating Audio Player */}
      <MusicPlayer
        data={weddingData}
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Admin Customizer Modal */}
      <AdminConfigModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        data={weddingData}
        onUpdateData={handleUpdateData}
        onResetData={handleResetData}
      />

      {/* Pantalla de Bienvenida Inicial / Cover */}
      <WelcomeCover
        data={weddingData}
        onOpen={() => setIsPlayingMusic(true)}
      />
    </div>
  );
}
