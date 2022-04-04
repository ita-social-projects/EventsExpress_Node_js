module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [{
       name: 'Drawing',
       categoryGroupId: 1,
	   createdAt: new Date(),
	   updatedAt: new Date(),
     },
     {
      name: 'Pottery',
      categoryGroupId: 1,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
     {
      name: 'Self-education',
      categoryGroupId: 2,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
    {
      name: 'Public Speaking',
      categoryGroupId: 2,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
    {
      name: 'Book Club',
      categoryGroupId: 2,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
    {
      name: 'Climbing',
      categoryGroupId: 3,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
    {
      name: 'Volleyball',
      categoryGroupId: 3,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    },
    {
      name: 'Football',
      categoryGroupId: 3,
	  createdAt: new Date(),
	  updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Categories', null, {}),
};
