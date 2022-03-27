module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderId: {
        references: {
          model: "Users",
          key: "id"
        },
        type: Sequelize.INTEGER
      },
      asigneeId: {
        references: {
          model: "Users",
          key: "id"
        },
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      emailBody: {
        type: Sequelize.STRING
      },
      resolutionDetails: {
        type: Sequelize.STRING
      },
      dateCreated: {
        type: Sequelize.DATE
      },
      dateUpdated: {
        type: Sequelize.DATE
      },
      status: {
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
    await queryInterface.dropTable('ContactAdmins');
  }
};