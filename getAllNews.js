global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, {colorize:true });
let id = 100

setInterval(()=>{
	logger.info('GET NEWS ID='+id)
	require('./lib/atualizarNoticias.js')(id)
	id++
}, 1000)

