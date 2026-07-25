import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface CountdownProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ data }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(data.general.dateISO).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.general.dateISO]);

  // Google Calendar link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Boda de ${data.general.brideName} & ${data.general.groomName}`);
    const details = encodeURIComponent(
      `¡Nos complace invitarlos a celebrar nuestro matrimonio!\nCeremonia: ${data.ceremony.placeName}\nRecepción: ${data.reception.placeName}`
    );
    const location = encodeURIComponent(`${data.ceremony.placeName}, ${data.general.locationCity}`);
    
    // Start date 2026-11-14 13:00 UTC-6 -> ISO UTC string formatting
    const startDate = "20261114T190000Z";
    const endDate = "20261115T080000Z";

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section id="contador" className="py-20 px-4 linen-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <div className="inline-flex items-center gap-2 text-[#B08D57] text-xs uppercase tracking-widest font-semibold mb-2">
          <Calendar className="w-4 h-4 text-[#B08D57]" />
          <span>Faltan muy pocos días</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-800 mb-3">
          Cuenta Regresiva
        </h2>
        <p className="text-[#6B6B6B] text-sm sm:text-base max-w-md mx-auto font-light">
          Guardemos este día especial juntos. Contamos los momentos hasta dar el "Sí, acepto".
        </p>

        <FloralDivider variant="branch" className="my-6" />

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-10 max-w-2xl mx-auto">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="glass rounded-3xl p-5 sm:p-6 shadow-sm border border-[#E8E2D9] transition-all hover:scale-105 hover:shadow-md flex flex-col items-center justify-center relative group"
            >
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#B08D57] opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-light gold-text tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#B08D57] mt-2">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Target Date Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/80 text-stone-800 rounded-full px-6 py-3 text-xs sm:text-sm shadow-sm border border-[#E8E2D9] mb-8">
          <Clock className="w-4 h-4 text-[#B08D57]" />
          <span className="font-serif text-base gold-text font-medium">
            {data.general.dateDisplay}
          </span>
          <span className="text-[#D1C7B7]">•</span>
          <span className="text-[#6B6B6B]">{data.general.timeDisplay}</span>
        </div>

        {/* Calendar Add Button */}
        <div>
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition-colors text-xs sm:text-sm font-medium tracking-wider uppercase shadow-md hover:shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#DFCA92]" />
            <span>Guardar en Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
};
