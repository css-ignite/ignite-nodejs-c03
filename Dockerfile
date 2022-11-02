FROM node

# O WORKDIR define o diretório de trabalho do container e é criado caso não exista no momento da criação do container
# este diretório será o diretório de trabalho padrão para todos os comandos RUN, CMD, ENTRYPOINT, COPY e ADD executados no container a partir deste ponto no Dockerfile
# este diretório é criado dentro do container e não no host da máquina onde o container está sendo executado
WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333
EXPOSE 3339

CMD ["npm", "run", "debug"]