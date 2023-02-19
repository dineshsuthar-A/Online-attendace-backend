const express = require('express');
const router = express.Router();
const log = require('../Controller/AddTimeTable');

router.post("/api/add/timetable", log.addTimeTable);
router.get("/api/get/timetable", log.getTimeTable);

module.exports = router;