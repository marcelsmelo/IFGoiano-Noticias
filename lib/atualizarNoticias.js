const axios = require('axios');
const https = require('https');
const bot = require('./telegramBot')

function getNewsFromSite(id){
    logger.info(`[ID ${id}] Buscar notícia`)
    
    const url = 'https://www.ifgoiano.edu.br/home/index.php/component/content/article?id=' + id;

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
        if(error.code == "EHOSTUNREACH" || error.code == "ETIMEDOUT"){
            logger.warn(`[ID ${id}] Falha ao buscar notícias do site IFGoiano. (${error.code}) Try again!`)
            getNewsFromSite(id); 
        }else{
            logger.error(`[ID ${id}] Erro ao buscar notícias do site IFGoiano.`)
            logger.error(`[ID ${id}] ${error.message}`)
        }
    })
}

module.exports = getNewsFromSite