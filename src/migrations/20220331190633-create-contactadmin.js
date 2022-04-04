'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contactAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderId: {
        type: Sequelize.INTEGER
      },
      asigneeId: {
        type: Sequelize.INTEGER
      },
      messageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
		    references: {
		      	model: "Messages",
		       	key: "id"
        }
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