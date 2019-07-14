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
  };
  return Detalle_pedido;
};