import ICreateProductDTO from '@dtos/ICreateProductDTO';
import { Product } from '@entities/Product';

export default interface IProductRepository {
  create(data: ICreateProductDTO): Product;
  findById(id: number): Product | undefined;
  listAllProducts(): Product[];
  deleteProject(id: number): void;
}
