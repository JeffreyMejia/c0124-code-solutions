import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from "grades"
    `;
    const results = await db.query(sql);
    const grades = results.rows;
    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  if (!Number.isInteger(+gradeId)) {
    throw new ClientError(400, 'grade id must be an integer!');
  }
  try {
    const sql = `
    select * from "grades"
    where "gradeId" = $1
    `;
    const params = [gradeId];
    const results = await db.query(sql, params);
    const [grade] = results.rows;
    if (!grade) {
      throw new ClientError(404, `error the id ${gradeId} was not found!`);
    }
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades/:gradeId', async (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name) throw new ClientError(400, 'name is required!');
  if (!course) throw new ClientError(400, 'course is required!');
  if (!score) throw new ClientError(400, 'score is required!');
  if (!Number.isInteger(+score) && score > 100) {
    throw new ClientError(400, 'score must be an integer between 0-100');
  }
  try {
    const sql = `
   insert into "grades" ("name", "course", "score")
   values  ($1, $2, $3)
   returning *
   `;
    const params = [name, course, score];
    const results = await db.query(sql, params);
    const newGrade = results.rows[0];
    res.status(201).json(newGrade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  const { name, course, score } = req.body;
  if (!gradeId) throw new ClientError(400, 'gradeId is required!');
  if (!name) throw new ClientError(400, 'name is required!');
  if (!course) throw new ClientError(400, 'course is required!');
  if (!score) throw new ClientError(400, 'score is required!');
  if (!Number.isInteger(+score) && score > 100) {
    throw new ClientError(400, 'score must be an integer between 0-100');
  }
  try {
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const params = [name, course, score, gradeId];
    const results = await db.query(sql, params);
    const [updatedGrade] = results.rows;
    if (!updatedGrade) {
      throw new ClientError(404, `error the id ${gradeId} was not found!`);
    }
    res.status(200).json(updatedGrade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  if (!gradeId) {
    throw new ClientError(400, 'grade id is required!');
  }
  try {
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;
    const params = [gradeId];
    const results = await db.query(sql, params);
    const deletedGrade = results.rows[0];
    if (!deletedGrade) {
      throw new ClientError(404, `error the id ${gradeId} was not found!`);
    }
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
