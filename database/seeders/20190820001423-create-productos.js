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

   return queryInterface.bulkInsert('Productos', [
    {
      codigointerno: 'ABC1234',
      description: "CELULAR HUAWEI",
      destacado: 'S',
      stock: 125,
      precio1: 124.55,
      precio2: 124.55,
      precio3: 124.55,
      precio4: 124.55,
      origen: "francia",
      rutaimagen: "/imagen/formato/pdf",
      MarcaId: 1,
      GrupoId:1,
      CaracteristicaId:1,
      Tipo_productoId:1,
      EmpresaId:1,
      estado:true,
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Productos', null, {});
    */
   return queryInterface.bulkDelete('Productos', null, {});
  }
};
