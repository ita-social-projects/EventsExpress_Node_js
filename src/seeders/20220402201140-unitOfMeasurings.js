module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UnitOfMeasurings',
      [
        {
          unitName: 'meter',
          shortName: 'm',
          isDeleted: false,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: 'second',
          shortName: 's',
          isDeleted: false,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: 'kilogram',
          shortName: 'kg',
          isDeleted: false,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitName: 'ampere',
          shortName: 'a',
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
    await queryInterface.bulkDelete('UnitOfMeasurings', null, {});
  },
};
