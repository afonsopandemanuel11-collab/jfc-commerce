import { StockStatus } from './types';

export function getStockStatus(stock: number): StockStatus {
  if (stock <= 2) return 'critico';
  if (stock <= 4) return 'baixo';
  return 'disponivel';
}

export function getStockLabel(stock: number): string {
  const status = getStockStatus(stock);
  if (status === 'critico') return `${stock} disp. (Crítico)`;
  if (status === 'baixo') return `${stock} disp. (Baixo)`;
  return `${stock} disp.`;
}