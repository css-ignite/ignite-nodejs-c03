
# Criando Projeto com Docker

## Iniciando o projeto

### Iniciando o repositorio no git

O ccomando `git init` cria um repositorio local no diretorio atual.

```bash

git init

```

Posso iniciar um repositorio no github e clona-lo localmente com o comando `git clone`.

### Iniciando o package da aplicação

O `yarn init --y` cria um package.json com as configurações padrões, sem precisar responder as perguntas.

O `--y` é para aceitar as configurações padrões.

```bash

yarn init -y

```

### Adicionando o @tyopes/node

O `@types/node` é um pacote que contém arquivos de declaração de tipo para o Node.js. Isso permite que você escreva código TypeScript que importe módulos do Node.js.

```bash

yarn add @types/node -D

```

### Adicionando o typescript

O `TypeScript` é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.

```bash

yarn add -D typescript

```

### Adicionando o @types/typescript

O `@types/typescript` é um pacote que contém arquivos de declaração de tipo para o TypeScript. Isso permite que você escreva código TypeScript que importe módulos do TypeScript.

```bash

yarn add -D @types/typescript

```

### Iniciando o typescript

Utilizo o `yarn tsc --init` para iniciar o typescript, mas você pode utilizar o `npx tsc --init` também.

Este comando irá criar um arquivo `tsconfig.json` na raiz do projeto, que é o arquivo de configuração do typescript.

Você pode alterar as configurações do typescript neste arquivo.

