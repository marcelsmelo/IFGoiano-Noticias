const Noticia = require('../models/NoticiaMongo.js');
module.exports = ()=>{
	return Noticia.aggregate([{
        $group: {
          _id: "",
            maxIdSite: {
                $max: "$idSite"
            }
        }
    }]);
    // .then((result) => {
    //       console.log('RESULT', result)
    //       console.log('MAXIDSITE UAI', result[0].maxIdSite)
    //       return result[0].maxIdSite
    // })
    // .catch((err)=>{
    //   console.log('ERRO MAXID', err)
    //   return -1
    // });
};