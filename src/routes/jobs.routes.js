const express = require('express');
const router = express.Router();

const { seedJobs, getAllJobs } = require('../controllers/jobs.controller');

router.get('/', getAllJobs);
router.post("/seed", seedJobs);

module.exports = router;