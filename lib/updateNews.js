const Noticia = require('../models/NoticiaMysql');

module.exports = () => {
    return new Promise((success, reject) => {
        Noticia.max('idSite').then(maxID => {
            let id = maxID+1;
            let loopObj = setInterval(() => {
                require('./atualizarNoticias')(id)
                id++;
                if (id > maxID + 10) clearInterval(loopObj)
            }, 10000)

            success({ success: true })
            
          })
          .catch((err) => {
            logger.error(err);
            reject({ success: false, error: err })
        })  
    })
};