const cheerio = require('cheerio');
const normalizaTexto = require('../lib/normalizaTexto.js');
const normalizaData = require('../lib/normalizaData.js');
const normalizaCampus = require('../lib/normalizaCampus.js');
const normalizaDateString = require('../lib/normalizaDateString.js')
const getIdFromUrl = require('../lib/getIdFromUrl.js');

module.exports = (html, id)=>{
  let $ = cheerio.load(html);
  const baseURL = 'https://www.ifgoiano.edu.br';

  let title = $('#content-section > div > .item-page > h1 > a').text();
  let subTitle = $('#content-section > div > .item-page > .description > p').text();
  //let description = $('#content-section > div > .item-page > p').text();
  let url = $('#content-section > div > .item-page > h1 > a').attr('href');
  let campus = $('#content-section > div > .below-content > div > span > a.link-categoria').text();
  let data = $('#content-section > div > .item-page > .content-header-options-1.row-fluid > .documentByLine.span7 .documentPublished').text()
  //require('../lib/getDescription.js')(html);
  
  let noticia = {
    idSite : id,
    title : normalizaTexto(title),
    subtitle: normalizaTexto(subTitle),
  //description : description,
    url : baseURL+url,
    date : normalizaData(normalizaTexto(data)),
    dateString: normalizaDateString(normalizaTexto(data)),
    campus: normalizaCampus(campus)
  }
  // console.log('Objeto notícia montado com sucesso!', noticia);
  require('../lib/salvarNoticias.js')(noticia);
}
