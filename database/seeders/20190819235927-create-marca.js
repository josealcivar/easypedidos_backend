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

   return queryInterface.bulkInsert('Marcas', [
    {
      descripcion: 'CHEVROLET',
      estado:true,
      EmpresaId:1,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
     descripcion: 'HYUNDAI',
     estado:true,
     EmpresaId:1,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     descripcion: 'TOYOTA',
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
      return queryInterface.bulkDelete('Marcas', null, {});
    */

   return queryInterface.bulkDelete('Marcas', null, {});
  }
};
