'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    razonsocial: DataTypes.STRING,
    ruc: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Empresa.associate = function(models) {
    // associations can be defined here
  };
  return Empresa;
};