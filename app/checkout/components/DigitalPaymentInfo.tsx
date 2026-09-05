"use client";

import type { PaymentMethod } from "../types";

type DigitalPaymentInfoProps = {
  method: Exclude<PaymentMethod, "cash">;
};

export function DigitalPaymentInfo({ method }: DigitalPaymentInfoProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
      {method === "pix" ? "Após confirmar, o QR Code do Pix será exibido." : "Após confirmar, você será direcionado para o pagamento seguro."}
    </div>
  );
}