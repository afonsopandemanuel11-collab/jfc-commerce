"use client";

type CashCalculatorProps = {
  total: number;
  received: number;
  onReceivedChange: (value: number) => void;
  change: number;
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CashCalculator({ total, received, onReceivedChange, change }: CashCalculatorProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Valor recebido
        <input className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-slate-950" type="number" min={total} step="0.01" value={received || ""} onChange={(event) => onReceivedChange(Number(event.target.value))} />
      </label>
      <p className="mt-3 text-sm text-slate-600">Troco: <strong className="text-slate-950">{formatCurrency(change)}</strong></p>
    </div>
  );
}