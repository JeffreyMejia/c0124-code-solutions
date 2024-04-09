import { CartProduct } from '../components/CartContext';
import { toDollars } from '../lib';
type Props = {
  cart: CartProduct[];
};
export function Cart({ cart }: Props) {
  return (
    <div>
      <ul>
        {cart.map((p) => (
          <div key={p.item.productId} className="w-full md:w-1/2 lg:w-1/3 px-4">
            <li>
              <img
                src={p.item.imageUrl}
                className="object-contain h-72 w-full"
              />
              <div className="flex-auto p-6">
                <h5 className="font-bold mb-3">{p.item.name}</h5>
                <p className="mb-0 text-gray-600">{toDollars(p.item.price)}</p>
                <p className="h-20 mb-0 overflow-hidden">
                  {p.item.shortDescription}
                </p>
                <p>{p.quantity}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
