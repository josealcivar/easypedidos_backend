'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo_producto = sequelize.define('Tipo_producto', {
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Tipo_producto.associate = function(models) {
    // associations can be defined here
  };
  return Tipo_producto;
};