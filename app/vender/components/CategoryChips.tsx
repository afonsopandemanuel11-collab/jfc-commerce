type CategoryChipsProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export function CategoryChips({ categories, selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Categorias">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${selected === category ? "bg-slate-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"}`}
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
