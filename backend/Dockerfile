FROM node:20-alpine

RUN apk update && \
    apk add --no-cache git wget && \
    npm install -g pnpm

RUN pnpm -v && \
    node -v

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm prisma generate

RUN mv .env.example .env

RUN chmod +x .sh/start-back.sh

EXPOSE 5000

CMD ["/bin/sh", "/app/.sh/start-back.sh"]
