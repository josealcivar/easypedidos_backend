'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fecha: {
        type: Sequelize.DATE
      },
      subtotal: {
        type: Sequelize.DECIMAL
      },
      impuesto: {
        type: Sequelize.DECIMAL
      },
      porcimpuesto: {
        type: Sequelize.DECIMAL
      },
      descuento: {
        type: Sequelize.DECIMAL
      },
      porcdesct: {
        type: Sequelize.DECIMAL
      },
      total: {
        type: Sequelize.DECIMAL
      },
      estado_orden: {
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
    return queryInterface.dropTable('Pedidos');
  }
};