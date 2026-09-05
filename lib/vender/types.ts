export type StockStatus = 'disponivel' | 'baixo' | 'critico';

export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  variantLabel: string; // ex: "Têxtil • Azul Marinho"
  price: number; // Kz, inteiro
  stock: number;
  imageUrl: string;
  imageAlt: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}