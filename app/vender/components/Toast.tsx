'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export default function Toast({ message, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onDismiss, 2200);
    return () => clearTimeout(timer);
  }, [message, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-20 inset-x-space-lg mx-auto max-w-xs z-50 transform transition-all duration-300 flex items-center gap-2.5 px-4 py-3 bg-inverse-surface text-inverse-on-surface rounded-full shadow-xl ${
        message ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-tertiary-fixed text-[20px]" aria-hidden="true">check_circle</span>
      <span className="font-label-sm text-label-sm font-medium flex-1 truncate">{message}</span>
    </div>
  );
}