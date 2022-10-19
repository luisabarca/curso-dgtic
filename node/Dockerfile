FROM node:16-alpine

WORKDIR /app

ENV PORT=3000

COPY package.json .
COPY package-lock.json .

COPY . .

# RUN npm run install

EXPOSE 3000

CMD [ "node", "app.js" ]