import type { Product } from "./types";

export function isProductAvailable(product: Product) {
  return product.stock > 0;
}

export function getAvailableQuantity(product: Product, quantity: number) {
  return Math.min(Math.max(quantity, 0), product.stock);
}
