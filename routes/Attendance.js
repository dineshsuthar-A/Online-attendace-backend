const express = require('express');
const router = express.Router();
const log = require('../Controller/Attendance');

router.post("/api/attendance/submit", log.attendaceSubmit);

module.exports = router;