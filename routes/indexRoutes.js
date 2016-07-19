const controller = require('../controllers/IndexController.js');
module.exports = (app) =>{
  app.get('/news/update', controller.update);
  app.get('/news/getAll', controller.getAll);
  app.post('/news/getByCampus', controller.getByCampus)
}
