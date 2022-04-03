module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "inventories",
      [
        {
          needQuantity: 3,
          itemName: "carrot",
          eventId: 1,
          unitOfMeasuringId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          needQuantity: 10,
          itemName: "ruler",
          eventId: 2,
          unitOfMeasuringId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("inventories", null, {});
  },
};
