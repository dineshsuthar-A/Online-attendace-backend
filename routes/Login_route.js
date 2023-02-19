const express = require('express');
const router = express.Router();
const log = require('../Controller/Login');


router.post("/api/login", log.login);

module.exports = router;