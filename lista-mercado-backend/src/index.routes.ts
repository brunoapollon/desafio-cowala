import { productRouter } from '@routes/product.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/product', productRouter);

export { routes };
