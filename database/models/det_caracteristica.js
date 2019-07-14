'use strict';
module.exports = (sequelize, DataTypes) => {
  const Det_caracteristica = sequelize.define('Det_caracteristica', {
    secuencia: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Det_caracteristica.associate = function(models) {
    // associations can be defined here
  };
  return Det_caracteristica;
};