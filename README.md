# Como utilizar

Para rodar o projeto será necessário ter instalado

[Node.js](https://nodejs.org/en/download/) versão 16.15.0 ou maior

[Yarn](https://classic.yarnpkg.com/lang/en/docs/install) versão estável clássica (1.22.X)

## Versão de desenvolvimento

Em um terminal, na raiz do projeto rode:

`yarn` Para instalar as dependências

`yarn start` Para rodar o projeto

Roda o projeto em versão de desenvolvimento

Abra [http://localhost:3000](http://localhost:3000) em um navegador para utilizar.

## Versão de Produção

Prepara a aplicação para uso em produção, com otimizações e melhoria de performance

Em um terminal, na raiz do projeto rode

`yarn`

`yarn build`

Em seguida, para visualizar a versão de produção, primeiro instale o pacote "serve"

`yarn global add serve`

`serve -s build`

## Testes

Em um terminal, após ter instalado as dependências com `yarn`, rode na raiz do projeto:

`yarn test`
