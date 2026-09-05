import type { Product } from "@/lib/vender/types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export function ProductGrid({ products, onAdd }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
    </div>
  );
}
