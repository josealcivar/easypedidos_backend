var express = require('express');
var router = express.Router();
var controller = require('../controller/producto_controller');

/* GET grupos list. LIKE  */
//router.get('/listadoGrupos', controller.ObtenerListadoEmpleados);

/* POST grupos. */
//router.post('/listadoGruposPorNombre', controller.CrearNuevoProducto);

/* POST creacion de grupos. */
router.post('/CrearNuevoProducto', controller.CrearNuevoProducto);

module.exports = router;