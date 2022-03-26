module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AuthLocals", {
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
      passwordHash: {
        type: Sequelize.STRING,
      },
      salt: {
        type: Sequelize.STRING,
      },
      emailConfirmed: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("AuthLocals");
  },
};
