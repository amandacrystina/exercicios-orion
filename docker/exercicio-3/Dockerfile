FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./


FROM base AS dev

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]


FROM base AS prod

RUN npm install --omit=dev

COPY . .

USER node

CMD ["npm", "start"]