- [Documentação](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

```bash

yarn tsc --init

```

Dentro do arquivo `tsconfig.json` você pode alterar as configurações do typescript para que o Typescript seja capaz de resolver módulos json.

```json

 "resolveJsonModule": true,

```

### Dica: Forma reduzida de adicionar packages no package.json

Abaixo temos uma forma reduzida de adicionar packages no package.json, utilizando o `yarn add -D` e o `yarn add` onde eu posso executar a instalação de vários packages ao mesmo tempo.

No caso abaixo eu estou instalando o `typescript`, `@types/node` e `@types/typescript` no modo de desenvolvimento, e logo após executo o `yarn tsc --init` para iniciar o typescript, tudo isso em uma única linha de comando.

```bash

# instalando conjunto de packages como dependencias de desenvolvimento
yarn add -D @types/node typescript @types/typescript tsc --init

```

### Adicionando o ts-node-dev

O ts-node-dev é um utilitário que permite executar o código TypeScript diretamente, sem a necessidade de compilar o código para JavaScript.

```bash

yarn add -D ts-node-dev

```

### Criando o script de inicialização com o ts-node-dev

No arquivo `package.json` eu adiciono o script de inicialização da aplicação utilizando o `ts-node-dev` e passando os parâmetros necessários.

```json

  "scripts": {
    "dev": "ts-node-dev --inspect=0.0.0.0:3339 --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },

```

No script acima eu estou passando os seguintes parâmetros:

- --inspect=0.0.0.0:3339, onde eu estou passando o endereço de ip e a porta para o debug do node.
- --transpile-only, onde eu estou passando para o ts-node-dev que ele deve transpilar o código apenas, sem verificar os erros de tipagem.
- --ignore-watch node_modules, onde eu estou passando para o ts-node-dev que ele deve ignorar a pasta node_modules.
- --respawn, onde eu estou passando para o ts-node-dev que ele deve reiniciar o servidor sempre que houver alterações no código.

## Configurando o ESLint

### Adicionando o eslint

O `eslint` é uma ferramenta de linting para JavaScript e JSX. Ele analisa seu código JavaScript e aponta problemas. Ele é totalmente configurável e tem plugins para muitos ambientes populares, como React, Vue.js e Node.js.

```bash

yarn add -D eslint

```

Para iniciar o eslint, eu utilizo o comando `yarn eslint --init`, mas você pode utilizar o `npx eslint --init` também.  

### Adicionando o @types/eslint

O `@types/eslint` é um pacote que contém arquivos de declaração de tipo para o eslint. Isso permite que você escreva código TypeScript que importe módulos do eslint.

```bash

yarn add -D @types/eslint

```

### Iniciando o eslint

Utilizo o `yarn eslint --init` para iniciar o eslint, mas você pode utilizar o `npx eslint --init` também.

Este comando irá criar um arquivo `.eslintrc.js` na raiz do projeto, que é o arquivo de configuração do eslint.

Você pode alterar as configurações do eslint neste arquivo.

- [Documentação](https://eslint.org/docs/user-guide/configuring)

Ao executar o comando `yarn eslint --init` você irá responder algumas perguntas, e o eslint irá criar o arquivo de configuração `.eslintrc.js` com as configurações que você escolheu.

Você pode alterar as configurações manualmente no arquivo `.eslintrc.js` ou executar o comando `yarn eslint --init` novamente para alterar as configurações.

### Adicionando o eslint-plugin-import

O `eslint-plugin-import` é um plugin do eslint que fornece regras de lint para importações e exports.

```bash

yarn add -D eslint-plugin-import

```

### dicionando o eslint-import-resolver-typescript

O `eslint-import-resolver-typescript` é um plugin do eslint que permite que você configure o eslint para resolver módulos do TypeScript.

```bash

yarn add -D eslint-import-resolver-typescript

```

### Adicionando o eslint-plugin-import-helpers

O `eslint-plugin-import-helpers` é um plugin do eslint que fornece regras de lint para organizar as importações.

```bash

yarn add -D eslint-plugin-import-helpers

```

### Adicionando @typescript-eslint/eslint-plugin

O `@typescript-eslint/eslint-plugin` é um plugin do eslint que fornece regras de lint para o TypeScript.

```bash

yarn add -D @typescript-eslint/eslint-plugin

```

### Adicionando @typescript-eslint/parser

O `@typescript-eslint/parser` é um plugin do eslint que fornece um parser para o TypeScript.

```bash

yarn add -D @typescript-eslint/parser

```

### Adicionando o eslint-config-airbnb-base

O `eslint-config-airbnb-base` é um plugin do eslint que fornece regras de lint para o Airbnb.

```bash

yarn add -D eslint-config-airbnb-base

```

## Configurando o Prettier

### Adicionando o prettier

O `prettier` é uma ferramenta de formatação de código. Ele analisa seu código e aplica um conjunto de regras para formatar o código.

```bash

yarn add -D prettier

```

### Adicionando o @types/prettier

O `@types/prettier` é um pacote que contém arquivos de declaração de tipo para o prettier. Isso permite que você escreva código TypeScript que importe módulos do prettier.

```bash

yarn add -D @types/prettier

```

### Configurando o eslint para utilizar o prettier

Para configurar o eslint para utilizar o prettier, você deve instalar o seguinte pacote:

```bash

yarn add -D eslint-config-prettier

```

Precisamos o eslint-plugin-prettier para executar o prettier como uma regra do eslint.

```bash

yarn add -D eslint-plugin-prettier

```

### Exemplos de configurações para o ESLint e Prettier

#### .eslintignore

```eslintignore

node_modules
dist

/*.js

```

No arquivo `.eslintignore` eu estou ignorando a pasta `node_modules` e a pasta `dist`, e também estou ignorando todos os arquivos `.js`.

#### .eslintrc.js

```eslintrc.js

{
    "env": {
      "es2020": true,
      "node": true,
      "jest": true
    },
    "extends": [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "prettier",
      "eslint-plugin-import-helpers"
    ],
    "rules": {
      "camelcase": "off",
      "prettier/prettier": "error",
      "import/no-unresolved": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": [
            "PascalCase"
          ],
          "custom": {
            "regex": "^I[A-Z]",
            "match": true
          }
        }
      ],
      "class-methods-use-this": "off",
      "import/prefer-default-export": "off",
      "no-shadow": "off",
      "no-console": "off",
      "no-useless-constructor": "off",
      "no-empty-function": "off",
      "lines-between-class-members": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ],
      "import-helpers/order-imports": [
        "warn",
        {
          "newlinesBetween": "always",
          "groups": [
            "module",
            "/^@shared/",
            [
              "parent",
              "sibling",
              "index"
            ]
          ],
          "alphabetize": {
            "order": "asc",
            "ignoreCase": true
          }
        }
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/*.spec.js"
          ]
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  }

```

No arquivo `.eslintrc.js` eu estou configurando o eslint para utilizar o TypeScript, o prettier e o Airbnb. Além disso, eu estou configurando algumas regras do eslint.

No ruless eu estou desabilitando algumas regras do eslint que não são necessárias para o projeto, e também estou configurando algumas regras do eslint.

Esou configurando o camelcase como off, pois o TypeScript já faz essa validação.

No "prettier/prettier" eu estou configurando o prettier para ser executado como uma regra do eslint.

No "import/no-unresolved" eu estou configurando o eslint para verificar se os imports estão corretos.

No "@typescript-eslint/naming-convention" eu estou configurando o eslint para verificar se as interfaces estão seguindo o padrão de nomeação do TypeScript.

No class-methods-use-this eu estou desabilitando a regra do eslint que obriga a utilizar o this em métodos de classe.

No import/prefer-default-export eu estou desabilitando a regra do eslint que obriga a utilizar o export default.

No no-shadow eu estou desabilitando a regra do eslint que obriga a utilizar o this em métodos de classe.

No no-console eu estou desabilitando a regra do eslint que obriga a utilizar o console.log.

No no-useless-constructor eu estou desabilitando a regra do eslint que obriga a utilizar o this em métodos de classe.

No no-empty-function eu estou desabilitando a regra do eslint que obriga a utilizar o this em métodos de classe.

No lines-between-class-members eu estou desabilitando a regra do eslint que obriga a utilizar o this em métodos de classe.

No "import/extensions" eu estou configurando o eslint para verificar se os imports estão com a extensão correta.

No "import-helpers/order-imports" eu estou configurando o eslint para ordenar os imports.

No "import/no-extraneous-dependencies" eu estou configurando o eslint para verificar se as dependências estão corretas.

No settings eu estou configurando o `import/resolver` para utilizar o `typescript`.

#### prettier.config.js

```prettier.config.js

export const singleQuote = false;

// module.exports = {
//     singleQuote: false,
// }

```

No arquivo `prettier.config.js` eu estou configurando o prettier para utilizar aspas duplas.

## Express

### Adicionando o express

O `express` é um framework para Node.js que permite criar aplicações web.

```bash

yarn add express

```

### Adicionando o @types/express

O `@types/express` é um pacote que contém arquivos de declaração de tipo para o express. Isso permite que você escreva código TypeScript que importe módulos do express.

```bash

yarn add -D @types/express

```

## Swagger

### Adicionando o swagger-ui-express

O `swagger-ui-express` é um pacote que permite que você adicione o swagger ao seu projeto.

```bash

yarn add -D swagger-ui-express

```

### Adicionando o @types/swagger-ui-express

O `@types/swagger-ui-express` é um pacote que contém arquivos de declaração de tipo para o swagger-ui-express. Isso permite que você escreva código TypeScript que importe módulos do swagger-ui-express.

```bash

yarn add -D @types/swagger-ui-express

```

### swagger.json

O arquivo `swagger.json` é o arquivo que contém a configuração do swagger.

Neste arquivo eu configuro as informações do projeto, as rotas, os parâmetros, os schemas, etc.

Este arquivo deve ser criado na raiz do projeto.

```swagger.json

{
  "openapi": "3.0.0",
  "info": {
    "title": "API",
    "description": "API",
    "version": "1.0.0"
  },
}

```

### Adicionando o swagger-jsdoc

O `swagger-jsdoc` é um pacote que permite que você adicione o swagger ao seu projeto.

```bash

yarn add -D swagger-jsdoc

```

### Adicionando o @types/swagger-jsdoc

O `@types/swagger-jsdoc` é um pacote que contém arquivos de declaração de tipo para o swagger-jsdoc. Isso permite que você escreva código TypeScript que importe módulos do swagger-jsdoc.

```bash

yarn add -D @types/swagger-jsdoc

```

### Utilização do swagger

Para gerar a documentação automatica eu criei uma rota para o swagger:

```typescript

import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { swaggerOptions } from "../../swagger/swaggerOptions";

const swaggerRoutes = Router();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

swaggerRoutes.use(
  "/swagger/docs/default",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

swaggerRoutes.use("/swagger", swaggerUi.serve);

swaggerRoutes.get(
  "/swagger",
  swaggerUi.setup(swaggerDocs, {
    swaggerOptions: {
      url: "/swagger/swagger.json",
    },
  })
);

swaggerRoutes.get("/swagger/swagger.json", (req, res) => res.json(swaggerDocs));

swaggerRoutes.get("/swagger/docs", (request, response) => {
  const { protocol, baseUrl } = request;
  const fullUrl = `${protocol}://${request.get("host")}${baseUrl}`;

  const htmlFile = `
    <body>
      <div id="redoc-container"></div>
      <script src="https://cdn.jsdelivr.net/npm/redoc@2.0.0-rc.55/bundles/redoc.standalone.min.js"> </script>
      <script src="https://cdn.jsdelivr.net/gh/wll8/redoc-try@1.4.1/dist/try.js"></script>
      <script>
        initTry({
          openApi:'${fullUrl}/swagger/swagger.json'
        });
      </script>
    </body>
  `;

  response.send(htmlFile);
});

