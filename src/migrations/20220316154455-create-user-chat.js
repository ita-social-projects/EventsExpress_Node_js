module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserChats', {
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
      chatId: {
		allowNull: false,
		references: {
			model: "ChatRooms",
			key: "id"
		},
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
    await queryInterface.dropTable('UserChats');
  }
};