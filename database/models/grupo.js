'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupo = sequelize.define('Grupo', {
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Grupo.associate = function(models) {
    // associations can be defined here

    Grupo.CrearGrupo = (ll_grupo, transaction)=>{
    
      return new Promise((resolve, reject)=>{
        return Grupo.create(ll_grupo, {transaction}).then(result=>{
          return resolve(result);
        }).catch(fail=>{
          return reject(fail);
        });
      });
    };

  };
  return Grupo;
};