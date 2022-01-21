class Conversion {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;
  constructor(
    id: number,
    moedaOriginal: string,
    moedaDaConversao: string,
    valorEnviado: number,
    valorConvertido: number,
  ) {
    this.id = id;
    this.moedaOriginal = moedaOriginal;
    this.moedaDaConversao = moedaDaConversao;
    this.valorEnviado = valorEnviado;
    this.valorConvertido = valorConvertido;
  }
}

export { Conversion };
