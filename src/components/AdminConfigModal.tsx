import React, { useState } from 'react';
import { X, Save, Copy, Check, RefreshCw, Settings, Download, Eye } from 'lucide-react';
import { WeddingData } from '../data/weddingData';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WeddingData;
  onUpdateData: (newData: WeddingData) => void;
  onResetData: () => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
  onResetData,
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'ceremony' | 'reception' | 'rsvp' | 'export'>('general');
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<WeddingData>(data);

  if (!isOpen) return null;

  const handleChangeGeneral = (field: keyof WeddingData['general'], value: string) => {
    const updated = {
      ...formState,
      general: {
        ...formState.general,
        [field]: value,
      },
    };
    setFormState(updated);
    onUpdateData(updated);
  };

  const handleChangeCeremony = (field: keyof WeddingData['ceremony'], value: string) => {
    const updated = {
      ...formState,
      ceremony: {
        ...formState.ceremony,
        [field]: value,
      },
    };
    setFormState(updated);
    onUpdateData(updated);
  };

  const handleChangeReception = (field: keyof WeddingData['reception'], value: string) => {
    const updated = {
      ...formState,
      reception: {
        ...formState.reception,
        [field]: value,
      },
    };
    setFormState(updated);
    onUpdateData(updated);
  };

  const handleChangeRSVP = (field: keyof WeddingData['rsvp'], value: string) => {
    const updated = {
      ...formState,
      rsvp: {
        ...formState.rsvp,
        [field]: value,
      },
    };
    setFormState(updated);
    onUpdateData(updated);
  };

  const handleCopyTS = () => {
    const fileContent = `import { WeddingData } from './weddingData';\n\nexport const initialWeddingData: WeddingData = ${JSON.stringify(
      formState,
      null,
      2
    )};\n`;
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-stone-900 text-stone-100 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#C5A059]/40 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2 text-[#DFCA92]">
            <Settings className="w-5 h-5" />
            <h3 className="font-serif text-xl font-bold">Panel de Configuración de la Invitación</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-stone-800 bg-stone-900 overflow-x-auto">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === 'general' ? 'bg-[#C5A059] text-stone-900' : 'text-stone-400 hover:bg-stone-800'
            }`}
          >
            Novios y Fecha
          </button>
          <button
            onClick={() => setActiveTab('ceremony')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === 'ceremony' ? 'bg-[#C5A059] text-stone-900' : 'text-stone-400 hover:bg-stone-800'
            }`}
          >
            Ceremonia
          </button>
          <button
            onClick={() => setActiveTab('reception')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === 'reception' ? 'bg-[#C5A059] text-stone-900' : 'text-stone-400 hover:bg-stone-800'
            }`}
          >
            Recepción
          </button>
          <button
            onClick={() => setActiveTab('rsvp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === 'rsvp' ? 'bg-[#C5A059] text-stone-900' : 'text-stone-400 hover:bg-stone-800'
            }`}
          >
            WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === 'export' ? 'bg-[#C5A059] text-stone-900' : 'text-stone-400 hover:bg-stone-800'
            }`}
          >
            Exportar Configuración
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Nombre de la Novia</label>
                <input
                  type="text"
                  value={formState.general.brideName}
                  onChange={(e) => handleChangeGeneral('brideName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Nombre del Novio</label>
                <input
                  type="text"
                  value={formState.general.groomName}
                  onChange={(e) => handleChangeGeneral('groomName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Fecha Formateada (Texto)</label>
                <input
                  type="text"
                  value={formState.general.dateDisplay}
                  onChange={(e) => handleChangeGeneral('dateDisplay', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Fecha ISO (para el Contador)</label>
                <input
                  type="text"
                  value={formState.general.dateISO}
                  onChange={(e) => handleChangeGeneral('dateISO', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Imagen de Portada (URL)</label>
                <input
                  type="text"
                  value={formState.general.heroImage}
                  onChange={(e) => handleChangeGeneral('heroImage', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white font-mono text-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'ceremony' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Nombre de la Iglesia/Parroquia</label>
                <input
                  type="text"
                  value={formState.ceremony.placeName}
                  onChange={(e) => handleChangeCeremony('placeName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Hora de Misa</label>
                <input
                  type="text"
                  value={formState.ceremony.timeDisplay}
                  onChange={(e) => handleChangeCeremony('timeDisplay', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Enlace de Google Maps</label>
                <input
                  type="text"
                  value={formState.ceremony.mapUrl}
                  onChange={(e) => handleChangeCeremony('mapUrl', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white font-mono text-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'reception' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Lugar de Recepción</label>
                <input
                  type="text"
                  value={formState.reception.placeName}
                  onChange={(e) => handleChangeReception('placeName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Dirección Línea 1</label>
                <input
                  type="text"
                  value={formState.reception.addressLine1}
                  onChange={(e) => handleChangeReception('addressLine1', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Hora de Recepción</label>
                <input
                  type="text"
                  value={formState.reception.timeDisplay}
                  onChange={(e) => handleChangeReception('timeDisplay', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Enlace Google Maps Recepción</label>
                <input
                  type="text"
                  value={formState.reception.mapUrl}
                  onChange={(e) => handleChangeReception('mapUrl', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white font-mono text-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'rsvp' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">Número de WhatsApp Destino (sin + ni espacios)</label>
                <input
                  type="text"
                  value={formState.rsvp.whatsappNumber}
                  onChange={(e) => handleChangeRSVP('whatsappNumber', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-300 mb-1">Nombre para Saludo de WhatsApp</label>
                <input
                  type="text"
                  value={formState.rsvp.recipientName}
                  onChange={(e) => handleChangeRSVP('recipientName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white"
                />
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-stone-300 text-xs leading-relaxed">
                Puedes copiar la configuración actual para reutilizar esta misma invitación con nuevos clientes guardándolo en <code className="text-[#DFCA92]">src/data/weddingData.ts</code>.
              </p>

              <div className="relative">
                <textarea
                  readOnly
                  rows={10}
                  value={JSON.stringify(formState, null, 2)}
                  className="w-full p-4 rounded-xl bg-stone-950 font-mono text-xs text-amber-200 border border-stone-800 focus:outline-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCopyTS}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C5A059] text-stone-900 font-bold text-xs uppercase tracking-wider hover:bg-[#DFCA92]"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Configuración'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div className="px-6 py-4 border-t border-stone-800 flex items-center justify-between bg-stone-950">
          <button
            onClick={onResetData}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-rose-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restablecer Valores Iniciales</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs uppercase tracking-wider font-semibold"
          >
            Guardar &amp; Vista Previa
          </button>
        </div>
      </div>
    </div>
  );
};
