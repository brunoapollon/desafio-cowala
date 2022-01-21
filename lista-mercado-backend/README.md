# Lista de mercado


## Tecnologias

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)

## Projeto

Esse projeto é uma API desenvolvida no desafio da empresa cowala com funcionalidades de criar uma lista de compras.


## Instruções

- Para instalar todas as dependências utilizadas do projeto basta rodar o comando `yarn`
- O servidor pode ser iniciado com `yarn dev`, onde se tem acesso pelo `http://localhost:3333`
- A maneira de utilizar e informações necessárias estão descritas em cada rota da aplicação.

## Rotas da aplicação

- `http://localhost:3333/product/create` essa é a rota de criaação de item  (`POST`) Você precisa enviar os seguintes atributos, id (`number`), item (`string`) e o preco (`number`).

 ```JSON
  Exemplo de retorno:
    {
      "id": 1,
      "item": "arroz",
      "preco": 10.5
    }
 ```

- `http://localhost:3333/product/list_products` essa é a rota que lista todos os itens da lista (`GET`).

 ```JSON
  Exemplo de retorno:
    [
      {
        "id": 1,
        "item": "arroz",
        "preco": 10.5
      }
    ]
 ```
 
 - `http://localhost:3333/product/show_product/${id}` essa é a rota que mostra um item da lista pelo id (`GET`).

 ```JSON
  Exemplo de retorno:
    {
      "id": 1,
      "item": "arroz",
      "preco": 10.5
    }
 ```
 
  - `http://localhost:3333/product/delete_product/${id}` essa é a rota que delta um item da lista pelo id (`DELETE`).

 ```JSON
  Exemplo de retorno:
    {
      "message": "Product deleted successfully"
    }
 ```

- `http://localhost:3333/product/update_product/${id}` essa é a rota de atualização de item  (`PUT`) Você pode enviar os seguintes atributos, item (`string`) e o preco (`number`).

 ```JSON
  Exemplo de retorno:
    {
      "id": 1,
      "item": "arroz",
      "preco": 10.5
    }
 ```
