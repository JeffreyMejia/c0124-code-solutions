import { Link } from 'react-router-dom';
import { toDollars } from './library';
import { useEffect, useState } from 'react';
import './Catalog.css';

export type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function readCatalog() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`fetch error, status ${response.status}`);
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    readCatalog();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div>
      <div className="row header-row">
        <div className="column-full">
          <h1>Catalog</h1>
        </div>
        <div className="row catalog-row">
          {products.map((product) => (
            <div className="column-third" key={product.productId}>
              <div className="wrapper catalog-wrapper">
                <ProductCard Product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type Props = {
  Product: Product;
};

function ProductCard({ Product }: Props) {
  return (
    <Link to={`details/${Product.productId}`}>
      <img
        className="catalog-image"
        src={Product.imageUrl}
        alt={Product.name}
      />
      <h6>{Product.name}</h6>
      <h5>{toDollars(Product.price)}</h5>
      <p>{Product.shortDescription}</p>
    </Link>
  );
}
