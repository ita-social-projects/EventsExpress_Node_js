const express = require("express");
const container = require("../middlewares/container");

const {
  getAllEvents,
  getEventsById,
  addEvents,
  deleteEvents,
} = require("../controllers/event.js");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", container(getEventsById));
router.post("/", container(addEvents));
router.delete('/:id', container(deleteEvents));
module.exports = router;
