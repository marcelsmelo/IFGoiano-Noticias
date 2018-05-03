const controller = require('../controllers/CarsController.js');
module.exports = (app) => {
    app.put('/carros/esportivos', controller.esportivos);
    app.get('/carros/classicos', controller.classicos);
}