module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      dateFrom: {
        type: Sequelize.DATE,
      },
      dateTo: {
        type: Sequelize.DATE,
      },
      maxParticipants: {
        type: Sequelize.INTEGER,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
      },
      eventLocationId: {
        type: Sequelize.INTEGER,
      },
      eventAudienceId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  },
};
