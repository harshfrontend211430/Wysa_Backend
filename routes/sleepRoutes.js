const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleepController');

// POST sleep assessment
router.post('/sleep-assessment', sleepController.submitSleepAssessment);

// GET sleep assessment for a user
router.get('/sleep-assessment/:userId', sleepController.getSleepAssessment);

module.exports = router;
