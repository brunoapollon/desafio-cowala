# Conversão de moedas

## Tecnologias

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)

## Projeto

Esse projeto é uma API desenvolvida no desafio da empresa cowala com funcionalidades de conversões de moedas consumindo uma API externa!
API externa: `https://docs.awesomeapi.com.br/api-de-moedas`

## Instruções

- Para instalar todas as dependências utilizadas do projeto basta rodar o comando `yarn`
- O servidor pode ser iniciado com `yarn dev`, onde se tem acesso pelo `http://localhost:3333`
- A maneira de utilizar e informações necessárias estão descritas em cada rota da aplicação.

## Rotas da aplicação

 - `moedas = USD-BRL`: Conversão de dólar para real.

- `http://localhost:3333/conversions/create/${moedas}` essa é a rota de criaação de conversões (`POST`) Você precisa enviar os seguintes atributos, id (`number`), valorEnviado (`number`).
 ```JSON
  Exemplo de retorno:
    {
      "id": 1,
      "moedaOriginal": "BRL",
      "moedaDaConversao": "USD",
      "valorEnviado": 10,
      "valorConvertido": 54.535
    }
 ```
 
 - `http://localhost:3333/conversions/list_conversions` essa é a rota que retorna todas as conversões criadas (`GET`) .
 ```JSON
  Exemplo de retorno:
    [
      {
        "id": 1,
        "moedaOriginal": "BRL",
        "moedaDaConversao": "USD",
        "valorEnviado": 10,
        "valorConvertido": 54.535
      }
    ]
 ```
 - `http://localhost:3333/conversions/show_conversion/${id}` essa é a rota que retorna uma coversão especifica (`GET`) .
 ```JSON
  Exemplo de retorno:
    {
      "id": 1,
      "moedaOriginal": "BRL",
      "moedaDaConversao": "USD",
      "valorEnviado": 10,
      "valorConvertido": 54.535
    }
 ``` 
  - `http://localhost:3333/conversions/delete_conversion/${ID}` essa é a rota que deleta uma coversão especifica (`DELETE`) .
  
   ```JSON
  Exemplo de retorno:
    {
      "message": "Product deleted successfully"
    }
 ``` 
