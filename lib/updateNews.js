const Noticia = require('../models/NoticiaMysql');

module.exports = () => {
    return new Promise((success, reject) => {
        Noticia.max('idSite').then(lastIdSite => {
            for (let id = lastIdSite + 1; id <= lastIdSite + 20; id++) {
                setInterval(() => {
                    require('./atualizarNoticias.js')(id)
                }, (10000)) 
            }
            success({ success: true })
          })
          .catch((err) => {
            logger.error(err);
            reject({ success: false, error: err })
        })  
    })
};