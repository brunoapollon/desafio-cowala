import { Request, Response } from 'express';

import { FakeProductRespository } from '@fakes/FakeProductRespository';

const fakeProductRespository: FakeProductRespository =
  new FakeProductRespository();

class ProductCrontoller {
  public store(request: Request, response: Response): Response {
    const { id, item, preco } = request.body;

    if (!id || !item || !preco) throw new Error('missing data for product');

    const findProduct = fakeProductRespository.findById(id);

    if (findProduct) throw new Error('id already exists');

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

    if (!productFinded) throw new Error('Product not found');

    return response.status(200).json(productFinded);
  }

  public delete(request: Request, response: Response): Response {
    const { product_id } = request.params;

    const productFinded = fakeProductRespository.findById(parseInt(product_id));

    if (!productFinded) throw new Error('Product not found');

    fakeProductRespository.deleteProject(parseInt(product_id));

    return response
      .status(202)
      .json({ message: 'Product deleted successfully' });
  }
}

export { ProductCrontoller };
