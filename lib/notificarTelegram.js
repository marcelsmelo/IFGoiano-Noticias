const config = require('../config/telegramBot')

module.exports = (bot, news) => {

    let message = `<b>\u{1f4cd} #${news.campus} - ${news.title}</b> \n \n ${news.subtitle} \n \n  \u{1f517} <a href="${news.url}">https://www.ifgoiano.edu.br</a>`;
    
    return bot.sendMessage(config.idChannel, message, { parse_mode: 'html', disable_web_page_preview: true });
    // .catch(error =>{          
    //     //logger.error(`[ID ${news.idSite}] Erro ao notificar Telegram${error.code}`);
    //    //logger.error(`[ID ${news.idSite}] ${error.code} - ${error.response.body}`);

    //     console.log(`[ID ${news.idSite}] Erro ao notificar Telegram ${error.code}`);
    //     console.log(`[ID ${news.idSite}] ${error.code} - ${error.response.body}`);
    // })   
        
}