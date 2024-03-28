import { Link } from 'react-router-dom';
import { readCatalog, type Product } from './lib';
import { useEffect, useState } from 'react';
import { toDollars } from './lib';
import './Catalog.css';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        throw new Error('Yikes something went wrong');
      }
    }
    loadProducts();
  }, []);

  return (
    <div>
      <div className="row header-row">
        <div className="column-full">
          <h1>Catalog</h1>
        </div>
      </div>
      <div className="row catalog-row">
        {products.map((product) => (
          <div className="column-third">
            <div className="wrapper catalog-wrapper" key={product.productId}>
              <ProductCard Product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  Product: Product;
};
function ProductCard({ Product }: Props) {
  return (
    <Link to={`detail/${Product.productId}`}>
      <img className="catalog-image" src={Product.imageUrl} />
      <h5>{Product.name}</h5>
      <h6>{toDollars(Product.price)}</h6>
      <p>{Product.shortDescription}</p>
    </Link>
  );
}
