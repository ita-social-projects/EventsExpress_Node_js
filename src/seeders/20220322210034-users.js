module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Anton Khomitskiy',
        email: 'anton.tsar02@gmail.com',
        phone: '+380501678079',
        birthday: '2002-02-22',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stanislav Vyhnan',
        email: 'stanislav.vyhnan@gmail.com',
        phone: '+380509201232',
        birthday: '2002-09-25',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lesia Mandziuk',
        email: 'mandziuk@gmail.com',
        phone: '+380662991029',
        birthday: '2000-03-21',
        gender: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vlad Babiak',
        email: 'babiak@gmail.com',
        phone: '+380951822010',
        birthday: '2003-03-19',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roman Basaraba',
        email: 'basaraba@gmail.com',
        phone: '+380500932022',
        birthday: '1995-03-24',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ihor Kapatsila',
        email: 'kapatsila@gmail.com',
        phone: '+380664573829',
        birthday: '1985-12-14',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Andrii Kuzmichov',
        email: 'kuzmichov@gmail.com',
        phone: '+380508887980',
        birthday: '1999-08-02',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vadym Kharyton',
        email: 'kharyton@gmail.com',
        phone: '+380662990028',
        birthday: '2000-03-09',
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
};
