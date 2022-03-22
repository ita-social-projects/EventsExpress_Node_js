module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AuthExternals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      accountId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Accounts",
          key: "id",
        },
      },
      type: {
        type: Sequelize.STRING,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AuthExternals");
  },
};
