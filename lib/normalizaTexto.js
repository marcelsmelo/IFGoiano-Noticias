//https://github.com/Pompeu/noticiasIFMorrinhos/blob/master/plugins/trim.js
module.exports = (text)=>{
  /*
 Thx to W3c Schol for this algoritmn
 http://www.w3schools.com/jsref/jsref_trim_string.asp
 */
  return text.replace(/^\s+|\s+$/gm,'');
}
