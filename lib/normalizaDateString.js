module.exports = (data)=>{
	logger.debug('[NORMALIZA DATE STRING] Data Recebida', data)
  	let textoPublicadoEm = data.split(', ')
  	let stringDate = textoPublicadoEm[1] + ' ás ' + textoPublicadoEm[2]
  	logger.debug('[Normaliza Date String]', stringDate);
  	return stringDate;
}
