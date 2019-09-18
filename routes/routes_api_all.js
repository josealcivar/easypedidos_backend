'use strict';

module.exports = function(app) {
    
var empresaRouter         = require('./routes_api_empresa');
var clienteRouter         = require('./routes_api_cliente');
var empleadoRouter        = require('./routes_api_empleados');
var pedidosRouter         = require('./routes_api_pedidos');
var gruposRouter          = require('./routes_api_grupos');
var productosRouter       = require('./routes_api_productos');
var marcaRouter           = require('./routes_api_marca');
var caracteristicasRouter = require('./routes_api_caracteristicas');
var promocionesRouter     = require('./routes_api_promociones');

app.use('/api/empresas',        empresaRouter);
app.use('/api/clientes',        clienteRouter);
app.use('/api/empleados',       empleadoRouter);
app.use('/api/pedidos',         pedidosRouter);
app.use('/api/grupos',          gruposRouter);
app.use('/api/productos',       productosRouter);
app.use('/api/marcas',          marcaRouter);
app.use('/api/caracteristicas', caracteristicasRouter);
app.use('/api/promociones',     promocionesRouter);

};
  

