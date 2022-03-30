 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserEventInventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "UserEvents",
        //   key: "id"
        // },
      },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "UserEvents",
        //   key: "id"
        // },
      },
      inventoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        references: {
          model: "Inventories",
          key: "id"
        },
      },
      quantity: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserEventInventories');
  }
};