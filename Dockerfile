FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
