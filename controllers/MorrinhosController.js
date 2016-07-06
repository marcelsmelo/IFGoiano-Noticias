const request = require('request');
const cheerio = require('cheerio');
let normalizaTexto = require('../lib/normalizaTexto.js');
let getIdUrl = require('../lib/getIdUrl.js');


module.exports = {
  buscarNoticias: (req, res, next)=>{
    let options = {
      url: 'https://www.ifgoiano.edu.br/home/index.php/ultimas-noticias-morrinhos',
      method: 'POST',
      form:{
        limit: 5,
        filter_order: '',
        filter_order_Dir: '',
        limitstart: ''
      }
    }
    request(options, (err,response, html)=>{
        if(!err){
          let result = [];
          var $ = cheerio.load(html);
          $('div.tileItem').each((i, elem)=>{
            let url = $(elem).find('.tileContent .tileHeadline a').attr('href');
            let noticia = {
              id : getIdUrl(url),
              title : normalizaTexto($(elem).find('.tileContent .tileHeadline').text()),
              description : normalizaTexto($(elem).find('.tileContent .description p').text()),
              url : url,
              data : $(elem).find('.tileInfo ul li .icon-calendar').parent().text(),
              time: $(elem).find('.tileInfo ul li .icon-time').parent().text(),
            }
            result.push(noticia);
          });
          console.log('RESULT', JSON.stringify(result, undefined, 2));
        }
    })
  }
}
