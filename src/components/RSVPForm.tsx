import React, { useState } from 'react';
import { Send, Users, User, MessageSquare, Heart, CheckCircle2 } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface RSVPFormProps {
  data: WeddingData;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ data }) => {
  const [guestName, setGuestName] = useState('');
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      alert('Por favor escribe el nombre de la familia o invitado.');
      return;
    }

    // Build automated formatted message exactly as requested
    const recipient = data.rsvp.recipientName || 'Mónica';
    const message =
      `Hola, ${recipient}.\n` +
      `Con gusto compartimos nuestra información.\n\n` +
      `👤 Familia:\n${guestName.trim()}\n\n` +
      `👨 Adultos:\n${adultsCount}\n\n` +
      `🧒 Niños:\n${childrenCount}\n\n` +
      `💬 Comentarios:\n${comments.trim() || 'Sin comentarios'}\n\n` +
      `¡Estamos felices de acompañarlos!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${data.rsvp.whatsappNumber}?text=${encodedMessage}`;

    // Trigger opening WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="asistencia" className="py-20 px-4 linen-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-12 shadow-md border border-[#E8E2D9] relative bg-white/80">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
              <Users className="w-4 h-4 text-[#B08D57]" />
              <span>Información de Invitados</span>
            </div>

            {/* MANDATORY Title: "Nos encantará saber que nos acompañarán" */}
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3 leading-tight">
              {data.rsvp.title}
            </h2>

            <p className="text-[#6B6B6B] text-sm sm:text-base font-light leading-relaxed">
              {data.rsvp.subtitle}
            </p>

            <FloralDivider variant="ornate" className="my-6" />
          </div>

          {/* Guest Info Form */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-left">
            {/* Input 1: Guest / Family Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-stone-700 mb-2">
                Nombre de la familia o invitado <span className="text-[#B08D57]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ej. Familia Serrano Juárez o Juan Pérez"
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] text-sm transition-all shadow-sm"
                />
                <User className="absolute right-4 top-3.5 w-5 h-5 text-stone-400 pointer-events-none" />
              </div>
            </div>

            {/* Input 2 & 3: Adults & Children */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-stone-700 mb-2">
                  ¿Cuántos adultos asistirán? <span className="text-[#B08D57]">*</span>
                </label>
                <select
                  value={adultsCount}
                  onChange={(e) => setAdultsCount(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] text-sm transition-all shadow-sm cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Adulto' : 'Adultos'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-stone-700 mb-2">
                  ¿Cuántos niños asistirán? <span className="text-stone-400 font-normal">(Opcional)</span>
                </label>
                <select
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] text-sm transition-all shadow-sm cursor-pointer"
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Niño' : 'Niños'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input 4: Comments */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-stone-700 mb-2">
                Comentarios <span className="text-stone-400 font-normal">(Opcional)</span>
              </label>
              <textarea
                rows={3}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Alergias alimentarias, canciones sugeridas o un mensaje especial..."
                className="w-full px-4 py-3 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] text-sm transition-all shadow-sm"
              />
            </div>

            {/* Submit WhatsApp Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B08D57] hover:bg-[#9A7232] text-white font-medium text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 text-white/90" />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>
                ¡Muchas gracias! Se ha abierto WhatsApp con tu mensaje. Asegúrate de enviarlo.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
