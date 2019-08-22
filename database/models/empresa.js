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
    Empresa.hasMany(models.Cliente);
    Empresa.hasMany(models.Sucursal);
  };


  Empresa.CrearEmpresa = (ll_empresa, transaction)=>{
    
    return new Promise((resolve, reject)=>{
      return Empresa.create(ll_empresa, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  return Empresa;
};