export { swaggerRoutes };


```

Nesta rota estou passando um arquivo de configuração para o swagger-jsdoc.

```typescript

import { swaggerApiErrorSchema } from "./schemas/swaggerApiErrorSchema";
import { swaggerApiResponseSchema } from "./schemas/swaggerApiResponseSchema";
import { swaggerCategorySchema } from "./schemas/swaggerCategorySchema";
import { swaggerSpecificationsSchema } from "./schemas/swaggerSpecificationsSchema";

const swaggerApiDescription = `
  <p style="line-height: 0">API desenvolvida durante as aulas do curso Ignite Trilha NodeJS.\n
  Esta api foi desenvolvida baseada na OpenAPI 3.0 specification. \n
  Você pode conhecer um pouco mais sobre o swagger em [https://swagger.io](https://swagger.io). \n
  Esta API foi desenvolvida durante as aulas do curso Ignite da Rocketseat. Durante as aulas fui
  aprendendo sobre o desenvolvimento de APIs utilizando NodeJS e Typescript e durante seu desenvolvimento
  fui apresentado aso conceitos do SOLID onde pude aplicar alguns de seus conceitos como o Single Responsability Principle,
  Dependency Inversion Principle e o liskov substitution principle.\n
  Trabalhamos também com a organização a estrutura de pastas e arquivos do projeto, e finalizamos com a documentação da API
  utilizando o swagger.\n
  Como conteúdo adicional busquei formas de melorar o processo de documentação e pude aplicar algumas técnicas utilizando o
  wagger-jsdoc e o swagger-autogen para gerar a documentação automatica a API no momento de sua execução o que possibilita manter
  a API sempre atualizada sem muito esforço, apliquei tamtém uma estilizaçao na API com o ReDoc.\n
  </p>
  `;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "RentalX - Api de Integração",
      version: "1.0.0",
      description: swaggerApiDescription,
      contact: {
        email: "claudneysartisessa@gmail.com",
      },
    },
    servers: [
      {
        url: "{protocol}://{baseUrl}:{port}/v1",
        variables: {
          protocol: {
            enum: ["http", "https"],
            default: "http",
          },
          baseUrl: {
            default: "localhost",
            description:
              "This value is assigned by the service provider, in this example `gigantic-server.com`",
          },
          port: {
            enum: ["3333", "80", "8080"],
            default: "3333",
          },
        },
      },
    ],
    components: {
      schemas: {
        Category: swaggerCategorySchema,
        Specifications: swaggerSpecificationsSchema,
        ApiError: swaggerApiErrorSchema,
        ApiResponse: swaggerApiResponseSchema,
      },
    },
  },
  apis: ["**/*.ts"],
};

