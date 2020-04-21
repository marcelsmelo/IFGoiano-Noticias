const TelegramBot = require( `node-telegram-bot-api` )
const config = require('../config/telegramBot')


module.exports =  new TelegramBot( config.token, { polling: true })


// class Singleton {

//     constructor() {
//         if (!Singleton.instance) {
//             Singleton.instance = new TelegramBot( config.token, { polling: true });
//         }
//     }
  
//     getInstance() {
//         return Singleton.instance;
//     }
  
//   }
  
//   module.exports = Singleton;