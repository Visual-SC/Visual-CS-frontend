export interface ShoppingCartAsideProps {
  title: string;
  items: React.ReactNode;
}

export interface ShoppingCartItem {
  id: string;
  name: string;
  price: number;
}