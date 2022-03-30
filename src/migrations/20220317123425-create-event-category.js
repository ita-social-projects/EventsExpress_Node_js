 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
         references: {
          model: "Events",
          key: "id"
  },
      },
      caregoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('EventCategories');
  }
};