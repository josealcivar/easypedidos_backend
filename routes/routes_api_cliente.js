var express = require('express');
var router = express.Router();
var controller = require('../controller/cliente_controller');

/* POST clientes list. LIKE  */
router.post('/listadoClientes', controller.ObtenerListadoClientes);

router.get('/listadoTodosClientes', controller.ObtenerTodosLosClientes);
/* GET empresas por sucursal. */
router.get('/listadoEmpresasPorSucursal/:empresa', controller.GetSucursalPorEmpresa);

/* POST creacion de cliente. */
router.post('/CrearCliente', controller.CrearNuevoCliente);

module.exports = router;