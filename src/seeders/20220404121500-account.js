module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("accounts", [
      { userId: 1, isBlocked: 0, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, isBlocked: 0, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, isBlocked: 0, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("accounts", null, {}),
};
