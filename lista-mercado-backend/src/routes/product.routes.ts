import { Router } from 'express';

import { ProductCrontoller } from '@controllers/ProductController';

const productRouter = Router();

const productController = new ProductCrontoller();

productRouter.post('/create', productController.store);

productRouter.get('/list_products', productController.index);

productRouter.get('/show_product/:product_id', productController.show);

productRouter.delete('/delete_product/:product_id', productController.delete);

productRouter.put('/update_product/:product_id', productController.update);

export { productRouter };
