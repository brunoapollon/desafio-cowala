import ICreateConversionDTO from '@dtos/ICreateConversionDTO';
import { Conversion } from '@entities/Conversion';
import IConversionRepository from '@repositories/IConversionRepository';

class FakeConversionRepository implements IConversionRepository {
  private conversions: Conversion[];

  constructor() {
    this.conversions = [];
  }
  create({
    id,
    moedaDaConversao,
    moedaOriginal,
    valorConvertido,
    valorEnviado,
  }: ICreateConversionDTO): Conversion {
    const conversionCreated = new Conversion(
      id,
      moedaOriginal,
      moedaDaConversao,
      valorEnviado,
      valorConvertido,
    );

    this.conversions.push(conversionCreated);

    return conversionCreated;
  }

  public findById(id: number): Conversion | undefined {
    const findConversionById = this.conversions.find(
      conversion => conversion.id === id,
    );

    return findConversionById;
  }
}

export { FakeConversionRepository };
