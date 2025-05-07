# Etapa 1: Construcción con Node
FROM node:20.17.0 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

# Pasar argumentos de compilación
ARG VITE_API_URL
ARG VITE_BASE_URL

# Exportar como variables de entorno
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

COPY . .
RUN npm run build

# Etapa 2: Servir con Apache
FROM httpd:2.4

# Habilitar mod_rewrite para rutas en Vue
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf

# Copiar el build al directorio raíz de Apache
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Copiar el archivo .htaccess
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

EXPOSE 80
