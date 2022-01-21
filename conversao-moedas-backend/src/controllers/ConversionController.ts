import { Request, Response } from 'express';

import apiConversion from 'src/services/apiConversion';

import { FakeConversionRepository } from '@fakes/FakeConversionRepository';

import { AppError } from '../errors/AppError';

const fakeConversionRepository = new FakeConversionRepository();

class ConversionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { moedas } = request.params;
    const { id, valorEnviado } = request.body;

    if (!id || !moedas || !valorEnviado)
      throw new AppError('missing data for conversion', 400);

    const findConversion = fakeConversionRepository.findById(id);

    if (findConversion) throw new AppError('id already exists', 400);

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

  public show(request: Request, response: Response): Response {
    const { conversion_id } = request.params;

    const conversionFinded = fakeConversionRepository.findById(
      parseInt(conversion_id),
    );

    if (!conversionFinded) throw new AppError('Conversion not found', 404);

    return response.status(200).json(conversionFinded);
  }

  public delete(request: Request, response: Response): Response {
    const { conversion_id } = request.params;

    const conversionFinded = fakeConversionRepository.findById(
      parseInt(conversion_id),
    );

    if (!conversionFinded) throw new AppError('Conversion not found', 404);

    const conversionDeleted = fakeConversionRepository.deleteConversion(
      parseInt(conversion_id),
    );

    if (!conversionDeleted) throw new Error('Conversion not deleted');

    return response
      .status(202)
      .json({ message: 'Product deleted successfully' });
  }
}

export { ConversionController };
