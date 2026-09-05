'use client';

import { Product } from '@/lib/vender/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAdd: (product: Product) => void;
  justAddedId: string | null;
}

export default function ProductGrid({ products, onAdd, justAddedId }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-2">
        <span className="material-symbols-outlined text-[40px] text-outline" aria-hidden="true">search_off</span>
        <p className="font-body-md text-body-md text-secondary">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3.5 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} justAdded={justAddedId === product.id} />
      ))}
    </div>
  );
}