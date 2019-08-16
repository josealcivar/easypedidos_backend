'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Empresas', [{
           
        razonsocial: 'ALMACENES ESTUARDO SANCHEZ S.A.',
        ruc: "0926333392001",
        email: "estuardo@mail.com",
        direccion: "6 DE MARZO Y L. GARAICOA",
        telefono: "2456789",
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
*/
      return queryInterface.bulkDelete('Empresas', null, {});
    
  }
};
