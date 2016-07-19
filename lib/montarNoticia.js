const cheerio = require('cheerio');
const normalizaTexto = require('../lib/normalizaTexto.js');
const normalizaData = require('../lib/normalizaData.js');
const getIdFromUrl = require('../lib/getIdFromUrl.js');

module.exports = (htmlItem, campus)=>{
  let $ = cheerio.load(htmlItem);

  let title = $(htmlItem).find('.tileContent .tileHeadline').text();
  let description = $(htmlItem).find('.tileContent .description p').text();
  let url = $(htmlItem).find('.tileContent .tileHeadline a').attr('href');
  let data = $(htmlItem).find('.tileInfo ul li .icon-calendar').parent().text();
  let hora = $(htmlItem).find('.tileInfo ul li .icon-time').parent().text().trim();
  let id = getIdFromUrl(url);

  if(!parseInt(id))
    id = require('../lib/gerarIdByStringDate')(id, data, hora);

  let noticia = {
    idSite : id,
    title : normalizaTexto(title),
    description : normalizaTexto(description),
    url : url,
    date : normalizaData(data, hora),
    campus: campus
  }
  logger.debug('Objeto notícia ID=%s montado com sucesso!', noticia.idSite);
  require('../lib/salvarNoticias.js')(noticia);
}
