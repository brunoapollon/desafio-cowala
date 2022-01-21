import ICreateConversionDTO from '@dtos/ICreateConversionDTO';
import { Conversion } from 'src/entities/Conversion';

export default interface IConversionRepository {
  create(data: ICreateConversionDTO): Conversion;
  findById(id: number): Conversion | undefined;
  listAllConversions(): Conversion[];
}
