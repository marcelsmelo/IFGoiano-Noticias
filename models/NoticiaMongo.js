const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    idSite: require('./fields/required-unique-index-field.js')('Number'),
    title: require('./fields/required-field.js')('String'),
    subtitle: require('./fields/field.js')('String'),
    //description: require('./fields/field.js')('String'),
    url: require('./fields/required-unique-field.js')('String'),
    campus: require('./fields/required-field.js')('String'),
    dateString: require('./fields/required-field.js')('String'),
    date: require('./fields/required-field.js')('Date'),
});

NoticiaSchema.plugin(require('../plugins/timestamp.js'));

module.exports =  mongoose.model('Noticia', NoticiaSchema);
