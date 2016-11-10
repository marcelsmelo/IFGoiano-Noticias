const controller = require('../controllers/IndexController.js');
module.exports = (app) =>{
  //app.get('/news/update', controller.update);
  app.get('/news/getAll', controller.getAll);
  app.get('/news/getLast', controller.getByCampus)
}
