

module.exports = (app) =>{
  const controller = app.controllers.MorrinhosController;
  app.get('/buscarNoticias', controller.buscarNoticias);
}
