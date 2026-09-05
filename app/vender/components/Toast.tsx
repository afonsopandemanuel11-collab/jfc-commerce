type ToastProps = {
  message: string;
  onDismiss: () => void;
};

export function Toast({ message, onDismiss }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 z-10 flex items-center gap-4 rounded-xl bg-slate-950 px-4 py-3 text-sm text-white shadow-lg" role="status">
      <span>{message}</span>
      <button type="button" onClick={onDismiss} className="text-slate-300 hover:text-white">Fechar</button>
    </div>
  );
}
