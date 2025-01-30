const axios = require('axios');
const https = require('https');
//const bot = require('./telegramBot')

function getNewsFromSite(id, tentativa=1){
    logger.info(`[ID ${id}] Buscar notícia`)
    
    const url = 'https://www.ifgoiano.edu.br/home/index.php/component/content/article/' + id;

    const agent = new https.Agent({  
        rejectUnauthorized: false
    });


    axios.get(url, { httpsAgent: agent })
    .then(response =>{
        if(response.status == 200){
            logger.info(`[ID ${id}] Notícia recuperada do site.`);
            let isNews = require('./verificaTipoNoticia')(response.data, id);
            if (isNews) {
                let news = require('./montarNoticia')(response.data, id);
                //require('./notificarTelegram')(bot, news)
                require('./salvarNoticiaMysql')(news)
            }
        }
    })
    .catch(error =>{
            logger.info(`[ID ${id}] Falha ao buscar notícias do site IFGoiano. (${error.code}) Try again!`);
            tentativa += 1;
            if(tentativa <= 3){
                getNewsFromSite(id,tentativa);
            }
             
    })
}

module.exports = getNewsFromSite