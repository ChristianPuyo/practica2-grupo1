const express = require('express');
const router = require('./routes/index.js');
const morgan = require('morgan');
const cors = require('cors')



const serve = express(); 

server.use(cors())

// Middleware para parsing de JSON
server.use(morgan('dev')) 
server.use(express.json());

// Usar el router de las rutas
server.use(router);
 
module.exports = server;
