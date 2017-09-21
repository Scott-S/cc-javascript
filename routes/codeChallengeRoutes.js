'use strict';
var express = require('express');
var router = express.Router();
var codeChallengeController = require('../controllers/codeChallengeController');

router.get('/code/challenge', codeChallengeController.getMyInfo);

module.exports = router;