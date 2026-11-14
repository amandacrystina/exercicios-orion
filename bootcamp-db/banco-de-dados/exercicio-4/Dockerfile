FROM node:18-alpine AS base
WORKDIR /app
COPY . .

FROM node:18-alpine AS final
WORKDIR /app
USER node
COPY --chown=node:node --from=base /app ./

EXPOSE 3000
CMD ["node", "-e", "console.log('Ambiente de Produção Ativo!'); setInterval(() => {}, 1000);"]