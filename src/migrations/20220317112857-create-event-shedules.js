module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('eventshedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      frequency: {
        type: Sequelize.INTEGER
      },
      lastRun: {
        type: Sequelize.DATE(6)
      },
      nextRun: {
        type: Sequelize.DATE(6)
      },
      periodicity: {
        type: Sequelize.STRING 
      },
      isActive: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('eventshedules');
  }
};