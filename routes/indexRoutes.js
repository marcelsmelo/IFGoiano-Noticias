const controller = require('../controllers/IndexController.js');
module.exports = (app) =>{
  app.get('/news/update', controller.update);
  app.post('/news/getNews', controller.getNews);
}
