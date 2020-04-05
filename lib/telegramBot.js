const TelegramBot = require( `node-telegram-bot-api` )
const config = require('../config/telegramBot')


module.exports =  new TelegramBot( config.token, { polling: true })