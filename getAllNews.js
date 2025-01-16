global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';

//.env variaveis ambiente
const dotenv = require('dotenv');
dotenv.config();


let id = 2266

let loopObj = setInterval(() => {
    logger.info('GET NEWS ID=' + id)
    require('./lib/atualizarNoticias.js')(id)
    id++
    if (id == 9000) clearInterval(loopObj)
}, 5000)