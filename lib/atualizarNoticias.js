const request = require('request');

module.exports = (id) => {
    logger.info('Buscar notícia ID=' + id)
    let params = {
        url: 'https://www.ifgoiano.edu.br/home/index.php/component/content/article?id=' + id,
        method: 'GET'
    }

    request(params, (err, response, html) => {
        if (!err && response.statusCode == 200) {
            logger.info('Verificar notícia ID=' + id);
            let isNews = require('./verificaTipoNoticia.js')(html);
            if (isNews) {
                let news = require('./montarNoticia.js')(html, id);
                require('../lib/salvarNoticias.js')(news);
            }
        } else {
            notFound = true;
            logger.error('Erro ao buscar notícias do site IFGoiano. ID=' + id)
        }
    })

}