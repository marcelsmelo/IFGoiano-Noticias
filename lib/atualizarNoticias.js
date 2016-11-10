const request = require('request');

module.exports = (id)=>{
    // require('./getMaxIdSite.js')()
    // .then((result)=>{
    //   console.log('MAXID', result[0].maxIdSite)
    // })
    // .catch((err)=>{
    //   console.log('ERR', err)
    // })
    let params = {
      url: 'https://www.ifgoiano.edu.br/home/index.php/component/content/article?id='+id,
      method: 'GET'
    }

    request(params, (err,response, html)=>{
        if(!err && response.statusCode == 200){
          logger.info('Verificar notícia ID='+id);
          let isNews = require('./verificaTipoNoticia.js')(html);
          if(isNews) require('./montarNoticia.js')(html, id);
        }else{
          notFound = true;
          logger.error('Erro ao buscar notícias do site IFGoiano. ID='+ id)
        }
    })  
    
  }

