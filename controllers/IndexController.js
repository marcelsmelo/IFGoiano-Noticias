const campus = require('../models/campusIFGoiano.js');
const Noticia = require('../models/NoticiaModel.js');
module.exports = {
  update: (req, res, next)=>{
    for(let id=4000; id<4244; id++){
      setTimeout(function() {
        require('../lib/atualizarNoticias.js')(id)
      },3000);
    }
    res.status(200).json({success: true});
  },
  getAll:(req, res, next)=>{
      Noticia.find({}, null, {sort: {idSite: -1}})
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
    // const t = Object.keys(req.body)
    //     .filter((key)=> req.body[key] === 'true');
    // console.log('QUERY', t);
    const fields = {
      idSite:1,
      title: 1,
      subtitle: 1,
      description: 1,
      url: 1, 
      date:1,
      dataString:1,
      campus: 1
    };

    const options = {
      skip: 0,
      limit: 50,
      sort: {idSite: -1},
    };
    const t = ['Morrinhos', 'Reitoria']
    // Noticia.find({campus: {$in: t}}, fields, options)
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
