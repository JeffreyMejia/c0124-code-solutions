import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';
import { ClientError } from '../express-error-handling/lib/client-error.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select "filmId", "title", "replacementCost"
    from "films"
    order by "replacementCost" desc
    limit 2
    `;
    const results = await db.query(sql);
    const films = results.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required!');
    }
    const sql = `
    select "filmId", "title", "replacementCost"
    from "films"
    where "filmId" = $1
    `;
    const params = [filmId];
    const results = await db.query(sql, params);
    const [film] = results.rows;
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
