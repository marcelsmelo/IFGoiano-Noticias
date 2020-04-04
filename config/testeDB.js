const Noticia = require('../models/NoticiaMysql');

Noticia.sync();


// console.log(require("../lib/getMaxIdSiteMysql"))

// Noticia.create({
//     idSite: 100,
//     title: "Teste Noticia", 
//     subtitle: "aklsjdfklajsdfkljasdf",
//     url:"http://marcelmelo.com.br",
//     campus: "Morrinhos",
//     dateString: "hoje",
//     dataPublicacao: "10-10-10 10:10"
// })
// .then(news => {
//     console.log(news);
// })
// .catch(error => {
//    console.log(error)
//   })
  