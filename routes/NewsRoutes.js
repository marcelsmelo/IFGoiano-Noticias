const controller = require('../controllers/NewsController.js');
module.exports = (app) => {
    app.put('/news', controller.update);
    app.get('/news', controller.getNews);
}