global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
let id = 100

let loopObj = setInterval(() => {
    logger.info('GET NEWS ID=' + id)
    require('./lib/atualizarNoticias.js')(id)
    id++
    if (id == 5000) clearInterval(loopObj)
}, 1000)