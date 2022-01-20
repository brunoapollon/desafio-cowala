import { Request, Response } from 'express';

import { FakeProductRespository } from '@fakes/FakeProductRespository';
import { AppError } from '../errors/AppError';

const fakeProductRespository: FakeProductRespository =
  new FakeProductRespository();

class ProductCrontoller {
  public store(request: Request, response: Response): Response {
    const { id, item, preco } = request.body;

    if (!id || !item || !preco)
      throw new AppError('missing data for product', 400);

    const findProduct = fakeProductRespository.findById(id);

    if (findProduct) throw new AppError('id already exists', 400);

    const productCreated = fakeProductRespository.create({
      id,
      item,
      preco,
    });

    return response.status(201).json(productCreated);
  }

  public index(request: Request, response: Response): Response {
    const products = fakeProductRespository.listAllProducts();

    return response.status(200).json(products);
  }

  public show(request: Request, response: Response): Response {
    const { product_id } = request.params;

    const productFinded = fakeProductRespository.findById(parseInt(product_id));

    if (!productFinded) throw new AppError('Product not found', 404);

    return response.status(200).json(productFinded);
  }

  public delete(request: Request, response: Response): Response {
    const { product_id } = request.params;

    const productFinded = fakeProductRespository.findById(parseInt(product_id));

    if (!productFinded) throw new AppError('Product not found', 404);

    fakeProductRespository.deleteProject(parseInt(product_id));

    return response
      .status(202)
      .json({ message: 'Product deleted successfully' });
  }

  public update(request: Request, response: Response): Response {
    const { product_id } = request.params;
    const { item, preco } = request.body;

    const productFinded = fakeProductRespository.findById(parseInt(product_id));

    if (!productFinded) throw new AppError('Product not found', 404);

    const productUpdated = fakeProductRespository.updateProject(
      parseInt(product_id),
      item,
      preco,
    );

    return response.status(201).json(productUpdated);
  }
}

export { ProductCrontoller };
