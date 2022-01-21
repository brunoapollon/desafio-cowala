import { conversionRouter } from '@routes/conversion.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/conversions', conversionRouter);

export { routes };
