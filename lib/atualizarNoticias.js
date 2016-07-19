const request = require('request');
const cheerio = require('cheerio');

module.exports = (options)=>{
    let params = {
      url: 'https://www.ifgoiano.edu.br/home/index.php/ultimas-noticias',
      method: 'POST',
      form:{
        limit: 0,
        filter_order: '',
        filter_order_Dir: '',
        limitstart: ''
      }
    }
    if(options.key) params.url += '-'+options.key;

    request(params, (err,response, html)=>{
        if(!err){
          var $ = cheerio.load(html);
          $('div.tileItem').each((i, elem)=>{
            require('../lib/montarNoticia.js')(elem, options.name);
          });
        }else{
          logger.error('Erro ao buscar notícias do campus %s', options.name);
        }
    })
  }
