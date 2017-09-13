const Noticia = require('../models/NoticiaModel.js');
module.exports = (news) => {
    console.log('[SALVAR] NEWS:', news)
    let noticia = new Noticia(news);
    noticia.save()
        .then((result) => {
            logger.info(`[SALVAR] ID=${news.idSite} Título=${news.title}`);
        })
        .catch((err) => {
            logger.info(`[ERROR] ID=${news.idSite} Título=${news.title}`);
            logger.debug('[NEWS]', news);
            logger.debug('[MONGOOSE]', err);
        })
}