 

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Categories', [{
       name: 'Drawing',
       categoryGroupId: 1
     },
     {
      name: 'Pottery',
      categoryGroupId: 1
    },
     {
      name: 'Self-education',
      categoryGroupId: 2
    },
    {
      name: 'Public Speaking',
      categoryGroupId: 2
    },
    {
      name: 'Book Club',
      categoryGroupId: 2
    },
    {
      name: 'Climbing',
      categoryGroupId: 3
    },
    {
      name: 'Volleyball',
      categoryGroupId: 3
    },
    {
      name: 'Football',
      categoryGroupId: 3
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
      }
};
