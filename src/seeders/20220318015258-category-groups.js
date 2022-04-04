module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('CategoryGroups', [{
        title: 'ArtAndCraftGroup',    
		createdAt: new Date(),
		updatedAt: new Date(),    
        },
        {
          title: 'EducationAndTraining', 
		  createdAt: new Date(),
		  updatedAt: new Date(),       
        },
        {
          title: 'WellnessHealthAndFitness',
		  createdAt: new Date(),
		  updatedAt: new Date(),        
        }], {});  
  },

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('CategoryGroups', null, {}), 
  
};
