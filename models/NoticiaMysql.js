const Sequelize = require('sequelize')
const sequelize = require('../database/dbMysql');

const Noticia = sequelize.define('Noticias', {
    idSite: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    }, 
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitle: {
        type: Sequelize.STRING,
        allowNull: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    campus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Reitoria"
    },
    dateString: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataPublicacao: {
        type: Sequelize.DATE(6),
        allowNull: false
    }
});

module.exports = Noticia;