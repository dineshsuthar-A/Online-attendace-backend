const express = require('express');
const router = express.Router();
const log = require('../Controller/AddClass');


router.post("/api/class/add", log.addClass);
router.post("/api/class/delete", log.deleteClass);

router.get("/api/get/classes", log.getClass);
router.get("/api/get/attendace/classes", log.getattendanceClass);
module.exports = router;