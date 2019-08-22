'use strict';
module.exports = (sequelize, DataTypes) => {
  const Detalle_pedido = sequelize.define('Detalle_pedido', {
    secuencia: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    tipo_precio: DataTypes.STRING,
    precio_vta: DataTypes.DECIMAL,
    porcdesct: DataTypes.DECIMAL,
    porc_promo: DataTypes.DECIMAL,
    estado: DataTypes.BOOLEAN
  }, {});
  Detalle_pedido.associate = function(models) {
    // associations can be defined here
    Detalle_pedido.belongsTo(models.Pedido);
    Detalle_pedido.belongsTo(models.Producto);
  };

        // funcion para crear la cabecera del detalle factura
        Detalle_pedido.createDetallePedido = (ll_detallePedido, transaction) => {
          console.log("detalle pedido");
          console.log(ll_detallePedido);
          return new Promise ((resolve, reject) => {
            return Detalle_pedido.create(ll_detallePedido,{transaction}).then(detallePedido=>{
              return resolve(detallePedido);
              }).catch(fail=>{
                console.log(fail);
                return reject(fail);
              });
            });
          };


  return Detalle_pedido;
};