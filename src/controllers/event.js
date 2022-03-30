const createModal = require ( '../models/events.js');
const {db} = require ('../databaseSetup');
const {DataTypes} = require ('sequelize');

const Events = createModal(db, DataTypes);

const getAllEvents = async (req, res) => {
 
        const events = await Events.findAll();
        res.json(events);
}
module.exports = {getAllEvents};