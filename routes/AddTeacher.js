const express = require('express');
const router = express.Router();
const log = require('../Controller/AddTeacher');

router.post("/api/register/teacher", log.addTeacher);
router.get("/api/teacher/getdata", log.getTeacherData);
router.post("/api/update/teacherdetail", log.updateTeacher);
router.post("/api/delete/teacherdetail", log.deleteTeacher);
module.exports = router;