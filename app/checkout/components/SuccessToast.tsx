"use client";

type SuccessToastProps = {
  onDismiss: () => void;
};

export function SuccessToast({ onDismiss }: SuccessToastProps) {
  return (
    <div role="status" className="fixed bottom-6 right-6 flex items-center gap-4 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-medium text-white shadow-lg">
      Pedido confirmado com sucesso.
      <button type="button" className="underline underline-offset-2" onClick={onDismiss}>Fechar</button>
    </div>
  );
}