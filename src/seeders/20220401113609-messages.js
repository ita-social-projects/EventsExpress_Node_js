module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Messages", [
      {
        senderId: 1234,
        parentId: 35467,
        dateCreated: new Date(),
        edited: false,
        text: "Thanks for your work",
        chatRoomId: 3,
        seen: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        senderId: 123,
        parentId: 35467,
        dateCreated: new Date(),
        edited: false,
        text: "Thanks for your work",
        chatRoomId: 3,
        seen: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        senderId: 134,
        parentId: 35467,
        dateCreated: new Date(),
        edited: false,
        text: "Thanks for your work",
        chatRoomId: 4,
        seen: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};