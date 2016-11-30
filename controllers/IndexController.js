const campus = require('../models/campusIFGoiano.js');
const Noticia = require('../models/NoticiaModel.js');
module.exports = {
  update: (req, res, next)=>{
    logger.info('Atualizando notícias do site IFGoiano.edu.br')
    require('../lib/updateNews.js')();
    res.status(200).json({success: true});
  },
  getNews: (req, res, next)=>{
    // const t = Object.keys(req.body)
    //     .filter((key)=> req.body[key] === 'true');
    // console.log('QUERY', t);
    const fields = {
      idSite:1,
      title: 1,
      subtitle: 1,
      url: 1, 
      date:1,
      dataString:1,
      campus: 1
    };

    let options = {
      skip: 0,
      sort: {idSite: -1},
    };

    let query = {}
    if(req.body.campus !== undefined && req.body.campus !== ''){
      query = {campus: {$in: req.body.campus}}
    }

    if(req.body.limit !== undefined && req.body.limit != ''){
      options.limit = parseInt(req.body.limit)
    }

    //const query = ['Morrinhos', 'Reitoria']
    // Noticia.find({campus: {$in: t}}, fields, options)
    Noticia.find(query, fields, options)
    .then((result)=>{
      logger.info('Notícias recuperadas com sucesso!');
      res.status(200).json({success:true, data:result});
    })
    .catch((err) => {
      logger.error(err);
      res.status(500).json({success: false, msg: 'Erro ao buscar as notícias. Tente novamente!'})
    })
  }
}
