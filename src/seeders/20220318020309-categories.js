'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Categories', [{
       name: 'Drawing',
       categoryGroupId: 4
     },
     {
      name: 'Pottery',
      categoryGroupId: 4
    },
     {
      name: 'Self-education',
      categoryGroupId: 5
    },
    {
      name: 'Public Speaking',
      categoryGroupId: 5
    },
    {
      name: 'Book Club',
      categoryGroupId: 5
    },
    {
      name: 'Climbing',
      categoryGroupId: 6
    },
    {
      name: 'Volleyball',
      categoryGroupId: 6
    },
    {
      name: 'Football',
      categoryGroupId: 6
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
      }
};
