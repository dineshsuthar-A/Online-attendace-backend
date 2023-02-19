const express = require('express');
const router = express.Router();
const log = require('../Controller/AddStudent');

router.post("/api/register/student", log.addStudent);
router.post("/api/delete/studentdetail", log.deleteStudent);
router.get("/api/student/getdata", log.getStudentData);
router.post("/api/update/studentdetail", log.updateStudent);
router.get("/api/data/student", log.getClassStudent);
module.exports = router;