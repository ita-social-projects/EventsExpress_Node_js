 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventRelationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userFromId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "Users",
        //   key: "id"
        //   }
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "Events",
        //   key: "id"
        //   }
      },
      score: {
        type: Sequelize.TINYINT,
        allowNull: true,
      },
      discriminator: {
        type: Sequelize.STRING(450),
        allowNull: false,
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
    await queryInterface.dropTable('EventRelationships');
  }
};