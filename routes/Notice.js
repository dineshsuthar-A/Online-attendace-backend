const express = require('express');
const router = express.Router();
const log = require('../Controller/NoticeController');
const { route } = require('./Login_route');

router.post("/api/notice/add", log.addNotice);
router.post("/api/notice/delete", log.deleteNotice);
router.get("/api/notice/get", log.getNotice);

router.post("/api/notice/update", log.updateNotice);
module.exports = router;