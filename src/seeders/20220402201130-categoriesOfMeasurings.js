module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'CategoriesOfMeasurings',
      [
        {
          categoryName: 'length',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'time',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'mass',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'electric current',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'temperature',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'intensity',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'number',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('CategoriesOfMeasurings', null, {}),
};