export { swaggerOptions };

```

Neste aqruivo eu criei um objeto com as configurações do swagger, como o titulo, a versão, a descrição, o contato, os servidores, os schemas e as apis que serão documentadas.

Criei também uma pasta para organizar os schemas e ps paths do swagger, mantendo assim a organização do projeto.

Estou utilizando o swagger-jsdoc para gerar a documentação da API, e o swagger-ui-express para exibir a documentação da API.

Desta forma pude incluir direto no projeto a possibilidade de documentar a API utilizando o swagger de forma automática, simples e organizada.

A documentação será gerada automaticamente a cada execução da API, e a documentação pode ser acessada através da rota /swagger/docs.

Como complemento na rota do swagger eu adicionei uma configuração para gerar uma API estilizada utilizando o ReDoc.

### Adicionando o swagger-autogen

O `swagger-autogen` é um pacote que permite que você adicione o swagger ao seu projeto.

```bash

yarn add -D swagger-autogen

```

## Configurando o Jest

### Adicionando o jest

O `jest` é um framework de testes para JavaScript. Ele permite que você escreva testes unitários, de integração e de ponta a ponta.

```bash

yarn add -D jest

```

### Adicionando o @types/jest

O `@types/jest` é um pacote que contém arquivos de declaração de tipo para o jest. Isso permite que você escreva código TypeScript que importe módulos do jest.

```bash

