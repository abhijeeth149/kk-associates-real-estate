import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [hasDismissedPrompt, setHasDismissedPrompt] = useState(false);

  const defaultMsg = getGeneralWhatsAppMessage();
  const whatsappUrl = buildWhatsAppUrl(defaultMsg);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Animated Popover message */}
      {!hasDismissedPrompt && (
        <div className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-white rounded-2xl p-3.5 shadow-2xl border border-emerald-100 text-xs text-[#172522] animate-bounce-subtle relative transition-all">
          <button
            onClick={() => setHasDismissedPrompt(true)}
            aria-label="Close notification"
            className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-1 shadow-sm transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#075E54] flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
              KK
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs">KK Associates Support</p>
              <p className="text-gray-600 text-[11px] mt-0.5 leading-relaxed">
                Looking for verified plots or flats in Hyderabad? Let's connect on WhatsApp!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#075E54] hover:text-[#0D8B78] hover:underline"
              >
                <span>Start WhatsApp Chat</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KK Associates on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#075E54] text-white shadow-xl hover:bg-[#043E37] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#0D8B78]/40"
      >
        {/* Pulse effect ring */}
        <span className="absolute -inset-1 rounded-full bg-[#0D8B78] opacity-75 animate-ping group-hover:opacity-100" />

        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        </div>

        {/* Online green indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
