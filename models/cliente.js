'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    codigointerno: DataTypes.STRING,
    razonsocial: DataTypes.STRING,
    ruc: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    tipoprecio: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};