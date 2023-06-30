FROM node:latest

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .

RUN apt-get update && apt-get install -y wget

EXPOSE 3000

CMD ["node","index.js"]