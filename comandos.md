
# Comandos docker

O comando `docker-compose up -d` cria e inicia os containers em segundo plano.

```bash

docker-compose up -d

```

O comando `docker-compose up -d --force-recreate` cria e inicia os containers em segundo plano, forçando a recriação dos containers.

```bash

docker-compose up -d --force-recreate

```

O compando `docker-compose stop` para os containers.

```bash

docker-compose stop

```

O comando `docker-compose start` inicia os containers.

```bash

docker-compose start

```

O comando `docker-compose down -v --rmi all` para e remove os containers, volumes e imagens.

```bash

docker-compose down -v --rmi all

```

O comando `docker-compose down -v --rmi all --remove-orphans` para e remove os containers, volumes e imagens, removendo também os containers orfãos.

```bash

docker-compose down -v --rmi all --remove-orphans

```

Para obter o ip do container, execute o comando `docker inspect` que pode ser utilizado das formas descritas abaixo.

```bash

docker inspect ignite_rentx | grep "IPAddress"

```

```bash

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ignite_rentx

```

O comando `docker logs -f ignite_rentx` exibe os logs do container.

```bash

docker logs -f ignite_rentx

```

O comando `docker exec -it ignite_rentx bash` permite executar comandos dentro do container.

```bash

docker exec -it ignite_rentx bash

```

O comando `docker ps` exibe os containers em execução.

```bash

docker ps

```

O comando `docker ps -a` exibe todos os containers.

```bash

docker ps -a

```

O comando `docker images` exibe as imagens.

```bash

docker images

```

O comando `docker volume ls` exibe os volumes.

```bash

docker volume ls

```
