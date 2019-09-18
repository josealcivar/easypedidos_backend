'use strict';
module.exports = (sequelize, DataTypes) => {
  const Det_caracteristica = sequelize.define('Det_caracteristica', {
    secuencia: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Det_caracteristica.associate = function(models) {
    // associations can be defined here
  };
         // funcion para crear la cabecera del detalle factura
         Det_caracteristica.createDetalleCaracteristica = (ll_det_caracteristica, transaction) => {
          console.log("detalle pedido");
          console.log(ll_det_caracteristica);
          return new Promise ((resolve, reject) => {
            return Det_caracteristica.create(ll_det_caracteristica,{transaction}).then(
              detalleCaracteristica=>{
              return resolve(detalleCaracteristica);
              }).catch(fail=>{
                console.log(fail);
                return reject(fail);
              });
            });
          };
          
  return Det_caracteristica;
};