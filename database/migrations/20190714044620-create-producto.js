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
        type: Sequelize.DECIMAL(10,2)
      },
      precio2: {
        type: Sequelize.DECIMAL(10,2)
      },
      precio3: {
        type: Sequelize.DECIMAL(10,2)
      },
      precio4: {
        type: Sequelize.DECIMAL(10,2)
      },
      porcentajepromo: {
        type: Sequelize.DECIMAL(10,2)
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
      EmpresaId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Empresas',
          key: 'id'
        }
        
      },
      GrupoId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Grupos',
          key: 'id'
        }
        
      },
      MarcaId: {
        type: Sequelize.BIGINT,
        allowNull: false,

        references: {         // User belongsTo Company 1:1
          model: 'Marcas',
          key: 'id'
        }
        
      },
      Tipo_productoId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {         
          model: 'Tipo_productos',
          key: 'id'
        }
        
      },
      CaracteristicaId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {         
          model: 'Caracteristicas',
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
    return queryInterface.dropTable('Productos');
  }
};