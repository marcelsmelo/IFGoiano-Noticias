const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


global.logger = require('winston');
logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';

//Documentação Swagger
//Importar Swagger-ui-Express e SwaggerJSDoc
const swaggerUi = require('swagger-ui-express');
let swaggerJSDoc = require('swagger-jsdoc');

//.env variaveis ambiente
const dotenv = require('dotenv');
dotenv.config();

let app = express();
app.use(cors());

const load = require('express-load');

app.use(express.static(path.join(__dirname, 'public')));


//==========================================================
//================= Banco de Dados =========================
//==========================================================
// mongoose.Promise = global.Promise;
// const connection = require('./config/dbMongo.js')(mongoose);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev'));

app.use(morgan(':date[clf] - :method :url :status :response-time ms - :res[content-length]'))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

//================= Docs Swagger =========================
//==========================================================

// swagger definition
let swaggerDefinition = {
    openapi: '3.0.1',
    info: {
      title: 'API aplicativo anúncios', //Nome da API
      version: '1.0.0', //Versão da API
      description: 'API de manipulação de anúncios para as disciplinas do TSI',
    },
    //host: 'anuncios.marcelmelo.com.br', //URL base da API
    basePath: '/',
    components: {
        securitySchemes:{
            "BearerAuth": { "type": "http", "scheme": "bearer" }
        }
    }
    
  };
  
  // options for the swagger docs
  let options = {
    // import swaggerDefinitions, definido anteriormente
    swaggerDefinition: swaggerDefinition,
    // arquivos que contem especificações para geração da documentação
    apis: ['./docs/modelsDoc.js', './docs/lib.js', './docs/*.js'],
    
  };
  
  // initialize swagger-jsdoc
  let swaggerSpec = swaggerJSDoc(options);

  //Rota para acessar a documentação
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**********************
 ******** ROTAS *******
 **********************/
load('controllers')
    .then('routes')
    .into(app);

//Atualiza as notícias a cada 10 minutos
setInterval(() => {
    logger.info('Atualizando notícias do site IFGoiano.edu.br...')
    require('./lib/updateNews.js')();
}, (30 * 60000))


// logger.info('Atualizando notícias do site IFGoiano.edu.br...')
//     require('./lib/updateNews.js')();

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
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
});


module.exports = app;