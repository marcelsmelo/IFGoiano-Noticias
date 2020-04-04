module.exports = (mongoose) =>{
    let url = process.env.DB || 'mongodb://localhost:27017/IFGoiano-Noticias';
    mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true});
}; 