FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm cache clean --force \
    && mkdir -p /var/www/html \
    && mv dist/* /var/www/html \
    && mv .env.example /var/www/html \
    && rm -rf /app/node_modules /app/package-lock.json

WORKDIR /var/www/html

RUN mv .env.example .env

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
