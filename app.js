var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

var empresaRouter = require('./routes/routes_api_empresa');
var clienteRouter = require('./routes/routes_api_cliente');
var empleadoRouter = require('./routes/routes_api_empleados');
var pedidosRouter = require('./routes/routes_api_pedidos');
var gruposRouter = require('./routes/routes_api_grupos');
//require('./routes/routes_api_all');

var bodyParser = require('body-parser');


require("./cors")(app);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/empresas', empresaRouter);
app.use('/api/clientes', clienteRouter);
app.use('/api/empleados', empleadoRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/grupos',gruposRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
