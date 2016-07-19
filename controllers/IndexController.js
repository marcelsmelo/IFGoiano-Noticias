const campus = require('../models/campusIFGoiano.js');
const Noticia = require('../models/NoticiaModel.js');
module.exports = {
  update: (req, res, next)=>{
    for(let key in campus){
      var options = {key , name: campus[key]};
      require('../lib/atualizarNoticias.js')(options);
    }
    res.status(200).json({sucess: true});
  },
  getAll:(req, res, next)=>{
      Noticia.find({})
      .then((result)=>{
         logger.info('Notícias recuperadas com sucesso!');
         res.status(200).json({success:true, data:result});
      })
      .catch((err) => {
         logger.error(err);
         res.status(500).json({success: false, msg: 'Erro ao buscar as notícias. Tente novamente!'})
      });
  },
  getByCampus: (req, res, next)=>{
    const t = Object.keys(req.body)
        .filter((key)=> req.body[key] === 'true');
    console.log('QUERY', t);
    const fields = {
      title: 1,
      description: 1,
      url: 1, date:1,
      campus: 1
    };

    const options = {
      skip: 0,
      limit: 10,
      sort: {date: -1}
    };

    Noticia.find({campus: {$in: t}}, fields, options)
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
