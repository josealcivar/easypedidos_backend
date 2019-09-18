'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    codigointerno: DataTypes.STRING,
    description: DataTypes.STRING,
    destacado: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio1: DataTypes.DECIMAL,
    precio2: DataTypes.DECIMAL,
    precio3: DataTypes.DECIMAL,
    precio4: DataTypes.DECIMAL,
    porcentajepromo: DataTypes.DECIMAL,
    origen: DataTypes.STRING,
    rutaimagen: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here

    Producto.belongsTo(models.Empresa);
    Producto.belongsTo(models.Grupo);
    Producto.belongsTo(models.Caracteristica);
    Producto.belongsTo(models.Tipo_producto);


  };

  Producto.CrearProducto = (ll_producto, transaction)=>{
    return new Promise((resolve, reject)=>{
      return Producto.create(ll_producto, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  return Producto;
};