yarn add -D @types/jest

```

### Adicionando o ts-jest

O `ts-jest` é um plugin do jest que permite que você execute testes com TypeScript.

```bash

yarn add -D ts-jest

```

### Adicionando o supertest

O `supertest` é um pacote que permite que você escreva testes de integração para o seu projeto.

```bash

yarn add -D supertest

```

### Adicionando o @types/supertest

O `@types/supertest` é um pacote que contém arquivos de declaração de tipo para o supertest. Isso permite que você escreva código TypeScript que importe módulos do supertest.

```bash

yarn add -D @types/supertest

```

## UUId

### Adicionando o uuid

O `uuid` é um pacote que permite que você gere um id único.

```bash

yarn add uuid

```

O uuid é um pacote que permite que você gere um id único.

Dentro do UUid temos 4 versões:

- v1: Gera um id baseado no tempo e no MAC address do computador.
- v2: Gera um id baseado no tempo e no MAC address do computador.
- v3: Gera um id baseado em um namespace e em um nome.
- v4: Gera um id aleatório.
- v5: Gera um id baseado em um namespace e em um nome.

Para esta aplicação, vamos utilizar a versão 4.

### Adicionando o @types/uuid

O `@types/uuid` é um pacote que contém arquivos de declaração de tipo para o uuid. Isso permite que você escreva código TypeScript que importe módulos do uuid.

```bash

yarn add -D @types/uuid

```

## Multer

### Adicionando o multer

O `multer` é um pacote que permite que você faça upload de arquivos.

```bash

yarn add multer

```

### Adicionando o @types/multer

O `@types/multer` é um pacote que contém arquivos de declaração de tipo para o multer. Isso permite que você escreva código TypeScript que importe módulos do multer.

```bash

yarn add -D @types/multer

```

### CSV Parser

### Adicionando o csv-parser

O `csv-parser` é um pacote que permite que você faça upload de arquivos.

```bash

yarn add csv-parser

```

### Adicionando o @types/csv-parser

O `@types/csv-parser` é um pacote que contém arquivos de declaração de tipo para o csv-parser. Isso permite que você escreva código TypeScript que importe módulos do csv-parser.

```bash

yarn add -D @types/csv-parser

```

## Docker

O docker é uma ferramenta utilizada para a criação de containers, que são ambientes isolados, onde podemos rodar aplicações, serviços, bancos de dados, etc. Esses containers são isolados, mas podem se comunicar entre si, e com o host, que é o computador que está rodando o docker.

O docker é uma ferramenta muito utilizada em ambientes de desenvolvimento, pois ele permite que o ambiente de desenvolvimento seja o mesmo do ambiente de produção, e isso é muito importante para evitar problemas futuros.

### Arquivo Dockerfile

```dockerfile

# A instrução FROM indica a imagem base que será utilizada para a criação da imagem final.
FROM node

# A instrução WORKDIR define o diretório de trabalho atual para o diretório especificado.
WORKDIR /usr/app

# A instrução COPY copia novos arquivos ou diretórios do host e adiciona-os ao sistema de arquivos do container em execução.
COPY package.json ./

# A instrução RUN executa qualquer comando em uma nova camada e cria uma imagem.
RUN npm install

# A instrução COPY copia novos arquivos ou diretórios do host e adiciona-os ao sistema de arquivos do container em execução.
COPY . .

# A instrução EXPOSE informa ao Docker que o contêiner escuta na porta especificada em tempo de execução.
EXPOSE 3333
EXPOSE 3339

# A instrução CMD especifica o comando padrão que será executado quando o contêiner for iniciado.
CMD ["npm", "run", "debug"]

```

No arquivo a cima, temos o Dockerfile, que é o arquivo que contém as instruções para a criação do container.

O primeiro comando é o FROM, que indica qual imagem será utilizada para a criação do container. Nesse caso, estamos utilizando a imagem do node.

O segundo comando é o WORKDIR, que indica qual será o diretório de trabalho do container. Nesse caso, estamos utilizando o diretório /Users/claudneysessa/Developer/Docker/NodeJS/chapter02/rentx.

O terceiro comando é o COPY, que copia o arquivo package.json para o diretório de trabalho do container.

O quarto comando é o RUN, que executa o comando npm install, que instala as dependências do projeto.

O quinto comando é o COPY, que copia todos os arquivos do diretório atual para o diretório de trabalho do container.

O sexto comando é o EXPOSE, que expõe a porta 3333 do container.

O sétimo comando é o CMD, que executa o comando npm run dev, que inicia a aplicação.

Observe também que no projeto eu criei um .dockerignore

```dockerignore

