module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      userId: {
        references: {
          model: "Users",
          key: "id"
        },
        type: Sequelize.INTEGER
      },
      eventId: {
        references: {
          model: "Events",
          key: "id"
        },
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      commentsId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Comments');
  }
};