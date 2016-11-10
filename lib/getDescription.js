const cheerio = require('cheerio');

module.exports = (html)=>{
	let $ = cheerio.load(html)
	$('#content-section > div > div.item-page > h1.documentFirstHeading').remove();
  	$('#content-section > div > div.item-page > .actions').remove();
  	$('#content-section > div > div.item-page > .row-fluid').remove();
  	$('#content-section > div > div.item-page > div.description').remove();
  	$('#content-section > div > div.item-page > div.direct-image').remove();
  	console.log('TEXTO', $('#content-section > div > div.item-page').html());


}