'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupo = sequelize.define('Grupo', {
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Grupo.associate = function(models) {
    // associations can be defined here
  };
  return Grupo;
};