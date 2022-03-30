 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UnitOfMeasurings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unitName: {
        type: Sequelize.STRING(450),
        allowNull: true,
      },
      shortName: {
        type: Sequelize.STRING(450),
        allowNull: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CategoriesOfMeasurings",
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
    await queryInterface.dropTable('UnitOfMeasurings');
  }
};