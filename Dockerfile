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