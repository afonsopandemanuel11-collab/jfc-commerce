import type { CheckoutItem } from "../types";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

type OrderSummaryProps = {
  items: CheckoutItem[];
  total: number;
};

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" aria-labelledby="order-summary-title">
      <h2 id="order-summary-title" className="text-lg font-semibold text-slate-950">Resumo do pedido</h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between gap-4 text-sm">
            <span className="text-slate-600">{item.quantity}x {item.name}</span>
            <span className="font-medium text-slate-900">{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-base font-semibold text-slate-950">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </section>
  );
}