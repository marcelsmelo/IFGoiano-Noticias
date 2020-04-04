const Sequelize = require('sequelize');

module.exports =  new Sequelize('IFGoianoNoticias', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

