"use client";

import { CashCalculator } from "./CashCalculator";
import { ConfirmButton } from "./ConfirmButton";
import { CustomerSection } from "./CustomerSection";
import { DigitalPaymentInfo } from "./DigitalPaymentInfo";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { SuccessToast } from "./SuccessToast";
import { useCheckout } from "../hooks/useCheckout";
import type { CheckoutItem } from "../types";

type CheckoutClientProps = {
  items: CheckoutItem[];
};

export function CheckoutClient({ items }: CheckoutClientProps) {
  const checkout = useCheckout(items);

  return (
    <>
      <div className="space-y-6">
        <CustomerSection customer={checkout.customer} onChange={checkout.setCustomer} />
        <PaymentMethodSelector value={checkout.paymentMethod} onChange={checkout.setPaymentMethod} />
        {checkout.paymentMethod === "cash" ? (
          <CashCalculator total={checkout.total} received={checkout.cashReceived} onReceivedChange={checkout.setCashReceived} change={checkout.change} />
        ) : (
          <DigitalPaymentInfo method={checkout.paymentMethod} />
        )}
        <ConfirmButton disabled={!checkout.canConfirm} onClick={checkout.confirmOrder} />
      </div>
      {checkout.isConfirmed && <SuccessToast onDismiss={checkout.dismissSuccess} />}
    </>
  );
}
