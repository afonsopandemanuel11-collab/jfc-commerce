import { createClient } from '@/lib/supabase/server'; // ASSUMIDO: helper de cliente Supabase (server) já existe no projecto
import { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('products')
    .select('id, name, category_slug, variant_label, price, stock, image_url, image_alt')
    .order('name', { ascending: true });

  if (error) {
    console.error('[vender/getProducts] erro ao buscar produtos:', error.message);
    return [];
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    name: row.name,
    categorySlug: row.category_slug,
    variantLabel: row.variant_label,
    price: row.price,
    stock: row.stock,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
  }));
}