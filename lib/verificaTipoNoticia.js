const cheerio = require('cheerio');

module.exports = (html, id) => {
    let $ = cheerio.load(html)
    let tipoNoticia = $('#content-section > div > div.below-content > div > span > a.link-categoria').text();
    let regexDestaque = /Destaque/i
    let regexNoticias = /Notícias Anteriores/i
    let regexNoticiasGenerico = /Notícias/i
    let regexUltimas = /Últimas notícias/i
    if (regexNoticiasGenerico.test(tipoNoticia) || regexNoticias.test(tipoNoticia) ||
         regexDestaque.test(tipoNoticia) || regexUltimas.test(tipoNoticia)) {
        logger.debug(`[ID ${id}] Página recuperada: Notícia.`)
        return true;
    } else {
        logger.debug(`[ID ${id}] Página recuperada: Outras Notícias.`)
        return false;
    }
}