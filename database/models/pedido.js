'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    fecha: DataTypes.DATE,
    subtotal: DataTypes.DECIMAL,
    impuesto: DataTypes.DECIMAL,
    porcimpuesto: DataTypes.DECIMAL,
    descuento: DataTypes.DECIMAL,
    porcdesct: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    estado_orden: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Pedido.associate = function(models) {
    // associations can be defined here

    Pedido.belongsTo(models.Empresa);
    Pedido.belongsTo(models.Sucursal);
    Pedido.belongsTo(models.Cliente);
    Pedido.belongsTo(models.Empleado);
    Pedido.hasMany(models.Detalle_pedido);

  };


  // funcion para crear la cabecera de la factura
  Pedido.CrearPedido = (ll_pedido, transaction) => {
    return new Promise ((resolve, reject) => {
      console.log("data cabecera");
      console.log(ll_pedido);
      //if(!ll_factura.razonsocial) return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso razon social'));
      return Pedido.create(ll_pedido,{transaction}).then(pedido=>{
        console.log("debe imprimir pedido");
        console.log(pedido);
        return resolve(pedido);
        }).catch(fail=>{
          console.log(fail);
          return reject(fail);
        });
      });
    };


  return Pedido;
};