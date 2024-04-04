import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',

  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
     select "title", "filmId",
     from "films"
     order by "replacementCost" desc
    `;
    const results = await db.query(sql);
    const films = results.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required!');
    }
    const sql = `
      select "title", "description", "releaseYear","rentalRate", "replacementCost"
      from "films"
      where "filmId" = $1
    `;
    const params = [filmId as string];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  const { filmId } = req.query;
  const { title } = req.query;
  if (filmId || title === undefined) {
    throw new ClientError(400, 'this field is required');
  }
  try {
    const sql = `
    update "films"
    set "title" = $1
    where "filmId" = $2
    returning *
    `;
    const params = [title as string, filmId as string];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    } else {
      res.json('Success!');
      res.send(film);
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
