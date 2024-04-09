import { toDollars } from './library';
import { type Product } from './Catalog';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useEffect, useState } from 'react';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState<unknown>();
  const [loading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function readProduct(productId: number) {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`fetch error, status ${response.status}`);
        }
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    readProduct(Number(productId));
  }, [productId]);

  if (loading) return <div>hold your horses pal we're loading...</div>;
  if (error || !product) {
    return (
      <div>
        error loading {productId}:{''}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  function handleCart() {
    alert(`added ${product?.name} to cart.`);
    navigate('/');
  }

  const { imageUrl, name, shortDescription, longDescription, price } = product;
  return (
    <div className="container">
      <div className="wrapper details-wrapper">
        <div className="row">
          <div className="column-full">
            <Link to="/"> &lt; Back to catalog</Link>
          </div>
        </div>
        <div className="row">
          <div className="column-half">
            <img className="details-image" src={imageUrl} alt={name} />
          </div>
          <div className="column-half">
            <h1>{name}</h1>
            <h3>{toDollars(price)}</h3>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <p>{longDescription}</p>
          </div>
        </div>
      </div>
      <button onClick={handleCart} className="cart-button">
        Add to cart
      </button>
    </div>
  );
}
