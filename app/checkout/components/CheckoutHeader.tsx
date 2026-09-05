type CheckoutHeaderProps = {
  title?: string;
};

export function CheckoutHeader({ title = "Finalizar pedido" }: CheckoutHeaderProps) {
  return (
    <header>
      <p className="text-sm font-medium text-slate-500">JFC Commerce</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
      <p className="mt-2 text-slate-600">Revise seus dados e escolha a forma de pagamento.</p>
    </header>
  );
}