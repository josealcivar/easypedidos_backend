var express = require('express');
var router = express.Router();
var controller = require('../controller/empleado_controller');

/* GET clientes list. LIKE  */
router.get('/listadoEmpleado', controller.ObtenerListadoEmpleados);

/* POST empresas por sucursal. */
router.post('/listadoEmpleadoPorNombre', controller.GetEmpleadoPorNombre);

/* POST creacion de cliente. */
router.post('/CrearEmpleado', controller.CrearNuevoEmpleado);

module.exports = router;