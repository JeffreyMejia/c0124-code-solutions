import { createContext } from 'react';
import { Product } from '../lib';

export type CartProduct = {
  item: Product;
  quantity: number;
};

export type Cart = {
  cart: CartProduct[];
  addToCart: (Product: Product) => void;
};

export const CartContext = createContext<Cart>({
  cart: [],
  addToCart: () => undefined,
});
