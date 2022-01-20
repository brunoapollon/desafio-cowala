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

    return response.json(productCreated);
  }
}

export { ProductCrontoller };
