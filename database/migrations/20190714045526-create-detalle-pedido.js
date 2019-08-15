'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Detalle_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      secuencia: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      tipo_precio: {
        type: Sequelize.STRING
      },
      precio_vta: {
        type: Sequelize.DECIMAL(10,2)
      },
      porcdesct: {
        type: Sequelize.DECIMAL(10,2)
      },
      porc_promo: {
        type: Sequelize.DECIMAL(10,2)
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      PedidoId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Pedidos',
          key: 'id'
        }
        
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
    return queryInterface.dropTable('Detalle_pedidos');
  }
};