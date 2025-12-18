const express = require('express');
const router = express.Router();

const { addsamplejobs, getAllJobs } = require('../controllers/jobs.controller');

router.get('/', getAllJobs);

module.exports = router;