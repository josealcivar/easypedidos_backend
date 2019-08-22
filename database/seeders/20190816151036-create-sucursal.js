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

   return queryInterface.bulkInsert('Sucursals', [
     {
    nombre: 'SUCURSAL CENTRO',
    direccion: "6 DE MARZO Y L. GARAICOA",
    celular:'0987334572',
    representante:'CARLOS ARCHUNDIA',
    email: 'mail@mail.com',
    telefono: "2456789",
    estado:true,
    EmpresaId:1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  nombre: 'SUCURSAL ALBORADA',
  direccion: "9 DE OCTUBRE",
  celular:'0987334572',
  representante:'FELIPE CRESPO',
  email: 'mail@mail.com',
  telefono: "2456789",
  estado:true,
  EmpresaId:1,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  nombre: 'SUCURSAL SUR',
    direccion: "6 DE MARZO Y L. GARAICOA",
    celular:'0987334572',
    representante:'JOSE ARCENTALES',
    email: 'mail@mail.com',
    telefono: "2456789",
    estado:true,
    EmpresaId:2,
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
   return queryInterface.bulkDelete('Sucursals', null, {});
  }
};
