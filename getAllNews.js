const mongoose = require('mongoose');

//==========================================================
//================= Banco de Dados =========================
//==========================================================
mongoose.Promise = global.Promise;
const connection = require('./config/db.js')(mongoose);

global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';
let id = 100

let loopObj = setInterval(() => {
    logger.info('GET NEWS ID=' + id)
    require('./lib/atualizarNoticias.js')(id)
    id++
    if (id == 7000) clearInterval(loopObj)
}, 1000)