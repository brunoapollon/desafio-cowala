import { Router } from 'express';

import { ProductCrontoller } from '@controllers/ProductController';

const productRouter = Router();

const productController = new ProductCrontoller();

productRouter.post('/create', productController.store);

productRouter.get('/list_products', productController.index);

export { productRouter };
