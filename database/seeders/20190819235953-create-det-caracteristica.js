'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Det_caracteristicas', [
    {
      secuencia: 1,
      descripcion: "GSM / 2234 SERVICIO DE TODOS",
      estado:true,
      CaracteristicaId:1,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    secuencia: 2,
      descripcion: "WIFI LTE",
      estado:true,
      CaracteristicaId:1,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    secuencia: 3,
      descripcion: "TODOS",
      estado:true,
      CaracteristicaId:1,
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Det_caracteristicas', null, {});
    */

   return queryInterface.bulkDelete('Det_caracteristicas', null, {});
  }
};
