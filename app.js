const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';

let app = express();
const load = require('express-load');

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization, Content-Length, X-Requested-With');

//     // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//         res.send(200);
//     } else {
//         next();
//     }
// };

// app.use(allowCrossDomain);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//==========================================================
//================= Banco de Dados =========================
//==========================================================
mongoose.Promise = global.Promise;
const connection = require('./config/db.js')(mongoose);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev'));

app.use(morgan(':date[clf] - :method :url :status :response-time ms - :res[content-length]'))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/**********************
 ******** ROTAS *******
 **********************/
load('controllers')
    .then('routes')
    .into(app);

//Atualiza as notícias a cada 10 minutos
setInterval(() => {
    logger.info('Atualizando notícias do site IFGoiano.edu.br')
    require('./lib/updateNews.js')();
}, (30 * 60000))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;