'use strict';
module.exports = (sequelize, DataTypes) => {
  const Detallepromocion = sequelize.define('Detallepromocion', {
    secuencia: DataTypes.INTEGER,
    fechadesde: DataTypes.DATE,
    fechahasta: DataTypes.DATE,
    porcentaje: DataTypes.DECIMAL(10,2)
  }, {});
  Detallepromocion.associate = function(models) {
    // associations can be defined here

           // funcion para crear la cabecera del detalle factura
           Detallepromocion.createDetallePromocion = (ll_detallePromocion, transaction) => {
            console.log("detalle promocion");
            console.log(ll_detallePromocion);
            return new Promise ((resolve, reject) => {
              return Detallepromocion.create(ll_detallePromocion,{transaction}).then(detallePromocion=>{
                return resolve(detallePromocion);
                }).catch(fail=>{
                  console.log(fail);
                  return reject(fail);
                });
              });
            };

            
  };
  return Detallepromocion;
};