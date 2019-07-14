'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define('Vendedor', {
    codigointerno: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    ruc: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Vendedor.associate = function(models) {
    // associations can be defined here
  };
  return Vendedor;
};