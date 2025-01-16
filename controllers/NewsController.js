const Noticia = require('../models/NoticiaMysql.js');
const Op = require('sequelize').Op;

module.exports = {
    update: (req, res, next) => {
        logger.info('Atualizando notícias do site IFGoiano.edu.br')
        require('../lib/updateNews.js')();
        res.status(200).json({ success: true });
    },
    getNews: async (req, res, next) => {

        let sqlQuery = {}
        sqlQuery.where = {}
        
        sqlQuery.attributes = [
            'idSite',
            'title',
            'subtitle',
            'url',
            'dataPublicacao',
            'dateString',
            'campus'
        ];

        sqlQuery.order = [
            ['idSite', 'ASC']
        ];

        

        if (req.query.campus !== undefined && req.query.campus !== '') {
            console.log("CAMPUS: ", req.query.campus)
            // const queryCampus = JSON.parse(req.query.campus);
            // const t = Object.keys(queryCampus)
            //     .filter((key) => queryCampus[key] === true)
            //     .map((elem) => campus[elem])
            sqlQuery.where.campus = { [Op.in] : req.query.campus }
        }

        if (req.query.limit !== undefined && req.query.limit != '') {
            console.log("LIMIT: ", req.query.limit)
            sqlQuery.limit = parseInt(req.query.limit)
        }

        if (req.query.lastId !== undefined && req.query.lastId != '') {
            console.log("lastId: ", req.query.lastId)
            sqlQuery.where.idSite = {  [Op.gt]: req.query.lastId }
        }

        //const query = ['Morrinhos', 'Reitoria']
        // Noticia.find({campus: {$in: t}}, fields, options)
        try{
            let noticias = await Noticia.findAll(sqlQuery);
            logger.info('Notícias recuperadas com sucesso!');
            return res.status(200).json( noticias );
        }catch(err){
            logger.error(err);
            return res.status(500).json({msg: 'Erro ao buscar as notícias. Tente novamente!'});
        }
    }
}