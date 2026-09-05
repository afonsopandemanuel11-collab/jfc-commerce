'use client';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onScanClick?: () => void;
}

export default function SearchBar({ value, onChange, onScanClick }: SearchBarProps) {
  return (
    <section className="w-full mt-2 mb-4">
      <div className="flex items-center gap-space-xs">
        <div className="relative flex-1 flex items-center bg-surface-container-lowest rounded-full shadow-[0_4px_20px_-2px_rgba(107,70,193,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] px-space-md h-12">
          <span className="material-symbols-outlined text-secondary text-[22px] mr-2 shrink-0" aria-hidden="true">
            search
          </span>
          <input
            className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline/70"
            placeholder="Pesquisar produto ou código..."
            type="text"
            aria-label="Pesquisar produto ou código"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {value.length > 0 && (
            <button
              aria-label="Limpar busca"
              className="text-outline hover:text-on-surface p-1"
              type="button"
              onClick={() => onChange('')}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
        <button
          aria-label="Escanear código de barras"
          className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-[0_4px_20px_-2px_rgba(107,70,193,0.08)] active:scale-95 transition-all hover:bg-secondary-container/50 shrink-0"
          type="button"
          onClick={onScanClick}
        >
          <span className="material-symbols-outlined text-[24px]">barcode_scanner</span>
        </button>
      </div>
    </section>
  );
}