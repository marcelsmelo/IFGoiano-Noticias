global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';
let id = 2262

let loopObj = setInterval(() => {
    logger.info('GET NEWS ID=' + id)
    require('./lib/atualizarNoticias.js')(id)
    id++
    if (id == 9000) clearInterval(loopObj)
}, 5000)