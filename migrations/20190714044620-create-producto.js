'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      codigointerno: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      destacado: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precio1: {
        type: Sequelize.DECIMAL
      },
      precio2: {
        type: Sequelize.DECIMAL
      },
      precio3: {
        type: Sequelize.DECIMAL
      },
      precio4: {
        type: Sequelize.DECIMAL
      },
      porcentajepromo: {
        type: Sequelize.DECIMAL
      },
      origen: {
        type: Sequelize.STRING
      },
      rutaimagen: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Productos');
  }
};