'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    codigointerno: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    ruc: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Empleado.associate = function(models) {
    // associations can be defined here
    Empleado.belongsTo(models.Empresa);
  };

  Empleado.CrearEmpleado = (ll_empleado, transaction)=>{
    return new Promise((resolve, reject)=>{
      return Empleado.create(ll_empleado, {transaction}).then(result=>{
        return resolve(result);
      }).catch(fail=>{
        return reject(fail);
      });
    });
  };

  return Empleado;
};