'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    codigointerno: DataTypes.STRING,
    description: DataTypes.STRING,
    destacado: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio1: DataTypes.DECIMAL,
    precio2: DataTypes.DECIMAL,
    precio3: DataTypes.DECIMAL,
    precio4: DataTypes.DECIMAL,
    porcentajepromo: DataTypes.DECIMAL,
    origen: DataTypes.STRING,
    rutaimagen: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};