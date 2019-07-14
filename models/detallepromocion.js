'use strict';
module.exports = (sequelize, DataTypes) => {
  const Detallepromocion = sequelize.define('Detallepromocion', {
    secuencia: DataTypes.INTEGER,
    fechadesde: DataTypes.DATE,
    fechahasta: DataTypes.DATE,
    porcentaje: DataTypes.DECIMAL(10,2)
  }, {});
  Detallepromocion.associate = function(models) {
    // associations can be defined here
  };
  return Detallepromocion;
};