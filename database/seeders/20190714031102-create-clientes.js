'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

      */
      return queryInterface.bulkInsert('Clientes', [{
        codigointerno:'ABC123',
        razonsocial: 'CENTRO COMERCIAL MALL DEL SOL',
        ruc: "0926333392001",
        email: "malldelsol@mail.com",
        direccion: "6 DE MARZO Y L. GARAICOA",
        telefono: "2456789",
        tipoprecio:"A",
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
    */
      return queryInterface.bulkDelete('Clientes', null, {});
    
  }
};
