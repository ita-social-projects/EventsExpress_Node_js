module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserEvents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      eventId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "Events",
          key: "id",
        },
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userStatusEvent: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("UserEvents");
  },
};
