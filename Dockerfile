FROM node

WORKDIR /Users/claudneysessa/Developer/Docker/NodeJS/chapter02/rentx

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]