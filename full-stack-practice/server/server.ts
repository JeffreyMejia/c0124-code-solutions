import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select "productId","name","price","imageUrl","shortDescription"
      from "products"
    `;
    const results = await db.query<Product>(sql);
    const products = results.rows;
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  const { productId } = req.params;
  if (!Number.isInteger(+productId)) {
    throw new ClientError(400, 'error product id must be an integer!');
  }
  try {
    const sql = `
    select * from "products"
    where "productId" = $1
    `;
    const params = [productId];
    const results = await db.query<Product>(sql, params);
    const [product] = results.rows;
    if (!product) {
      throw new ClientError(404, `error the id ${productId} was`);
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
