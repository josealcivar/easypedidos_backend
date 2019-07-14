'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define('Marca', {
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Marca.associate = function(models) {
    // associations can be defined here
  };
  return Marca;
};