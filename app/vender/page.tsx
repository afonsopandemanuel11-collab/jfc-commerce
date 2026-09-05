import { mockProducts } from '@/lib/vender/__mocks__/products'; // TEMPORÁRIO
import VenderScreen from './components/VenderScreen';

export default async function VenderPage() {
  // TEMPORÁRIO — SUBSTITUIR PELA QUERY REAL assim que a tabela `products` estiver confirmada
  // import { getProducts } from '@/lib/vender/queries';
  // const products = await getProducts();
  const products = mockProducts;

  return (
    <main className="flex-1 flex flex-col relative w-full bg-surface px-space-lg">
      <VenderScreen initialProducts={products} />
    </main>
  );
}