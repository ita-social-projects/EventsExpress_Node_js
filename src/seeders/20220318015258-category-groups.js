'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('CategoryGroups', [{
        title: 'ArtAndCraftGroup',        
        },
        {
          title: 'EducationAndTraining',        
        },
        {
          title: 'WellnessHealthAndFitness',        
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
   await queryInterface.bulkDelete('CategoryGroups', null, {});
     
  }
};
