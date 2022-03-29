module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('event_organizers', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id"
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('event_organizers');
  }
};