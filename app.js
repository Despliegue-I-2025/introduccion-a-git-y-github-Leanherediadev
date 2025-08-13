// hello.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código HTTP 200 = OK
  res.setHeader('Content-Type', 'text/plain'); // Tipo de contenido
  res.end('Hello World\n'); // Mensaje que se envía al navegador
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

