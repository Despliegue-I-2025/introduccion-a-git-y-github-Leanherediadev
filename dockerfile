# Usar la imagen oficial de Node.js
FROM node:18

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo app.js dentro del contenedor
COPY app.js .

# Exponer el puerto 3000 para acceso externo
EXPOSE 3000

# Comando por defecto para ejecutar la app
CMD ["node", "app.js"]
