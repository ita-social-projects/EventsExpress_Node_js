module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderId: {
		allowNull: false,
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER
      },
      dateCreated: {
		allowNull: false,
        type: Sequelize.DATE
      },
      edited: {
		allowNull: false,
        type: Sequelize.BOOLEAN
      },
      text: {
		allowNull: false,
        type: Sequelize.STRING
      },
      chatRoomId: {
		allowNull: false,
		references: {
			model: "ChatRooms",
			key: "id"
		},
        type: Sequelize.INTEGER
      },
      seen: {
		allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Messages');
  }
};