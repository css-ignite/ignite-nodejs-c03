
# Criando Projeto com Docker

git init

yarn init --y

yarn add express

yarn add -D typescript

yarn add ts-node-dev

yarn add @types/express

yarn tsc --init

yarn add -D eslint

yarn add -D @typescript-eslint/eslint-plugin

yarn add -D @typescript-eslint/parser

yarn add -D eslint-config-airbnb-base

yarn add -D eslint-plugin-import

yarn add -D prettier

yarn add -D eslint-config-prettier

yarn add -D eslint-plugin-prettier

yarn add -D eslint-import-resolver-typescript

yarn add -D eslint-plugin-import-helpers

yarn add -D eslint-plugin-jsdoc

yarn add -D eslint-plugin-simple-import-sort

## Docker

O docker é uma ferramenta utilizada para a criação de containers, que são ambientes isolados, onde podemos rodar aplicações, serviços, bancos de dados, etc. Esses containers são isolados, mas podem se comunicar entre si, e com o host, que é o computador que está rodando o docker.

O docker é uma ferramenta muito utilizada em ambientes de desenvolvimento, pois ele permite que o ambiente de desenvolvimento seja o mesmo do ambiente de produção, e isso é muito importante para evitar problemas futuros.

### Arquivo Dockerfile

```dockerfile

FROM node

WORKDIR /Users/claudneysessa/Developer/Docker/NodeJS/chapter02/rentx

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

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

### Executando o container e apontando a porta para utilização da API

Aqui vamos executar o container e apontar a porta para utilização da API, para isso, vamos utilizar o comando:

```bash

docker run -p 3333:3333 rentx

```

### Executando comandos dentro do docker

Aqui vamos executar comandos dentro do docker, para isso, vamos utilizar o comando:

```bash

docker exec -it recursing_bose /bin/bash

```

## Docker compose

O docker-compose é uma ferramenta para definir e executar aplicativos Docker com vários contêineres. Com o docker-compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo. Em vez de executar um comando docker longo para iniciar um único contêiner, você pode executar docker-compose up e iniciar todos os serviços definidos em seu arquivo docker-compose.yml.

### Arquivo docker-compose.yml

```yml

version: "3.7"

services:
  rentx:
    build: .
    container_name: rentx
    ports:
      - "3333:3333"
    volumes:
      - .:/Users/claudneysessa/Developer/Docker/NodeJS/chapter02/rentx

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

### Verificando os containers

O comando `docker-compose ps` lista os contêineres em execução.

O comando `docker-compose ps -a` lista todos os contêineres criados incluindo os que não estão em execução.

```bash

# Listar containers ativos
docker ps

# Listar todos os containers
docker ps -a

```

### Executar logs do container

Com este comando apresenta os logs do container quando este estiver sendo executado em background.

```bash

# Executando os logs do container rentx
docker logs rentx -f

```

### Executar comandos dentro do container

Com este comando eu abro um canal de comunicação com o container possibilitando a execução de comandos no container.

```bash

# Executando comandos dentro do container rentx
docker exec -it rentx /bin/bash

```
