var express = require('express');

var app = express();
var usersRouter = require('./users');
var indexRouter = require('./index');

/**
 * @description llamando a los archivos de rutas
 */
var empresaRouter = require('./routes_api_empresa');
// var clientesRouter = require('./routes_api_cliente');
// var empleadosRouter = require('./routes_api_empleados');
// var pedidosRouter = require('./routes_api_pedidos');
// var productosRouter = require('./routes_api_productos');


app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 *  @description RUTAS DEL API DE TODA LA APLICACION
 */

app.use('/api/empresas', empresaRouter);
// app.use('/api/clientes', clientesRouter);
// app.use('/api/empleados', empleadosRouter);
// app.use('/api/pedidos', pedidosRouter);
// app.use('/api/productos', productosRouter);

return module.exports = app;