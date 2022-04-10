module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "unitofmeasurings",
      [
        {
          unitName: "Meter",
          shortName: "M",
          isDeleted: false,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: "Second",
          shortName: "S",
          isDeleted: false,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: "Kilogram",
          shortName: "Kg",
          isDeleted: false,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: "Ampere",
          shortName: "A",
          isDeleted: false,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("unitofmeasurings", null, {});
  },
};
