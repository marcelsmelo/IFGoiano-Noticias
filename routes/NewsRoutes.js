const controller = require('../controllers/NewsController.js');
module.exports = (app) => {
    app.put('/noticias', controller.update);
    app.get('/noticias', controller.getNews);
    app.get('/ultimas-noticias', controller.lastNews);
}