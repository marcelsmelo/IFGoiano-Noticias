const Noticia = require('../models/NoticiaMysql');

Noticia.max('idSite').then(max => {
    console.log(`Max site id: ${max}`);
    return max;
  })