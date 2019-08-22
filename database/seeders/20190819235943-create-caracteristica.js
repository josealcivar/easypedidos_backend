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

   return queryInterface.bulkInsert('Caracteristicas', [
    {
      observacion: 'SERVICIO TECNICO DEL SISTEMA DE AMORTIGUACION',
      estado:true,
      EmpresaId:1,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    observacion: 'SERVICIO DE GUARDIANIA',
     estado:true,
     EmpresaId:1,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    observacion: 'OBSERVACION DE MANTENIMIENTO',
     estado:true,
     EmpresaId:1,
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('Caracteristicas', null, {});

  }
};
