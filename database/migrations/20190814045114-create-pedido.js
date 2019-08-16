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
        type: Sequelize.DECIMAL(10,2)
      },
      impuesto: {
        type: Sequelize.DECIMAL(10,2)
      },
      porcimpuesto: {
        type: Sequelize.DECIMAL(10,2)
      },
      descuento: {
        type: Sequelize.DECIMAL(10,2)
      },
      porcdesct: {
        type: Sequelize.DECIMAL(10,2)
      },
      total: {
        type: Sequelize.DECIMAL(10,2)
      },
      estado_orden: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      EmpresaId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Empresas',
          key: 'id'
        }
        
      },
      SucursalId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Sucursals',
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
    return queryInterface.dropTable('Pedidos');
  }
};