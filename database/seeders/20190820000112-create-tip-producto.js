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
   return queryInterface.bulkInsert('Tipo_productos', [
   {
    descripcion: 'BULTO',
    estado:true,
    EmpresaId:1,
    createdAt: new Date(),
    updatedAt: new Date()
 },
 {
   descripcion: 'LIQUIDO',
   estado:true,
   EmpresaId:1,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   descripcion: 'SOLIDO',
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
      return queryInterface.bulkDelete('Tipo_productos', null, {});
    */

   return queryInterface.bulkDelete('Tipo_productos', null, {});

  }
};
