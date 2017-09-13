const controller = require('../controllers/NewsController.js');
module.exports = (app) => {
    app.put('/news', controller.update);
    app.post('/news', controller.getNews);

}