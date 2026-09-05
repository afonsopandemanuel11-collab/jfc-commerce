import { getProducts } from "@/lib/vender/queries";
import { VenderScreen } from "./components/VenderScreen";

export default function VenderPage() {
  return <VenderScreen products={getProducts()} />;
}
