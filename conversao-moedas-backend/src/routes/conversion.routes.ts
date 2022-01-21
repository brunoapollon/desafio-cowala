import { ConversionController } from '@controllers/ConversionController';
import { Router } from 'express';

const conversionRouter = Router();

const conversionController = new ConversionController();

conversionRouter.post('/create/:moedas', conversionController.create);

export { conversionRouter };
