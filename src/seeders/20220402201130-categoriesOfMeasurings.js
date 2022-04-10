module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "CategoriesOfMeasurings",
      [
        {
          categoryName: "Length",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Time",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Mass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Electric current",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Temperature",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Intensity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Number",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("CategoriesOfMeasurings", null, {}),
};
