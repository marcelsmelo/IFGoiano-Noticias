const cheerio = require('cheerio');

module.exports = (html) =>{
	let $ = cheerio.load(html)
    let tipoNoticia = $('#content-section > div > div.below-content > div > span > a.link-categoria').text();
	let regexDestaque = /Destaque/i
    let regexNoticias = /Notícias Anteriores/i
    let regexUltimas = /Últimas notícias/i
    if(regexNoticias.test(tipoNoticia)||regexDestaque.test(tipoNoticia) || regexUltimas.test(tipoNoticia)){
      logger.info('Página recuperada: Notícia.')
      return true;
    }else{
      logger.info('Página recuperada: Outras páginas.')
      return false;
    }
}