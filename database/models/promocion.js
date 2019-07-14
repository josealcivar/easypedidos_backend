'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promocion = sequelize.define('Promocion', {
    fecha: DataTypes.DATE,
    comentario: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Promocion.associate = function(models) {
    // associations can be defined here
  };
  return Promocion;
};