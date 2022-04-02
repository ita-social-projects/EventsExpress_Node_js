const express = require("express");
const container = require("../middlewares/container");

const {
  getAllEvents,
  getEventsById,
  addEvents,
  deleteEvents,
  editEvents,
} = require("../controllers/event.js");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", container(getEventsById));
router.post("/", container(addEvents));
router.delete('/:id', container(deleteEvents));
router.patch(':id', container(editEvents));
module.exports = router;
