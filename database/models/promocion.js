'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promocion = sequelize.define('Promocion', {
    fecha: DataTypes.DATE,
    comentario: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Promocion.associate = function(models) {
    // associations can be defined here
      // funcion para crear la cabecera de la factura
      Promocion.CrearPedido = (ll_promocion, transaction) => {
    return new Promise ((resolve, reject) => {
      console.log("data cabecera");
      console.log(ll_promocion);
      //if(!ll_factura.razonsocial) return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso razon social'));
      return Promocion.create(ll_promocion,{transaction}).then(promocion=>{
        console.log("debe imprimir pedido");
        console.log(promocion);
        return resolve(promocion);
        }).catch(fail=>{
          console.log(fail);
          return reject(fail);
        });
      });
    };

  };
  return Promocion;
};