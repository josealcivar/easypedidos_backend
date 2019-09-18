'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');


const CrearNuevaPromocion = async (req, res)=>{
   let dataPromocion={
        cabecera:{
            fecha: new Date(),
            comentario:req.body.comentario,
            estado: true
        }, 
        detalle:{
            detalleProm: req.body.Detalle  //lista de detalles
        }
    };
    
    let t = await inicializarTransaccion();
    try {
        let promocion = await modelo.Promocion.CrearPromocion(dataPromocion.cabecera, t);
        console.log("imprime el id de detalle");
        console.log(dataPromocion.detalle);
        dataPromocion.detalle.detalleProm.forEach(async element => {
                    element.PromocionId=promocion.get('id');
                    console.log(promocion.get('id'));
                let detallePromocion = await modelo.Detalle_promocion.createDetallePromocion(element);     
                });

            t.commit();
        return status.okCreate(res,'prpmocion creado satisfactoriamente', promocion.id);
    } catch (error) {
        console.log("imprime el error");
        console.log(error);
            t.rollback();
            return status.ERROR_SERVIDOR(res,error);
    }
};


const CheckOutPedido = async (req, res)=>{

    let idPedido = req.params.pedido;

    modelo.Pedido.update(
        {
            estado_orden:'T'
        },
        {
            where:  {   id:idPedido }
        }
    ).then(result=>{
        return status.okGet(res,'checkout exitoso', result);
    }).catch(err=>{
        return status.ERROR_SERVIDOR(res,err);
    });
};




const ListadoDePedidos = async(req, res)=>{

    modelo.Pedido.findAll({
        attributes:{
            include: [[sequelize.fn("COUNT", sequelize.col("detalle_pedidos.PedidoId")), "detalles"]],
            
        },
        include:[
            {
                model: modelo.Detalle_pedido, attributes: [],
               
            },{
                model: modelo.Cliente, attributes: ['razonsocial'],
            },
            {
                model: modelo.Empleado, attributes: ['nombres', 'apellidos'],
            },
            {
                model: modelo.Sucursal, attributes: ['nombre'],
            }
            
        ],
        group: "detalle_pedidos.PedidoId",
        order: [
            ['updatedAt', 'DESC']
        ]
    }).then(result=>{
        const pedidos = result.map( pedido => {
            console.log(pedido.get('detalles'));
            return Object.assign(
            {},
            {
                fecha: 	pedido.fecha,
                subtotal 	   : 	pedido.subtotal,
                impuesto 	   : 	pedido.impuesto,
                descuento  : 	pedido.descuento,
                total   : 	pedido.total,
                estado_orden     : 	pedido.estado_orden,
                cliente: pedido.Cliente.razonsocial,
                empleado: pedido.Empleado.nombres+ ' ' + pedido.Empleado.apellidos,
                sucursal: pedido.Sucursal.nombre,
                num_items: pedido.get('detalles')
            });

        });
        
        return status.okGet(res,'consulta exitosa', pedidos);
        
    }).catch(err=>{
        console.log(err);
        res.status(404).json(err);
    });

};


const obtenerDatosDetalleFactura = async(req, res) =>{
    let idProducto = req.params.producto;
    let idPedido = req.params.pedido;

    modelo.Detallefactura.findAll({
        where:{
            PedidoId: idFactura
        },
        include:[
            {
                model: modelo.Pedido,
                where:{
                    id:idProducto
                }
            }
        ]
    }).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(404).json(err);
    });
};

const ObtenerPedido = async (req, res)=>{
    let id_factura = req.params.id;
    let cliente_nombre = req.body.nombre;
    modelo.Factura.findOne({
        where:{
            id:id_factura
        },
        include:[
            {
                model: modelo.Cliente
               
            }
        ]
    }).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(404).json(err);
    });
};

function inicializarTransaccion(){
	return new Promise((resolve, reject) => {
		sequelize.transaction(
      { autocommit: false
      }
    ).then( result => {
			return resolve(result);
		})
		.catch( fail => {
			return reject(fail);
		});
	});
};

// retorno de todas las funciones
return module.exports={
    CrearNuevaPromocion,
    ObtenerPedido,
    ListadoDePedidos,
    CheckOutPedido,
    obtenerDatosDetalleFactura
};