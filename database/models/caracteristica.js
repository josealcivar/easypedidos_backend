'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caracteristica = sequelize.define('Caracteristica', {
    observacion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {});
  Caracteristica.associate = function(models) {
    // associations can be defined here



  };

        // funcion para crear la cabecera de la factura
        Caracteristica.CrearCaracteristica = (ll_caracteristica, transaction) => {
          return new Promise ((resolve, reject) => {
            console.log("data cabecera");
            console.log(ll_caracteristica);
            //if(!ll_factura.razonsocial) return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso razon social'));
            return Caracteristica.create(ll_caracteristica,{transaction}).then(caracteristica=>{
              console.log("debe imprimir caracteristica");
              console.log(caracteristica);
              return resolve(caracteristica);
              }).catch(fail=>{
                console.log(fail);
                return reject(fail);
              });
            });
          };

          
  return Caracteristica;
};