"use client";

import { useMemo, useState } from "react";
import type { CheckoutItem, Customer, PaymentMethod } from "../types";

export function useCheckout(items: CheckoutItem[]) {
  const [customer, setCustomer] = useState<Customer>({ name: "", email: "" });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [cashReceived, setCashReceived] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const change = Math.max(0, cashReceived - total);
  const canConfirm = customer.name.trim().length > 0 && customer.email.trim().length > 0;

  function confirmOrder() {
    if (canConfirm) setIsConfirmed(true);
  }

  return {
    customer,
    setCustomer,
    paymentMethod,
    setPaymentMethod,
    cashReceived,
    setCashReceived,
    total,
    change,
    canConfirm,
    isConfirmed,
    confirmOrder,
    dismissSuccess: () => setIsConfirmed(false),
  };
}
