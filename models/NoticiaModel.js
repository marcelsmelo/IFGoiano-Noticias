const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    idSite: require('./fields/required-unique-index-field.js')('Number'),
    title: require('./fields/required-field.js')('String'),
    description: require('./fields/required-field.js')('String'),
    url: require('./fields/required-unique-field.js')('String'),
    date: require('./fields/required-field.js')('Date'),
    time: require('./fields/required-field.js')('Date'),
});

NoticiaSchema.plugin(require('./plugins/timestamp.js'));

module.exports =  mongoose.model('Noticia', NoticiaSchema);
