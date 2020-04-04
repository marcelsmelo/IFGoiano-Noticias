global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';
let id = 6010

let loopObj = setInterval(() => {
    logger.info('GET NEWS ID=' + id)
    require('./lib/atualizarNoticias.js')(id)
    id++
    if (id == 6021) clearInterval(loopObj)
}, 10000)