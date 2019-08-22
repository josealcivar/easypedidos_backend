var express = require('express');
var router = express.Router();
var controller = require('../controller/empresa_controller');

/* GET empresas list. */
router.get('/listadoEmpresas', controller.ObtenerListadoEmpresas);

/* GET empresas por sucursal. */
router.get('/listadoEmpresasPorSucursal/:empresa', controller.GetSucursalPorEmpresa);

/* POST creacion de empresas. */
router.post('/CrearEmpresa', controller.CrearNuevaEmpresa);

module.exports = router;