import express from 'express';
import cors from 'cors';
import { handleErrors } from '@middlewares/handleErrors';
import { routes } from './index.routes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
