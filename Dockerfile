FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# copie package.json + package-lock.json para aproveitar cache de camadas
COPY app/package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# copie o código
COPY app/server.js ./server.js

USER node
EXPOSE 3000
CMD ["npm", "start"]
