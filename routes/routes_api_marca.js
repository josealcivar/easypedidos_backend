var express = require('express');
var router = express.Router();
var controller = require('../controller/marca_controller');

/* GET grupos list. LIKE  */
//router.get('/listadoGrupos', controller.ObtenerListadoEmpleados);

/* POST grupos. */
//router.post('/listadoGruposPorNombre', controller.ObtenerListadoGrupos);

/* POST creacion de marcas. */
router.post('/CrearNuevaMarca', controller.CrearNuevaMarca);

module.exports = router;