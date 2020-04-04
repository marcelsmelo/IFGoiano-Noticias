module.exports = (data)=>{
  	let textoPublicadoEm = data.split(': ')
  	let stringDate = textoPublicadoEm[1]

  	return stringDate;
}