node_modules
.git
.vscode

```

Neste arquivo, eu indico quais arquivos e pastas não devem ser copiados para o container.

### Gerando o build da imagem para o docker

Aqui vamos gerar o build da imagem para o docker, para isso, vamos utilizar o comando:

```bash

docker build -t rentx .

```

Ao executar o comando acima, o docker irá criar a imagem rentx, utilizando o Dockerfile que está no diretório atual.

### Executando o container e apontando a porta para utilização da API

Aqui vamos executar o container e apontar a porta para utilização da API, para isso, vamos utilizar o comando:

```bash

docker run -p 3333:3333 rentx

```

Ao executar o comando acima, o docker irá executar o container rentx, e apontar a porta 3333 do container para a porta 3333 do host.

### Executando comandos dentro do docker

Aqui vamos executar comandos dentro do docker, para isso, vamos utilizar o comando:

```bash

docker exec -it recursing_bose /bin/bash

```

Ao executar o comando acima, o docker irá executar o container recursing_bose, e abrir o terminal do container, para que possamos executar comandos dentro do container.

## Docker compose

O docker-compose é uma ferramenta para definir e executar aplicativos Docker com vários contêineres. Com o docker-compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo. Em vez de executar um comando docker longo para iniciar um único contêiner, você pode executar docker-compose up e iniciar todos os serviços definidos em seu arquivo docker-compose.yml.

A diferença entre o Dockerfile e o docker-compose é que o Dockerfile é utilizado para criar uma imagem, e o docker-compose é utilizado para criar um container, com o docker-compose, podemos criar vários containers, e cada um deles pode ter uma imagem diferente.

### Arquivo docker-compose.yml

```yml

# A instrução version indica qual versão do docker-compose será utilizada.
version: "3.7"

# A instrução services indica quais serviços serão utilizados.
services:
  
  # A instrução db é o nome do serviço.
  rentx:
    
    # A instrução build indica qual será a imagem que será utilizada para a criação do container do serviço. Nesse caso, estamos utilizando a imagem rentx.
    build: .
    
    # A instrução container_name indica qual será o nome do container do serviço.
    container_name: rentx
    
    # A instrução ports indica quais portas serão expostas do container do serviço.
    ports:
      - "3333:3333"
      - "3339:3339"
    
    # A instrução volumes indica quais volumes serão utilizados do container do serviço.
    volumes:
      - .:/usr/app

```

No arquivo a cima, temos o docker-compose.yml, que é o arquivo que contém as instruções para a criação do container.

O primeiro comando é o version, que indica qual versão do docker-compose será utilizada.

O segundo comando é o services, que indica os serviços que serão utilizados.

O terceiro comando é o rentx, que indica o nome do serviço.

O quarto comando é o build, que indica qual será o diretório de trabalho do container. Nesse caso, estamos utilizando o diretório /Users/claudneysessa/Developer/Docker/NodeJS/chapter02/rentx.

O quinto comando é o container_name, que indica o nome do container.

O sexto comando é o ports, que expõe a porta 3333 do container.

O sétimo comando é o volumes, que indica o diretório que será utilizado para o volume.

### Iniciando o container com o docker compose

O comando `docker-compose up` cria e inicia todos os contêineres definidos em um arquivo docker-compose.yml. Ele também cria as redes, inicia os volumes e define as configurações padrão especificadas no arquivo docker-compose.yml.

O comando `docker-compose up -d` cria e inicia todos os contêineres definidos em um arquivo docker-compose.yml em segundo plano, mantendo o container em execução.

```bash

# Iniciando o container runtime
docker-compose up

# Iniciando o container background
docker-compose up -d

```

Com o `docker-compose up` você pode iniciar todos os containers de uma vez, e com o `docker-compose up -d` você pode iniciar todos os containers em background, ou seja, você pode continuar utilizando o terminal, sem precisar ficar parado esperando o container iniciar.

### Verificando os containers

O comando `docker-compose ps` lista os contêineres em execução.

O comando `docker-compose ps -a` lista todos os contêineres criados incluindo os que não estão em execução.

```bash

