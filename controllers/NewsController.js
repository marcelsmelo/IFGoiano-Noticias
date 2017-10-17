const campus = require('../models/campusIFGoiano.js');
const Noticia = require('../models/NoticiaModel.js');
module.exports = {
    update: (req, res, next) => {
        logger.info('Atualizando notícias do site IFGoiano.edu.br')
        require('../lib/updateNews.js')();
        res.status(200).json({ success: true });
    },
    getNews: (req, res, next) => {

        console.log('QUERY', req.param);


        const fields = {
            idSite: 1,
            title: 1,
            subtitle: 1,
            url: 1,
            date: 1,
            dateString: 1,
            campus: 1
        };

        let options = {
            skip: 0,
            sort: { idSite: -1 },
        };

        let query = {}
        if (req.param.campus !== undefined && req.param.campus !== '') {
            const queryCampus = JSON.parse(req.param.campus);
            const t = Object.keys(queryCampus)
                .filter((key) => queryCampus[key] === true)
                .map((elem) => campus[elem])
            query.campus = { $in: t }
        }

        if (req.param.limit !== undefined && req.param.limit != '') {
            options.limit = parseInt(req.param.limit)
        }

        if (req.param.maxID !== undefined && req.param.maxID != '') {
            query.idSite = { $gt: req.param.maxID }
        }

        //const query = ['Morrinhos', 'Reitoria']
        // Noticia.find({campus: {$in: t}}, fields, options)
        Noticia.find(query, fields, options)
            .then((result) => {
                logger.info('Notícias recuperadas com sucesso!');
                res.status(200).json({ success: true, data: result });
            })
            .catch((err) => {
                logger.error(err);
                res.status(500).json({ success: false, msg: 'Erro ao buscar as notícias. Tente novamente!' })
            })
    }
}