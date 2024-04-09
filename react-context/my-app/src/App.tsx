import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { CartContext, CartProduct } from './components/CartContext';
import { Product } from './lib';
import { Cart } from './pages/Cart';

export function App() {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function add(item: Product): void {
    const exists = cart.find(
      (product) => product.item?.productId === item.productId
    );
    if (!exists) {
      const cartItem = { item, quantity: 1 };
      setCart([...cart, cartItem]);
    } else {
      exists.quantity++;
      const newArr = cart.map((product) =>
        product.item.productId === item.productId ? exists : product
      );
      setCart(newArr);
    }
  }

  return (
    <CartContext.Provider value={{ cart: cart, addToCart: add }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cart" element={<Cart cart={cart} />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
