'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    codigointerno: DataTypes.STRING,
    razonsocial: DataTypes.STRING,
    ruc: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    tipoprecio: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Cliente.associate = function(models) {
      // associations can be defined here
      Cliente.belongsTo(models.Empresa);
  };


  Cliente.CrearCliente = (ll_cliente, transaction)=>{
    return new Promise((resolve, reject)=>{
      return Cliente.create(ll_cliente, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  return Cliente;
};