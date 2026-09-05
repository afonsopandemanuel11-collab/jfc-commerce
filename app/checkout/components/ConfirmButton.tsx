"use client";

type ConfirmButtonProps = {
  disabled?: boolean;
  onClick: () => void;
};

export function ConfirmButton({ disabled = false, onClick }: ConfirmButtonProps) {
  return <button type="button" className="w-full rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40" disabled={disabled} onClick={onClick}>Confirmar pedido</button>;
}