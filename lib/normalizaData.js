module.exports = (data)=>{
	let mesesAno = {
		'Janeiro': 1, 
		'Fevereiro':2,
		'Março': 3,
		'Abril': 4, 
		'Maio': 5, 
		'Junho':6,
		'Julho': 7,
		'Agosto': 8, 
		'Setembro':9,
		'Outubro': 10,
		'Novembro': 11,
		'Dezembro': 12,
	}
  	let textoPublicadoEm = data.split(', ')
  	let dataExtenso = textoPublicadoEm[1].split(' de ')
  	let hora = textoPublicadoEm[2].split('h')
  	return new Date(dataExtenso[2], mesesAno[dataExtenso[1]]-1, dataExtenso[0], hora[0], hora[1], 0, 0)
}
