const Noticia = require('../models/NoticiaMysql')

Noticia.sync({ force: true });
console.log("All models were synchronized successfully.");