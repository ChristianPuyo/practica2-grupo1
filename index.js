// index.js
const db = require('./models')
const server = require('./server');


db.sequelize.syn({ alter: true }) // Sincroniza modelos con la base de datos
  .then(() => {
    server.liste(3001, () => {
      console.log('Server listening on port 3001');
    });
  })
  .catch(err => console.log('Error al sincronizar la base de datos', err));
