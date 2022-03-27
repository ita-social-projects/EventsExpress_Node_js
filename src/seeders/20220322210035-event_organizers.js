module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("event_organizers", [{
      userId: 1,
      eventId: 1, 
    },
    {
      userId: 2,
      eventId: 2, 
    },
    {
      userId: 3,
      eventId: 3, 
    },
    {
      userId: 4,
      eventId: 4, 
    },
    {
      userId: 5,
      eventId: 5, 
    },
    {
      userId: 6,
      eventId: 6, 
    },
    {
      userId: 7,
      eventId: 7, 
    },
    {
      userId: 8,
      eventId: 8, 
    },
  ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("event_organizers", null, {}),
};
