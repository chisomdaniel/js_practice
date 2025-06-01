import express from 'express';
import router from './routes';

const app = express();
const port = 1245;

app.use('/', router);
app.listen(port, () => {
  console.log('App has started');
});

export default app;
