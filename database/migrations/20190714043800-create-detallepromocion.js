'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Detallepromocions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      secuencia: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fechadesde: {
        type: Sequelize.DATE
      },
      fechahasta: {
        type: Sequelize.DATE
      },
      porcentaje: {
        type: Sequelize.DECIMAL(10,2)
      },
      PromocionId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Promocions',
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
    return queryInterface.dropTable('Detallepromocions');
  }
};