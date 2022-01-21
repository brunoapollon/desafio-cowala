export default interface ICreateConversionDTO {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;
}
