import type { Product } from "./types";

export function getProductCategories(products: Product[]) {
  return ["Todos", ...new Set(products.map((product) => product.category))];
}
