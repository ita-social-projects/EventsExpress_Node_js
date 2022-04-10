module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventLocations', [
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: true,
        type: 'online',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: false,
        type: 'map',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: true,
        type: 'online',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: false,
        type: 'map',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: true,
        type: 'online',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: false,
        type: 'map',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: true,
        type: 'online',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        onlineMeeting: true,
        type: 'online',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('EventLocations', null, {}),
};
