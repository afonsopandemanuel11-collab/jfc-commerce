'use client';

import { formatKz } from '@/lib/vender/format';

interface CartSheetProps {
  itemsCount: number;
  subtotal: number;
  discount: number;
  total: number;
  onCheckout: () => void;
}

export default function CartSheet({ itemsCount, subtotal, discount, total, onCheckout }: CartSheetProps) {
  if (itemsCount === 0) return null;

  return (
    <aside className="fixed bottom-[84px] inset-x-space-lg max-w-lg mx-auto z-40">
      <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_12px_36px_-6px_rgba(107,70,193,0.22),0_4px_16px_rgba(0,0,0,0.06)] flex flex-col gap-2.5 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[15px] text-primary" aria-hidden="true">shopping_basket</span>
              <span>{itemsCount === 1 ? '1 item' : `${itemsCount} itens`}</span>
            </span>
            <span className="font-body-sm text-body-sm text-secondary">
              Subtotal: <span className="font-semibold text-on-surface">{formatKz(subtotal)}</span>
            </span>
          </div>
          {discount > 0 && (
            <div className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">sell</span>
              <span>Desc: -{formatKz(discount)}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-3 pt-0.5">
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] uppercase text-secondary font-bold tracking-wider">Total a Receber</span>
            <span className="font-metric-display text-metric-display text-on-surface font-extrabold tracking-tight">
              {formatKz(total)}
            </span>
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="flex-1 max-w-[210px] h-[52px] rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_10px_24px_-4px_rgba(124,58,237,0.4)] active:scale-95 transition-all hover:brightness-105"
          >
            <span>COBRAR</span>
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </aside>
  );
}