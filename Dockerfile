FROM node:20.12.2-bullseye-slim AS builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.ts ./


RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]