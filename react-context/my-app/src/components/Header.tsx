import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export function Header() {
  const { cart } = useContext(CartContext);
  let quantity = 0;
  cart.forEach((cp) => (quantity += cp.quantity));
  return (
    <div>
      <nav className="flex px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
        <div className="flex-grow items-center">
          <ul>
            <li className="relative py-2 px-4">
              <Link to="cart">
                <FaShoppingCart color="white" size="20" className="inline" />
              </Link>
              {quantity !== 0 && (
                <span className="absolute top-1 left-8 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {quantity}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
