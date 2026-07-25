import React, { useRef, useState } from 'react';
import { X, Download, Printer, Loader2, Sparkles, Heart, Calendar, MapPin, Clock, Gift, Phone, CheckCircle2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { WeddingData } from '../data/weddingData';
import { FloralDivider } from './FloralDivider';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WeddingData;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    setDownloadSuccess(false);

    try {
      // Hide print-unfriendly scrollbars temporary or adjust width
      const element = cardRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2, // High DPI resolution for print quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#FDFBF7',
        logging: false,
        windowWidth: 800,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // A4 Dimensions in mm: 210 x 297
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      // If content spans multiple pages
      while (heightLeft > 5) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      const fileName = `Invitacion_Boda_${data.general.brideName.replace(/\s+/g, '_')}_y_${data.general.groomName.replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (error) {
      console.error('Error al generar PDF:', error);
      alert('Hubo un inconveniente al generar el PDF. Puedes intentar usando la opción de Imprimir.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNativePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#FDFBF7] border border-[#E8E2D9] rounded-3xl shadow-2xl w-full max-w-4xl my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8E2D9] flex items-center justify-between bg-white/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#B08D57]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-2xl font-semibold text-stone-800">
                Invitación Imprimible (PDF)
              </h3>
              <p className="text-xs text-stone-500 font-light">
                Genera un documento PDF elegante con los datos actuales de la boda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNativePrint}
              className="p-2 sm:px-4 sm:py-2 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition text-xs font-medium flex items-center gap-2"
              title="Imprimir directamente"
            >
              <Printer className="w-4 h-4 text-stone-600" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="px-4 py-2 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition text-xs font-medium flex items-center gap-2 shadow-sm disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Generando PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>¡Descargado!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body - Live Card Preview */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 linen-bg">
          <div className="max-w-2xl mx-auto shadow-xl rounded-2xl overflow-hidden border border-[#D1C7B7]">
            {/* Printable Container Target */}
            <div
              ref={cardRef}
              className="bg-[#FDFBF7] text-[#4A4A4A] p-8 sm:p-12 relative print-container"
              style={{ width: '100%', minHeight: '1000px', fontFamily: 'serif' }}
            >
              {/* Outer Decorative Gold Border */}
              <div className="border-2 border-[#B08D57]/40 p-6 rounded-xl relative">
                <div className="border border-[#B08D57]/30 p-6 rounded-lg text-center relative bg-white/50">
                  
                  {/* Top Monogram Header */}
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 fill-[#B08D57] text-[#B08D57]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">
                    NUESTRA BODA
                  </span>
                  
                  <h1 className="font-script text-4xl sm:text-5xl text-[#B08D57] my-3 leading-tight">
                    {data.general.brideName}
                    <span className="text-2xl sm:text-3xl font-serif text-stone-600 mx-2">&amp;</span>
                    {data.general.groomName}
                  </h1>

                  <p className="text-sm tracking-wider text-stone-600 font-sans uppercase my-2">
                    {data.general.dateDisplay} &bull; {data.general.locationCity}
                  </p>

                  <FloralDivider variant="ornate" className="my-6" />

                  {/* Welcome Quote */}
                  <div className="my-6 px-4 py-4 bg-[#F5F2EA] rounded-xl border border-[#E8E2D9]">
                    <p className="italic text-sm text-stone-700 leading-relaxed font-serif">
                      "{data.general.welcomeMessage}"
                    </p>
                  </div>

                  {/* Padres & Padrinos */}
                  {((data.parents?.brideParents && data.parents.brideParents.length > 0) ||
                    (data.parents?.groomParents && data.parents.groomParents.length > 0) ||
                    (data.godparents && data.godparents.length > 0)) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 text-left border-y border-[#E8E2D9] py-6">
                      {data.parents?.brideParents && data.parents.brideParents.length > 0 && (
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57] font-semibold mb-2">
                            Padres de la Novia
                          </h4>
                          {data.parents.brideParents.map((p) => (
                            <p key={p} className="text-sm font-medium text-stone-800">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {data.parents?.groomParents && data.parents.groomParents.length > 0 && (
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57] font-semibold mb-2">
                            Padres del Novio
                          </h4>
                          {data.parents.groomParents.map((p) => (
                            <p key={p} className="text-sm font-medium text-stone-800">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {data.godparents && data.godparents.length > 0 && (
                        <div className="sm:col-span-2 pt-4 border-t border-stone-200">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57] font-semibold mb-2">
                            Padrinos Principales
                          </h4>
                          {data.godparents.map((gp) => (
                            <div key={gp.role} className="mb-1">
                              <span className="text-xs text-stone-500 font-sans uppercase font-medium mr-2">
                                {gp.role}:
                              </span>
                              <span className="text-sm font-serif text-stone-800">
                                {gp.names?.join(' & ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Event Details Grid */}
                  <div className="space-y-6 my-8 text-left">
                    {/* Ceremonia */}
                    {data.ceremony && (
                      <div className="p-5 rounded-xl border border-[#E8E2D9] bg-white shadow-2xs">
                        <div className="flex items-center gap-2 text-[#B08D57] font-semibold text-xs uppercase tracking-wider mb-2">
                          <Calendar className="w-4 h-4 text-[#B08D57]" />
                          <span>{data.ceremony.title}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-stone-800">
                          {data.ceremony.placeName}
                        </h3>
                        <div className="text-xs text-stone-600 mt-2 space-y-1 font-sans">
                          <p><strong className="text-stone-700">Hora:</strong> {data.ceremony.timeDisplay}</p>
                          <p><strong className="text-stone-700">Dirección:</strong> {data.ceremony.address}</p>
                        </div>
                      </div>
                    )}

                    {/* Recepción */}
                    {data.reception && (
                      <div className="p-5 rounded-xl border border-[#E8E2D9] bg-white shadow-2xs">
                        <div className="flex items-center gap-2 text-[#B08D57] font-semibold text-xs uppercase tracking-wider mb-2">
                          <Clock className="w-4 h-4 text-[#B08D57]" />
                          <span>{data.reception.title}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-stone-800">
                          {data.reception.placeName}
                        </h3>
                        <div className="text-xs text-stone-600 mt-2 space-y-1 font-sans">
                          <p><strong className="text-stone-700">Hora de inicio:</strong> {data.reception.timeDisplay}</p>
                          <p><strong className="text-stone-700">Lugar:</strong> {data.reception.addressLine1}</p>
                          {data.reception.addressLine2 && <p className="text-stone-500">{data.reception.addressLine2}</p>}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline Summary */}
                  {data.timeline && data.timeline.length > 0 && (
                    <div className="my-8 text-left border-t border-[#E8E2D9] pt-6">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57] font-semibold mb-4 text-center">
                        Itinerario del Día
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                        {data.timeline.map((item) => (
                          <div key={item.time + item.title} className="p-2.5 rounded-lg bg-[#F5F2EA] border border-[#E8E2D9] flex items-start gap-2">
                            <span className="font-bold text-[#B08D57] shrink-0">{item.time}</span>
                            <div>
                              <p className="font-semibold text-stone-800">{item.title}</p>
                              {item.description && (
                                <p className="text-[11px] text-stone-500 leading-tight">{item.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mesa de Regalos Summary */}
                  {data.giftRegistry && (
                    <div className="my-8 p-5 rounded-xl border border-[#B08D57]/30 bg-[#F5F2EA]/60 text-center">
                      <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08D57] mb-2">
                        <Gift className="w-4 h-4" />
                        <span>{data.giftRegistry.title || "Mesa de Regalos"}</span>
                      </div>
                      <p className="text-xs text-stone-700 font-sans mb-3">
                        {data.giftRegistry.subtitle}
                      </p>
                      {data.giftRegistry.bankInfo && (
                        <div className="text-xs font-mono bg-white p-3 rounded-lg border border-[#E8E2D9] inline-block text-stone-800 text-left space-y-0.5">
                          <p><strong className="text-stone-700">Banco:</strong> {data.giftRegistry.bankInfo.bankName}</p>
                          <p><strong className="text-stone-700">Titular:</strong> {data.giftRegistry.bankInfo.holderName}</p>
                          <p><strong className="text-stone-700">CLABE:</strong> {data.giftRegistry.bankInfo.clabe}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* RSVP Details */}
                  {data.rsvp && (
                    <div className="my-6 text-center pt-4 border-t border-[#E8E2D9]">
                      <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 font-sans font-medium mb-1">
                        <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                        <span>Confirmación de Asistencia (RSVP):</span>
                      </div>
                      <p className="text-xs text-stone-800 font-mono">
                        WhatsApp: {data.rsvp.whatsappNumber}
                      </p>
                    </div>
                  )}

                  <FloralDivider variant="simple" className="my-4" />

                  {/* Closing Message */}
                  {data.general?.closingMessage && (
                    <p className="text-xs text-stone-600 italic font-serif my-4 whitespace-pre-line">
                      {data.general.closingMessage}
                    </p>
                  )}

                  <div className="mt-6 pt-4 text-[10px] uppercase tracking-widest text-stone-400 font-sans">
                    {data.general?.brideName} &amp; {data.general?.groomName} &bull; {data.general?.dateDisplay}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#E8E2D9] bg-white/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-stone-500 text-center sm:text-left">
            💡 Puedes descargar el PDF para guardarlo o imprimirlo en papel para tus invitados.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition text-xs font-medium"
            >
              Cerrar
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#B08D57] text-white hover:bg-[#9A7232] transition text-xs font-medium flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Procesando PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>¡PDF Guardado!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Invitación PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
