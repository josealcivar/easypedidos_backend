var express = require('express');
var router = express.Router();
var controller = require('../controller/caracteristica_controller');

/* GET clientes list. LIKE  */
//router.get('/listadoPedidos', controller.ListadoDePedidos);

/* GET empresas por sucursal. */
//router.get('/ObtenerPedidos/:pedido', controller.ObtenerPedido);

/* POST creacion de caracteristica. */
router.post('/CrearCaracteristicas', controller.CrearNuevaCaracteristica);
/* PUT CheckOut  pedidos. */
//router.put('/Checkout/:pedido', controller.CheckOutPedido);

module.exports = router;