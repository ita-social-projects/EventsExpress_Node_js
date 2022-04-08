module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserEvents',
      [
        {
          userId: 1,
          eventId: 1,
          status: 1,
          userStatusEvent: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 2,
          status: 0,
          userStatusEvent: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          eventId: 3,
          status: 1,
          userStatusEvent: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserEvents', null, {});
  },
};
