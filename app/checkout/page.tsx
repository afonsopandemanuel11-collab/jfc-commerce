import { getCheckoutItems } from "@/lib/checkout/queries";
import { CheckoutClient } from "./components/CheckoutClient";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { OrderSummary } from "./components/OrderSummary";

export default function CheckoutPage() {
  const items = getCheckoutItems();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <CheckoutHeader />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          <CheckoutClient items={items} />
          <OrderSummary items={items} total={items.reduce((sum, item) => sum + item.price * item.quantity, 0)} />
        </div>
      </div>
    </main>
  );
}
