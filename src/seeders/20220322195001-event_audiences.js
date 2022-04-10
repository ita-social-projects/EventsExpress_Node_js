module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventAudiences', [
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isOnlyForAdults: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('EventAudiences', null, {}),
};
