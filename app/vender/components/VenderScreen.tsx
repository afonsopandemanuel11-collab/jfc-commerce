"use client";

import { useMemo, useState } from "react";
import { getProductCategories } from "@/lib/vender/categories";
import { getAvailableQuantity } from "@/lib/vender/stock";
import type { CartItem, Product } from "@/lib/vender/types";
import { CartSheet } from "./CartSheet";
import { CategoryChips } from "./CategoryChips";
import { ProductGrid } from "./ProductGrid";
import { SearchBar } from "./SearchBar";
import { Toast } from "./Toast";

type VenderScreenProps = { products: Product[] };

export function VenderScreen({ products }: VenderScreenProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const categories = getProductCategories(products);
  const filteredProducts = useMemo(() => products.filter((product) => (category === "Todos" || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase())), [category, products, search]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: getAvailableQuantity(product, item.quantity + 1) } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setToast(`${product.name} adicionado ao carrinho`);
  }

  function changeQuantity(id: string, quantity: number) {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.min(Math.max(quantity, 0), item.stock) } : item).filter((item) => item.quantity > 0));
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Ponto de venda</p><h1 className="mt-2 text-3xl font-bold">Vender</h1></div>
          <button type="button" onClick={() => setShowCart(true)} className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">Carrinho ({cartCount})</button>
        </header>
        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"><SearchBar value={search} onChange={setSearch} /><CategoryChips categories={categories} selected={category} onSelect={setCategory} /></div>
        <section className="mt-8"><ProductGrid products={filteredProducts} onAdd={addToCart} /></section>
        {showCart && <div className="fixed inset-y-0 right-0 z-20 w-full max-w-md overflow-y-auto bg-slate-50 p-6 shadow-2xl"><CartSheet items={cart} onChangeQuantity={changeQuantity} onClose={() => setShowCart(false)} /></div>}
      </div>
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </main>
  );
}
