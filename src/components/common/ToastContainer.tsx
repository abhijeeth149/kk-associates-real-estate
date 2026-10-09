import React from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { useModalContext } from '../../context/ModalContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useModalContext();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-white shadow-2xl border border-gray-100 animate-slideDown"
        >
          <div className="flex items-start gap-2.5">
            {toast.type === 'success' && (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            )}
            {toast.type === 'info' && (
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            )}
            {toast.type === 'error' && (
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-xs font-semibold text-gray-800 leading-snug">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss toast"
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
