module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChangeInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entityName: {
        type: Sequelize.STRING
      },
      entityKeys: {
        type: Sequelize.STRING
      },
      userId: {
		allowNull: false,
		references: {
			model: "Users",
			key: "id"
		},
        type: Sequelize.INTEGER
      },
      propertyChangesText: {
        type: Sequelize.STRING
      },
      changesType: {
		allowNull: false,
        type: Sequelize.INTEGER
      },
      time: {
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
    await queryInterface.dropTable('ChangeInfos');
  }
};