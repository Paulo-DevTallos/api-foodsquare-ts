FROM node:16-alpine

WORKDIR /home/app/api-foodsquare

COPY package*.json .

RUN yarn install

EXPOSE 3020
