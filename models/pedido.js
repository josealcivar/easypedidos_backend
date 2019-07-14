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
  };
  return Pedido;
};