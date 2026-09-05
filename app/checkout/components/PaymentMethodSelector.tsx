"use client";

import type { PaymentMethod } from "../types";

type PaymentMethodSelectorProps = {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
};

const methods: Array<{ value: PaymentMethod; label: string }> = [
  { value: "pix", label: "Pix" },
  { value: "card", label: "Cartão" },
  { value: "cash", label: "Dinheiro" },
];

export function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <fieldset className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <legend className="text-lg font-semibold text-slate-950">Forma de pagamento</legend>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {methods.map((method) => (
          <label key={method.value} className={`cursor-pointer rounded-lg border p-3 text-sm font-medium ${value === method.value ? "border-slate-950 bg-slate-50 text-slate-950" : "border-slate-200 text-slate-600"}`}>
            <input className="sr-only" type="radio" name="payment-method" value={method.value} checked={value === method.value} onChange={() => onChange(method.value)} />
            {method.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}