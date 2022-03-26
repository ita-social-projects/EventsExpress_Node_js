module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("events", [
      {
        title: "Vegan For Beginners Online Workshop",
        description:
          "More and more people are interested in vegan/plant-based eating. Some are curious, some want to get their feet wet, and others are ready to come to the V-side! I am here for you all! I offer information to introduce you to what eating vegan is like. This workshop occurs on Zoom and it would be awesome if you turned your camera on!",
        dateFrom: "2022-03-02 17:30:00",
        dateTo: "2022-03-02 18:30:00",
        maxParticipants: 100,
        isPublic: true,
        eventLocationId: 2,
        eventAudienceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          "Football, Finances & Fundraising Workshop - Get top tips to help your club",
        description:
          "The workshop will cover a range of areas including: budgeting, planning, grant funding, sponsorship, fundraising. Attendees will receive advice and ideas from the tutor and be encouraged to share their experiences and views in breakouts rooms.",
        dateFrom: "2022-03-02 13:30:00",
        dateTo: "2022-03-02 18:30:00",
        maxParticipants: 200,
        isPublic: true,
        eventLocationId: 3,
        eventAudienceId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "THE PORTRAIT IN ISOLATION: TONAL PAINTING Online Session",
        description:
          "Painting from the model can be difficult to navigate, balancing colour, tone, proportions, perspective, composition, and emotional narrative. Through this class we will get back to the basics of life-painting, referencing the work of some of the great life-painters, William Etty, Lucien Freud, Euan Uglow, Jenny Saville and more, mining their work for their wisdom on painting TONE, all whilst using yourself as the model!",
        dateFrom: "2022-06-02 14:30:00",
        dateTo: "2022-06-02 18:30:00",
        maxParticipants: 250,
        isPublic: true,
        eventLocationId: 4,
        eventAudienceId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Relationships, Family, and Mental Health",
        description:
          "Learn strategies to set boundaries, respond to difficult behavior, and manage your own stress with a licensed therapist.",
        dateFrom: "2022-03-02 17:30:00",
        dateTo: "2022-03-02 18:30:00",
        maxParticipants: 100,
        isPublic: true,
        eventLocationId: 5,
        eventAudienceId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Virtual yoga: classic flow",
        description:
          "Join NYRR yoga instructors for an invigorating at-home yoga session tailored specifically to meet the needs of runners.",
        dateFrom: "2022-07-02 09:00:00",
        dateTo: "2022-03-02 10:30:00",
        maxParticipants: 100,
        isPublic: true,
        eventLocationId: 6,
        eventAudienceId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fitness for Older Adults",
        description:
          "Join Us and Renae Puco for this basic exercise class, geared toward the fitness needs of older adults.",
        dateFrom: "2022-03-02 17:30:00",
        dateTo: "2022-03-02 18:30:00",
        maxParticipants: 100,
        isPublic: true,
        eventLocationId: 7,
        eventAudienceId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Virtual Strength Class",
        description:
          "Join an expert NYRR strength instructor for an invigorating at-home strength class tailored specifically to meet the needs of runners.",
        dateFrom: "2022-07-02 17:30:00",
        dateTo: "2022-07-02 18:30:00",
        maxParticipants: 200,
        isPublic: true,
        eventLocationId: 8,
        eventAudienceId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "YouTube for musicians",
        description:
          "YouTube for Musicians - free Online Event for musicians that want to grow their fanbase.",
        dateFrom: "2022-07-02 17:30:00",
        dateTo: "2022-07-02 18:30:00",
        maxParticipants: 300,
        isPublic: true,
        eventLocationId: 9,
        eventAudienceId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("events", null, {}),
};
