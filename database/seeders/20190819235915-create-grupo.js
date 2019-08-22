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

    
   return queryInterface.bulkInsert('Grupos', [
    {
   descripcion: 'LINEA BLANCA',
   estado:true,
   EmpresaId:1,
   createdAt: new Date(),
   updatedAt: new Date()
},
{
  descripcion: 'LINEA NEGRA',
  estado:true,
  EmpresaId:1,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  descripcion: 'LINEA AZUL',
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
      return queryInterface.bulkDelete('Grupos', null, {});
    */

   return queryInterface.bulkDelete('Grupos', null, {});

  }
};
