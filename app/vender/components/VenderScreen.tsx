'use client';

import { useMemo, useState } from 'react';
import { Product, CartItem } from '@/lib/vender/types';
import { formatKz } from '@/lib/vender/format';
import SearchBar from './SearchBar';
import CategoryChips from './CategoryChips';
import ProductGrid from './ProductGrid';
import CartSheet from './CartSheet';
import Toast from './Toast';

// TEMPORÁRIO — SUBSTITUIR POR REGRA DE DESCONTO REAL (ex: tabela `discount_rules` no Supabase)
const FLAT_DISCOUNT = 1000;

interface VenderScreenProps {
  initialProducts: Product[];
}

export default function VenderScreen({ initialProducts }: VenderScreenProps) {
  const [products] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'todos' || product.categorySlug === activeCategory;
      const matchesQuery = query.length === 0 || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [products, activeCategory, searchQuery]);

  const { itemsCount, subtotal } = useMemo(() => {
    const items = Object.values(cart);
    return {
      itemsCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    };
  }, [cart]);

  const discount = itemsCount > 0 ? FLAT_DISCOUNT : 0;
  const total = Math.max(0, subtotal - discount);

  function handleAddToCart(product: Product) {
    setCart((prev) => ({
      ...prev,
      [product.id]: {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: (prev[product.id]?.quantity ?? 0) + 1,
      },
    }));

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 200);
    setToastMessage(`+1 ${product.name} adicionado!`);
  }

  function handleCheckout() {
    // TEMPORÁRIO — SUBSTITUIR PELA NAVEGAÇÃO/INTEGRAÇÃO REAL DE PAGAMENTO
    setToastMessage(`Iniciando pagamento de ${formatKz(total)}...`);
  }

  return (
    <div className="flex flex-col w-full pb-32">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryChips active={activeCategory} onSelect={setActiveCategory} />

      <div className="flex items-center justify-between mb-3 px-0.5">
        <div className="flex items-center gap-2">
          <span className="font-title-sm text-title-sm text-on-surface">Catálogo de Venda</span>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
            {filteredProducts.length === 1 ? '1 item' : `${filteredProducts.length} itens`}
          </span>
        </div>
        <button className="flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline" type="button">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">tune</span>
          <span>Filtros</span>
        </button>
      </div>

      <ProductGrid products={filteredProducts} onAdd={handleAddToCart} justAddedId={justAddedId} />

      <CartSheet itemsCount={itemsCount} subtotal={subtotal} discount={discount} total={total} onCheckout={handleCheckout} />
      <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
    </div>
  );
}