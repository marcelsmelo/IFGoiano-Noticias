const Noticia = require('../models/NoticiaMysql');

module.exports = (news) => {
    Noticia.create(news)
        .then((result) => {
            logger.info(`[ID ${news.idSite}] Notícia salva com sucesso!`);
        })
        .catch((err) => {
            logger.error(`[ID ${news.idSite}] Erro ao salvar notícia`)
            logger.debug(`[ID ${news.idSite}] Error Mysql: ${err}` )
            logger.debug(`[ID ${news.idSite}] Objeto Notícia: ${news}`);
        })
}