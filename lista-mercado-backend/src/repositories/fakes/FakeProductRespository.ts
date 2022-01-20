import ICreateProductDTO from '@dtos/ICreateProductDTO';
import { Product } from '@entities/Product';
import IProductRepository from '@repositories/IProductRespository';

class FakeProductRespository implements IProductRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({ id, item, preco }: ICreateProductDTO): Product {
    const productCreated = new Product(id, item, preco);

    this.products.push(productCreated);

    return productCreated;
  }

  public findById(id: number): Product | undefined {
    const findProductById = this.products.find(product => product.id === id);

    return findProductById;
  }

  public listAllProducts(): Product[] {
    return this.products;
  }
}

export { FakeProductRespository };
