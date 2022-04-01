module.exports = {
 up: (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert("users", [
		{
		  name: "Anton Khomitskiy",
		  email: "anton.tsar02@gmail.com",
		  phone: "+380501678079",
		  birthday: "2002-02-22",
		  gender: false,
		  createdAt: new Date(),
		  updatedAt: new Date(),
		},
		{
		  name: "Stanislav Vyhnan",
		  email: "stanislav.vyhnan@gmail.com",
		  phone: "+380509201232",
		  birthday: "2002-09-25",
		  gender: false,
		  createdAt: new Date(),
		  updatedAt: new Date(),
		},
		{
  		  name: "Lesia Mandziuk",
		  email: "mandziuk@gmail.com",
		  phone: "+380662991029",
		  birthday: "2000-03-21",
		  gender: true,
		  createdAt: new Date(),
		  updatedAt: new Date(),
		},
	  ]);
  },

  down: (queryInterface, Sequelize) => 
	queryInterface.bulkDelete('users', null, {}),
  
};
