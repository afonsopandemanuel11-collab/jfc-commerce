import { formatCurrency } from "@/lib/vender/format";
import type { CartItem } from "@/lib/vender/types";

type CartSheetProps = {
  items: CartItem[];
  onChangeQuantity: (id: string, quantity: number) => void;
  onClose: () => void;
};

export function CartSheet({ items, onChangeQuantity, onClose }: CartSheetProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" aria-label="Carrinho">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">Carrinho</h2>
        <button type="button" onClick={onClose} className="text-sm text-slate-500 hover:text-slate-950">Fechar</button>
      </div>
      <div className="mt-5 space-y-4">
        {items.length === 0 ? <p className="text-sm text-slate-500">Seu carrinho esta vazio.</p> : items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
            <div><p className="font-medium text-slate-900">{item.name}</p><p className="text-slate-500">{formatCurrency(item.price)}</p></div>
            <input aria-label={`Quantidade de ${item.name}`} type="number" min="0" max={item.stock} value={item.quantity} onChange={(event) => onChangeQuantity(item.id, Number(event.target.value))} className="w-16 rounded-lg border border-slate-200 px-2 py-1 text-center" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 font-semibold"><span>Total</span><span>{formatCurrency(total)}</span></div>
    </aside>
  );
}
