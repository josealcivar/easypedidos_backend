var express = require('express');
var router = express.Router();
var controller = require('../controller/grupos_controller');

/* GET grupos list. LIKE  */
//router.get('/listadoGrupos', controller.ObtenerListadoEmpleados);

/* POST grupos. */
router.post('/listadoGruposPorNombre', controller.ObtenerListadoGrupos);

/* POST creacion de grupos. */
//router.post('/CrearEmpleado', controller.CrearNuevoEmpleado);

module.exports = router;