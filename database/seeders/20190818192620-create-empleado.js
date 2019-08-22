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

   return queryInterface.bulkInsert('Empleados', [{
    codigointerno:'ABC123',
    nombres: 'JUAN IVAN',
    apellidos: 'PENAFIEL CADENA',
    ruc: "0926333392001",
    email: "malldelsol@mail.com",
    fecha_nacimiento: '1989-11-10',
    telefono: "2456789",
    password:"jose1234",
    estado:true,
    EmpresaId:1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    codigointerno:'XYZ456',
    nombres: 'JOSE ANDRE',
    apellidos: 'ALCIVAR GARCIA',
    ruc: "0926333392001",
    email: "malldelsol@mail.com",
    fecha_nacimiento: '1989-08-10',
    telefono: "2456789",
    password:"jose1234",
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

   return queryInterface.bulkDelete('Empleados', null, {});
  }
};
