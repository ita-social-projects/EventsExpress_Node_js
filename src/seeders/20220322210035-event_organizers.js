module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("event_organizers", [
      {
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        eventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        eventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("event_organizers", null, {}),
};
