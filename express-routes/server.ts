import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Am I doing this correctly?');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('testing...testing...1,2,3');
  next();
});

app.post('notes/123', (req, res, next) => {
  res.send('I am not sure if this is right.');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
