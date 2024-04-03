import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Am I doing this correctly?');
});

app.get('/notes', (req, res) => {
  res.send('testing...testing...1,2,3');
});

app.post('notes/123', (req, res) => {
  res.send('I am not sure if this is right.');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
