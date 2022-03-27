const createModal = require ( '../models/events.js');
const {db} = require ('../databaseSetup');
const {DataTypes} = require ('sequelize');

const Events = createModal(db, DataTypes);

export const getAllEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.json(events);
    } catch (error) {
        res.json({ message: error.message });
    }  
}