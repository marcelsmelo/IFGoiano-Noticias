const { Op } = require("sequelize");
const bot = require('./lib/telegramBot')
const Noticia = require('./models/NoticiaMysql')
const config = require('./config/telegramBot')

// let news = {"idSite":14164,
// "title":"Definida nova data de matrículas para alunos especiais do Mestrado em Olericultura",
// "subtitle":"Interessados deverão se matricular nos dias 2 e 3 de abril, pela internet.",
// "url":"https://www.ifgoiano.edu.br/home/index.php/component/content/article/174-destaque-morrinhos/14183-definida-nova-data-de-matriculas-para-alunos-especiais-do-mestrado-em-olericultura.html",
// "dataPublicacao":"2020-03-27T18:09:00.000Z",
// "dateString":"Sexta, 27 de Março de 2020, 15h09",
// "campus":"Morrinhos"}


// Noticia.findAll({
//      attributes: ['idSite', 'title', 'subtitle', 'url', 'campus'],
//      where:{
//          idSite:{
//             [Op.gt]: 14000
//          }
//      }
// }).then(news =>{
//     let id = 0;
//         let loopObj = setInterval(() => {
//             console.log('GET NEWS ID=' + news[id].idSite)
//             require('./lib/notificarTelegram')(bot, news[id].dataValues)
//             id++
//             if (id == news.length) clearInterval(loopObj)
//         }, 3000)
 
// })


//bot.on( 'message', ( msg ) => console.log( 'msg', msg ) )

//require('./lib/notificarTelegram')(bot, news)

let message = `Teste \u{1f680}`;
bot.sendMessage(config.idChannel, message, { parse_mode: 'html', disable_web_page_preview: true });



