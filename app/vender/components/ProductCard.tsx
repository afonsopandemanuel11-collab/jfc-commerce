'use client';

import Image from 'next/image';
import { Product } from '@/lib/vender/types';
import { formatKz } from '@/lib/vender/format';
import { getStockStatus, getStockLabel } from '@/lib/vender/stock';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  justAdded: boolean;
}

const STOCK_BADGE_CLASSES: Record<string, string> = {
  disponivel: 'bg-emerald-50 text-emerald-700',
  baixo: 'bg-amber-50 text-amber-700',
  critico: 'bg-rose-50 text-rose-700',
};

const STOCK_DOT_CLASSES: Record<string, string> = {
  disponivel: 'bg-emerald-500',
  baixo: 'bg-amber-500 animate-pulse',
  critico: 'bg-rose-500 animate-ping',
};

export default function ProductCard({ product, onAdd, justAdded }: ProductCardProps) {
  const status = getStockStatus(product.stock);

  return (
    <div className="group relative flex flex-col bg-surface-container-lowest rounded-2xl p-2.5 shadow-[0_4px_20px_-2px_rgba(107,70,193,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-all">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 480px) 45vw, 200px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm ${STOCK_BADGE_CLASSES[status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${STOCK_DOT_CLASSES[status]}`} aria-hidden="true" />
          {getStockLabel(product.stock)}
        </span>
      </div>
      <div className="flex flex-col flex-1 justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <h3 className="font-title-sm text-title-sm text-on-surface truncate leading-tight">{product.name}</h3>
          <span className="font-body-sm text-body-sm text-secondary truncate">{product.variantLabel}</span>
        </div>
        <div className="flex items-center justify-between gap-1 mt-1">
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] text-secondary tracking-tight">PREÇO</span>
            <span className="font-title-sm text-title-sm text-primary font-bold">{formatKz(product.price)}</span>
          </div>
          <button
            aria-label={`Adicionar ${product.name} ao carrinho`}
            type="button"
            onClick={() => onAdd(product)}
            disabled={product.stock === 0}
            className={`w-9 h-9 rounded-full text-on-primary flex items-center justify-center shadow-[0_4px_12px_rgba(99,14,212,0.3)] active:scale-90 transition-all shrink-0 disabled:opacity-40 disabled:pointer-events-none ${
              justAdded ? 'scale-125 bg-tertiary-container' : 'bg-primary hover:bg-primary-container'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}