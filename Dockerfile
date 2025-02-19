FROM node:lts-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -g pm2
RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "pm2-runtime", "ecosystem.config.cjs" ]