# Plantilla base
FROM node:16-alpine

ENV REACT_APP_NUMERO_GANADOR=10
ENV REACT_APP_API_NOTICIAS_ENDPOINT=https://jsonplaceholder.typicode.com/posts

# Carpeta de trabajo
WORKDIR /app

# Copiamos dependencias
COPY package.json .
COPY package-lock.json .

# Copiamos archivos
COPY ./ .

# Instalamos dependencias
RUN npm install

# Abrimos puerto
EXPOSE 3000

# Inicia el contenedor
CMD ["npm", "run", "start"]



