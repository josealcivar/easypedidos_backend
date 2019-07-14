'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caracteristica = sequelize.define('Caracteristica', {
    observacion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Caracteristica.associate = function(models) {
    // associations can be defined here
  };
  return Caracteristica;
};