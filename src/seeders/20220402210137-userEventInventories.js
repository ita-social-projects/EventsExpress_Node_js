module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usereventinventories",
      [
        {
          eventId: 1,
          userId: 1,
          inventoryId: 1,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          userId: 2,
          inventoryId: 2,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usereventinventories", null, {});
  },
};
