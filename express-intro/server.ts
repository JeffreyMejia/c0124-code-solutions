import express from 'express';
const app = express();
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
app.use((req, res, next) => {
  console.log('hello, world!');
  console.log('the date is,', new Date());
  next();
});
