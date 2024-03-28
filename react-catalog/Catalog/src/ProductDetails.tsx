import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { type Product, readProduct } from './lib';
import { toDollars } from './lib';
import './ProductDetails.css';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (error) {
        setError(error);
      }
    }
    loadProduct(Number(productId));
  }, [productId]);

  function handleCart() {
    alert(`added ${product?.name} to cart`);
    navigate('/');
  }

  if (error || !product) {
    return (
      <div>
        error loading {productId}:{''}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  const { imageUrl, name, price, shortDescription, longDescription } = product;
  return (
    <div className="container">
      <div className="wrapper details-wrapper">
        <div className="row">
          <div className="column-full">
            <Link className="back" to="/">
              &lt; Back to Catalog
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="column-half">
            <img className="details-image" src={imageUrl} />
          </div>
          <div className="column-half">
            <h1 className="text">{name}</h1>
            <h3 className="text">{toDollars(price)}</h3>
            <p className="text description">{shortDescription}</p>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <p className="text description">{longDescription}</p>
          </div>
        </div>
      </div>
      <button className="cart-button" onClick={handleCart}>
        Add to cart
      </button>
    </div>
  );
}
