

module.exports = (app) =>{
  const controller = app.controllers.IndexController;
  app.get('/', controller.index);
}
