module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventStatusHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
		allowNull: false,
		references: {
			model: "Users",
			key: "id"
		},
        type: Sequelize.INTEGER
      },
      eventId: {
		allowNull: false,
        type: Sequelize.INTEGER
      },
      eventStatus: {
		allowNull: false,
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.STRING
      },
      createdOn: {
		allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('EventStatusHistories');
  }
};