module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("contactadmins", [
      {
        senderId: 1234,
        asigneeId: 35467,
        messageId: 2,
        email: "meriv@gmail.com",
        subject: 3,
        title: "Contact me",
        emailBody: "",
        resolutionDetails: "",
        dateCreated: new Date(),
        dateUpdated: new Date(),
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        senderId: 1234,
        asigneeId: 35467,
        messageId: 3,
        email: "jannetrmstrong@gmail.com",
        subject: 3,
        title: "Contact me, if u have questions",
        emailBody: "Hello all!",
        resolutionDetails: "",
        dateCreated: new Date(),
        dateUpdated: new Date(),
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        senderId: 1234,
        asigneeId: 35467,
        messageId: 4,
        email: "johnrmstrong@gmail.com",
        subject: 3,
        title: "Contact me, if u have questions",
        emailBody: "Hello all!",
        resolutionDetails: "",
        dateCreated: new Date(),
        dateUpdated: new Date(),
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("contactadmins", null, {});
  },
};
