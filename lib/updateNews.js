module.exports = ()=>{
	return new Promise((success, reject)=>{
		require('./getMaxIdSite.js')()
	    .then((result)=>{
	     	let maxID = result[0].maxIdSite
	      	for(let id=maxID+1; id<=maxID+10; id++){
	       		require('./atualizarNoticias.js')(id)
	      	}
	      	success({success:true})
	    })
	    .catch((err)=>{
	    	logger.error(err);
	    	reject({success:false, error: err})
	    })
	})
};