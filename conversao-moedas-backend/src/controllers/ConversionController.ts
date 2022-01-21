import { FakeConversionRepository } from '@fakes/FakeConversionRepository';
import { Request, Response } from 'express';
import apiConversion from 'src/services/apiConversion';

const fakeConversionRepository = new FakeConversionRepository();

class ConversionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { moedas } = request.params;
    const { id, valorEnviado } = request.body;

    if (!id || !moedas || !valorEnviado)
      throw new Error('missing data for conversion');

    const findConversion = fakeConversionRepository.findById(id);

    if (findConversion) throw new Error('id already exists');

    const moedasSplit = moedas.split('-');

    const moedaOriginal = moedasSplit[1];
    const moedaDaConversao = moedasSplit[0];

    const { data } = await apiConversion.get(`/${moedas}`);
    const { bid } = data[`${moedaDaConversao}${moedaOriginal}`];

    const parseFloatBid = parseFloat(bid);

    const valorConvertido = valorEnviado * parseFloatBid;

    const conversionCreated = fakeConversionRepository.create({
      id,
      moedaDaConversao,
      moedaOriginal,
      valorConvertido,
      valorEnviado,
    });

    return response.status(201).json(conversionCreated);
  }

  public index(request: Request, response: Response): Response {
    const conversions = fakeConversionRepository.listAllConversions();

    return response.status(200).json(conversions);
  }
}

export { ConversionController };
