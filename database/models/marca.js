'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define('Marca', {
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Marca.associate = function(models) {
    // associations can be defined here
  };
    
  Marca.CrearMarca = (ll_marca, transaction)=>{
    return new Promise((resolve, reject)=>{
      return Marca.create(ll_marca, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };



  return Marca;
};