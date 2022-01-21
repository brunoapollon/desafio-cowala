import { ConversionController } from '@controllers/ConversionController';
import { Router } from 'express';

const conversionRouter = Router();

const conversionController = new ConversionController();

conversionRouter.post('/create/:moedas', conversionController.create);

conversionRouter.get('/list_conversions', conversionController.index);

conversionRouter.get(
  '/show_conversion/:conversion_id',
  conversionController.show,
);

conversionRouter.delete(
  '/delete_conversion/:conversion_id',
  conversionController.delete,
);

export { conversionRouter };
