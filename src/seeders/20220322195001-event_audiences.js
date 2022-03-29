module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("event_audiences", [
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
    queryInterface.bulkDelete("event_audiences", null, {}),
};
