"use client";

import type { Customer } from "../types";

type CustomerSectionProps = {
  customer: Customer;
  onChange: (customer: Customer) => void;
};

export function CustomerSection({ customer, onChange }: CustomerSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" aria-labelledby="customer-title">
      <h2 id="customer-title" className="text-lg font-semibold text-slate-950">Seus dados</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Nome
          <input className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-slate-950" value={customer.name} onChange={(event) => onChange({ ...customer, name: event.target.value })} required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          E-mail
          <input className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-slate-950" type="email" value={customer.email} onChange={(event) => onChange({ ...customer, email: event.target.value })} required />
        </label>
      </div>
    </section>
  );
}