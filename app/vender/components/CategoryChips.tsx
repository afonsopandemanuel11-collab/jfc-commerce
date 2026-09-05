'use client';

import { CATEGORIES } from '@/lib/vender/categories';

interface CategoryChipsProps {
  active: string;
  onSelect: (slug: string) => void;
}

export default function CategoryChips({ active, onSelect }: CategoryChipsProps) {
  return (
    <section className="w-full mb-5 -mx-space-lg px-space-lg overflow-x-auto no-scrollbar py-1">
      <div className="flex items-center gap-2 min-w-max" role="tablist" aria-label="Categorias de produto">
        {CATEGORIES.map((category) => {
          const isActive = category.slug === active;
          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(category.slug)}
              className={
                isActive
                  ? 'flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_6px_16px_-2px_rgba(124,58,237,0.35)] transition-all active:scale-95'
                  : 'flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-secondary font-label-lg text-label-lg shadow-sm hover:text-on-surface transition-all active:scale-95'
              }
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}