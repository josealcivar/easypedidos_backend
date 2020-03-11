'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sucursal = sequelize.define('Sucursal', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    representante: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Sucursal.associate = function(models) {
    // associations can be defined here
    Sucursal.belongsTo(models.Empresa);
  };


    
  Sucursal.CrearSucursal = (ll_grupo, transaction)=>{
    
    return new Promise((resolve, reject)=>{
      return Sucursal.create(ll_grupo, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  Sucursal.EncontrarSucursal = (ll_grupo, transaction)=>{
    
    return new Promise((resolve, reject)=>{
      return Sucursal.create(ll_grupo, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  return Sucursal;
};