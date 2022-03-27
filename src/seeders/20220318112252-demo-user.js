'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ContactAdmins', [{
    senderId: 1234,
    asigneeId: 35467,
    email: "janearmstrong@gmail.com",
    subject: 3,
    title: "Contact me, if u have questions",
    emailBody: "Hello all!",
    resolutionDetails: "",
    dateCreated: new Date(),
    dateUpdated: new Date(),
    status: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ContactAdmins', null, {});
  }
};
