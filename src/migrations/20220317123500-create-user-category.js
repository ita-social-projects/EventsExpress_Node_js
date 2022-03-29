 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
         references: {
          model: "Users",
           key: "id"
  },
      },
      caregoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
           key: "id"
  },
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
    await queryInterface.dropTable('UserCategories');
  }
};