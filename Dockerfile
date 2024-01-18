FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g npm@10.3.0

RUN npm i -g yarn

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]
