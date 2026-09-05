export interface Category {
  slug: string;
  label: string;
  icon: string; // nome do ícone Material Symbols
}

export const CATEGORIES: Category[] = [
  { slug: 'todos', label: 'Todos', icon: 'auto_awesome' },
  { slug: 'roupas', label: 'Roupas', icon: 'checkroom' },
  { slug: 'calcados', label: 'Calçados', icon: 'steps' },
  { slug: 'bebidas', label: 'Bebidas', icon: 'local_cafe' },
  { slug: 'eletronicos', label: 'Eletrônicos', icon: 'devices' },
  { slug: 'acessorios', label: 'Acessórios', icon: 'watch' },
];