# Listar containers ativos
docker ps

# Listar todos os containers
docker ps -a

```

Ao utilizar o comando `docker ps`, podemos ver que os containers que estão em execução.

Ao utilizar o comando `docker ps -a`, podemos ver que os containers que estão em execução e os que não estão em execução.

### Executar logs do container

Com este comando apresenta os logs do container quando este estiver sendo executado em background.

```bash

# Executando os logs do container rentx
docker logs rentx -f

```

Ao utilizar o comando `docker logs rentx -f` é possível acompanhar os logs do container rentx em tempo real.

### Executar comandos dentro do container

Com este comando eu abro um canal de comunicação com o container, assim eu consigo executar comandos dentro do container.

```bash

# Executando comandos dentro do container rentx
docker exec -it rentx /bin/bash

```

Ao utilizar o comando `docker exec -it rentx /bin/bash` é possível executar comandos dentro do container rentx, como por exemplo, executar o comando `yarn dev`.

### Parar o container

Com este comando eu paro o container.

```bash

docker-compose stop

```

O comando  `docker-compose stop`  para todos os contêineres definidos em um arquivo docker-compose.yml. Ele também para contêineres associados a contêineres definidos no arquivo docker-compose.yml.

### Remover o container

Com este comando eu removo o container.

```bash

docker-compose down

```

O comando `docker-compose down` remove os contêineres, as redes, os volumes e as imagens criadas pelo comando docker-compose up.

## Debugger

O debugger é uma ferramenta que permite que você execute seu código passo a passo, analisando o valor de cada variável em cada momento. Ele é muito útil para encontrar erros e bugs no seu código.

### Configurando o debugger

Para configurar o debugger, precisamos criar um arquivo chamado launch.json, que fica dentro da pasta .vscode.

Na configuração abaixo estou habilitando o debugger no F5 de 2 formas.

A primeira eu faço o debugger local com o ts-node-dev possibilitando o debugger local com a reinicialização automática do servidor.

```json

{
    "name": "Run and Debugger",
    "type": "node",
    "request": "launch",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/ts-node-dev",
    "program": "${workspaceFolder}/src/server.ts",
    "console": "internalConsole",
    "internalConsoleOptions": "neverOpen",
    "autoAttachChildProcesses": true,
    "restart": true,
    "sourceMaps": true,
    "smartStep": true,
    "trace": true,
    "showAsyncStacks": true,
    "timeout": 30000,
    "skipFiles": [
        "<node_internals>/**"
    ],
    "env": {
        "NODE_ENV": "development"
    }
}

```

A segunda configuração eu habilito o debugger no docker, possibilitando o debugger no container.

```json

{
    "name": "Docker: Attach to Node",
    "type": "node",
    "request": "attach",
    "restart": true,
    "port": 3339,
    "remoteRoot": "/usr/app"
}

```

Para utilizar o debugger no container nos executamos o docker-compose up -d, e depois executamos o comando F5 para attachar no container.

Observe que estou utilizando a porta 3339, pois a porta 3333 está sendo utilizada pelo container.

No meu script do docker-compose.yml eu estou utilizando a porta 3333 para a API, e estou utilizando a porta 3339 para o --inspect=0.0.0.0:3339 configurado la no meu package.json quando solicito a execução pelo ts-node-dev.

## TypeORM

O TypeORM é um ORM que pode ser utilizado com Node.js, TypeScript, JavaScript, Ionic, Cordova, PhoneGap, NativeScript, Expo, React Native, Vue.js, Angular, Nest, Ionic, Meteor e outras plataformas que suportam JavaScript.

### Instalando o TypeORM

Para instalar o TypeORM, precisamos executar o comando abaixo.

```bash

yarn add typeorm

yarn add reflect-metadata

```

### Configurado o tsconfig.json

Para configurar o tsconfig.json, precisamos adicionar o código abaixo.

```json

{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
    }
}

```

### Criando a conexão com o banco de dados

Para iniciar a configuração crio uma pasta database dentro da pasta src.

Dentro da pasta database crio um arquivo chamado index.ts.

```typescript

import { createConnection } from 'typeorm';

createConnection();

```

Crio também um arquivo chamado ormconfig.json na raiz do projeto.

```json

{
    "type": "postgres",
    "host": "localhost",
    "username": "postgres",
    "password": "docker",
    "database": "rentx",
    "port": 5432
}

```
