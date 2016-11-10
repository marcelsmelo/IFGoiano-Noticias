module.exports = (data)=>{
	logger.info('[NORMALIZA DATE STRING] Data Recebida', data)
  	let textoPublicadoEm = data.split(', ')
  	let stringDate = textoPublicadoEm[1] + ' ás ' + textoPublicadoEm[2]
  	logger.info('[Normaliza Date String]', stringDate);
  	return stringDate;
}
