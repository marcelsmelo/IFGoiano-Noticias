const config = require('../config/telegramBot')

module.exports = (bot, news) => {

    let message = `\u{1f4cd} <b>${news.campus} - ${news.title}</b> \n \n ${news.subtitle} \n \n  \u{1f517} <a href="${news.url}">https://www.ifgoiano.edu.br</a>`;
    
    bot.sendMessage(config.idUser, message, { parse_mode: 'html', disable_web_page_preview: true })
    .catch(error =>{          
        logger.error(`[ID ${news.idSite}] Erro ao notificar Telegram${error.code}`);
        logger.error(`[ID ${news.idSite}] ${error.code} - ${error.response.body}`);
    })   
        
}