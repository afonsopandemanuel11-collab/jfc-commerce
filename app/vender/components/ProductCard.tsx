import { formatCurrency } from "@/lib/vender/format";
import type { Product } from "@/lib/vender/types";

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const unavailable = product.stock === 0;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{product.category}</p>
          <h2 className="mt-2 font-semibold text-slate-950">{product.name}</h2>
        </div>
        <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-500">{product.stock} un.</span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-lg font-bold text-slate-950">{formatCurrency(product.price)}</span>
        <button
          type="button"
          disabled={unavailable}
          onClick={() => onAdd(product)}
          className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {unavailable ? "Sem estoque" : "Adicionar"}
        </button>
      </div>
    </article>
  );
}
