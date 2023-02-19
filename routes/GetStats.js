const express = require('express');
const router = express.Router();
const log = require('../Controller/GetStats');
const { route } = require('./AddClass');

router.get("/api/get/stats", log.getData);
router.get("/api/get/student/attendace/data", log.getStudentAttendanceData);
module.exports = router;