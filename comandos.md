
# Comandos docker

O comando `docker-compose up -d` cria e inicia os containers em segundo plano.

```bash

docker-compose up -d

```

O comando `docker-compose up -d --force-recreate` cria e inicia os containers em segundo plano, forçando a recriação dos containers.

```bash

docker-compose up -d --force-recreate

```

O comando `docker-compose down -v --rmi all` para e remove os containers, volumes e imagens.

```bash

docker-compose down -v --rmi all

```

O comando `docker-compose down -v --rmi all --remove-orphans` para e remove os containers, volumes e imagens, removendo também os containers orfãos.

```bash

docker-compose down -v --rmi all --remove-orphans

```
