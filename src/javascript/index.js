const colors = require('colors');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3002;

console.log('Consultado el documento...'.rainbow);

//Se crea servidor con Node
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end('Holaaa mundo');
});
//Se activa el puerto asignado
server.listen(port, hostname, () => {
    console.log(`Server up, ready listen in port: ${port} and hostname ${hostname}`);
});
